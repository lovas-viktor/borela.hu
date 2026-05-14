export interface CertData {
  name: string;
  since: string;
  scope?: string;
}

export const certifications: CertData[] = [
  {
    name: "ISO 9001:2015",
    since: "1996",
    scope: "Quality Management System — precision machining and manufacturing",
  },
  {
    name: "ISO 14001:2015",
    since: "2005",
    scope: "Environmental Management System",
  },
  {
    name: "VDA 6.3",
    since: "2016",
    scope: "Process audit — automotive supplier qualification",
  },
  {
    name: "Knorr-Bremse PSA",
    since: "2007",
    scope: "Preferred Supplier Award — OEM recognition",
  },
];
