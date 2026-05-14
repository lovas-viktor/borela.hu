export interface CaseStudyCard {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  href: string;
}

export const caseStudies: CaseStudyCard[] = [
  {
    slug: "high-volume-brake-components",
    title: "High-volume brake components",
    client: "Knorr-Bremse",
    industry: "Commercial vehicles",
    summary:
      "Precision CNC turned brake system components at 25,000+ pieces per month. Supplier of the Year recognition in 2009.",
    href: "/references/case-studies/high-volume-brake-components/",
  },
  {
    slug: "oem-engineering-collaboration",
    title: "OEM engineering collaboration",
    client: "Automotive OEM",
    industry: "Automotive",
    summary:
      "Multi-year development partnership for turned aluminium housings. First article to series in under 8 weeks.",
    href: "/references/case-studies/oem-engineering-collaboration/",
  },
];
