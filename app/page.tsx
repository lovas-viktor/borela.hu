import type { Metadata } from "next";

// Static-export root: redirect to the default locale.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/en/" },
};

export default function RootRedirect() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <link rel="canonical" href="/en/" />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        Redirecting to{" "}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- static redirect shell, not app navigation */}
        <a href="/en/">borela.eu</a>…
      </body>
    </html>
  );
}
