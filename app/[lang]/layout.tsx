import type { Metadata } from "next";
import { Public_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { rootMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/components/seo/schemas";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-public-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);
  const ui = dict.shared ?? {};

  return (
    <html lang={lang} className={`${publicSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
      </head>
      <body className="font-sans bg-background text-ink antialiased">
        <SkipLink />
        <Header lang={lang} ui={ui} />
        <main id="main">{children}</main>
        <Footer lang={lang} ui={ui} />
      </body>
    </html>
  );
}
