const SITE_URL = "https://borela.eu";
const ORG_ID = `${SITE_URL}/#organization`;

/* ── Global Organization (referenced by all pages via @id) ── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  "@id": ORG_ID,
  name: "Borela BT.",
  legalName: "BORELA TERMELŐ FORGALMAZÓ ÉS SZOLGÁLTATÓ BT.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/borela-logo.svg`,
    width: 160,
    height: 53,
  },
  foundingDate: "1990-01-01",
  description:
    "Family-owned Hungarian precision CNC machining company with engineering heritage since 1953. Supplier to Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg and Sulzer.",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  naics: "332710",
  isicV4: "2562",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Garai u. 6.",
    postalCode: "6070",
    addressLocality: "Izsák",
    addressRegion: "Bács-Kiskun",
    addressCountry: "HU",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+36-76-569-122",
      contactType: "sales",
      email: "rfq@borela.eu",
      availableLanguage: ["en", "de", "hu"],
    },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "ISO 9001:2015", validFrom: "1996" },
    { "@type": "EducationalOccupationalCredential", name: "ISO 14001:2015", validFrom: "2005" },
    { "@type": "EducationalOccupationalCredential", name: "VDA 6.3", validFrom: "2016" },
    { "@type": "EducationalOccupationalCredential", name: "Knorr-Bremse Preferred Supplier Award", validFrom: "2007" },
  ],
  award: ["Supplier of the Year — Knorr-Bremse (2009)", "Az Év Vállalkozója (2010)"],
  sameAs: [
    "https://www.linkedin.com/company/borela",
  ],
};

/* ── WebSite ── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Borela BT.",
  publisher: { "@id": ORG_ID },
};

/* ── BreadcrumbList ── */
export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

/* ── FAQPage ── */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/* ── Service (pillar page) ── */
export function serviceSchema({
  name,
  url,
  description,
  services,
}: {
  name: string;
  url: string;
  description: string;
  services?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url,
    description,
    provider: { "@id": ORG_ID },
    areaServed: ["DE", "AT", "CH", "HU", "EU"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Automotive and engineering OEMs",
    },
    ...(services && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CNC machining and manufacturing services",
        itemListElement: services.map((svc) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: svc.name, url: svc.url },
        })),
      },
    }),
  };
}

/* ── AboutPage ── */
export function aboutPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Borela BT.",
    url,
    mainEntity: { "@id": ORG_ID },
  };
}

/* ── ContactPage ── */
export function contactPageSchema(url: string, name = "Contact Borela BT.") {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name,
    url,
    about: { "@id": ORG_ID },
  };
}

/* ── LocalBusiness × 3 locations ── */
export const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#location-izsak`,
    name: "Borela BT. — Izsák (Headquarters)",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Garai u. 6.",
      postalCode: "6070",
      addressLocality: "Izsák",
      addressRegion: "Bács-Kiskun",
      addressCountry: "HU",
    },
    telephone: "+36-76-569-122",
    email: "rfq@borela.eu",
    url: `${SITE_URL}/contact/`,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#location-jakabszallas`,
    name: "Borela BT. — Jakabszállás (Main Plant)",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakabszállás",
      addressRegion: "Bács-Kiskun",
      addressCountry: "HU",
    },
    url: `${SITE_URL}/contact/`,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#location-fulopszallas`,
    name: "Borela BT. — Fülöpszállás (Secondary Plant)",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fülöpszállás",
      addressRegion: "Bács-Kiskun",
      addressCountry: "HU",
    },
    url: `${SITE_URL}/contact/`,
  },
];
