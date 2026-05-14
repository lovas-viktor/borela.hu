export interface PartnerData {
  name: string;
  industry: string;
  partnerSince?: string;
}

// Text-only — no logos (legal risk without brand-use permission)
export const partners: PartnerData[] = [
  { name: "Knorr-Bremse", industry: "Commercial vehicles / braking systems", partnerSince: "2007" },
  { name: "Mercedes-Benz Manufacturing Hungary", industry: "Automotive", partnerSince: "2019" },
  { name: "Hilti", industry: "Power tools & fastening systems" },
  { name: "Freudenberg", industry: "Sealing technology & fluid control" },
  { name: "Sulzer", industry: "Industrial pumps & rotating equipment" },
  { name: "Phoenix Mecano", industry: "Enclosures & industrial components" },
  { name: "Zarges", industry: "Aluminium structures & access systems" },
];
