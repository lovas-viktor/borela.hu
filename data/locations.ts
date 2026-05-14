export interface LocationData {
  id: string;
  name: string;
  role: string;
  address: string;
  area?: string;
  description: string;
}

export const locations: LocationData[] = [
  {
    id: "izsak",
    name: "Izsák — Headquarters",
    role: "Administration & Sales",
    address: "Garai u. 6., 6070 Izsák, Bács-Kiskun, Hungary",
    description:
      "Company headquarters. Sales, administration and engineering coordination. Primary contact point for all inquiries.",
  },
  {
    id: "jakabszallas",
    name: "Jakabszállás — Main Plant",
    role: "CNC Machining, Press Work & Assembly",
    address: "Jakabszállás, Bács-Kiskun, Hungary",
    area: "3,000 m²",
    description:
      "Primary machining and manufacturing plant. Houses 40 CNC lathes and 6 machining centers. Press work, assembly and 3D measurement also performed here.",
  },
  {
    id: "fulopszallas",
    name: "Fülöpszállás — Secondary Plant",
    role: "CNC Machining",
    address: "Fülöpszállás, Bács-Kiskun, Hungary",
    area: "2,000 m²",
    description:
      "Secondary machining facility. Additional CNC turning and milling capacity for high-volume series production.",
  },
];
