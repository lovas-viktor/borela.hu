export interface IndustryData {
  slug: string;
  title: string;
  href: string;
  meta: string;
  description: string;
}

export const industries: IndustryData[] = [
  {
    slug: "automotive",
    title: "Automotive",
    href: "/industries/automotive/",
    meta: "Tier 1 / Tier 2 supply",
    description:
      "Precision turned and milled components for passenger vehicle platforms. VDA 6.3 audited. Knorr-Bremse Preferred Supplier since 2007.",
  },
  {
    slug: "commercial-vehicles",
    title: "Commercial Vehicles",
    href: "/industries/commercial-vehicles/",
    meta: "Heavy trucks & trailers",
    description:
      "High-volume series production for truck and trailer systems. Brake components, axle parts, hydraulic housings.",
  },
  {
    slug: "power-tools",
    title: "Power Tools",
    href: "/industries/power-tools/",
    meta: "Precision gearbox parts",
    description:
      "Close-tolerance gearbox housings, shafts and inserts for professional power tool manufacturers including Hilti.",
  },
  {
    slug: "sealing-technology",
    title: "Sealing Technology",
    href: "/industries/sealing-technology/",
    meta: "Fluid control & sealing",
    description:
      "Machined components for sealing and fluid control systems. Experience with Freudenberg and Sulzer part families.",
  },
  {
    slug: "general-engineering",
    title: "General Engineering",
    href: "/industries/general-engineering/",
    meta: "Industrial equipment",
    description:
      "Versatile contract machining for mechanical engineering, packaging machinery and general industrial equipment.",
  },
];
