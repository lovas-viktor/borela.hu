import type { Metadata } from "next";

const SITE_URL = "https://borela.eu";
const SITE_NAME = "Borela BT.";
const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
const DEFAULT_OG_IMAGE = "/og/default.jpg";

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: TITLE_TEMPLATE },
  description:
    "Precision CNC contract machining in Hungary. ISO 9001, VDA 6.3, 70+ years heritage. Supplier to Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
};
