export interface ServiceData {
  slug: string;
  title: string;
  href: string;
  description: string;
  specs: { label: string; value: string }[];
  icon?: string;
}

export const services: ServiceData[] = [
  {
    slug: "cnc-turning",
    title: "CNC Turning",
    href: "/services/cnc-turning/",
    description: "Precision turned parts on 40 CNC lathes. Bar capacity Ø1–90 mm, multi-axis with Y-axis and sub-spindle. Typical tolerance ±0.01 mm.",
    specs: [
      { label: "Machines", value: "40 CNC lathes" },
      { label: "Bar Ø", value: "1–90 mm" },
      { label: "Tolerance", value: "±0.01 mm" },
    ],
  },
  {
    slug: "cnc-milling",
    title: "CNC Milling",
    href: "/services/cnc-milling/",
    description: "3- and 4-axis milling on 6 machining centers. Horizontal and vertical configurations. Complex prismatic parts and housings.",
    specs: [
      { label: "Machines", value: "6 machining centers" },
      { label: "Axes", value: "3 and 4" },
      { label: "Tolerance", value: "±0.01 mm" },
    ],
  },
  {
    slug: "heat-treatment",
    title: "Heat Treatment",
    href: "/services/heat-treatment/",
    description: "Full heat treatment workflow — case hardening, induction hardening, annealing — coordinated via a certified professional partner near our facility.",
    specs: [
      { label: "Type", value: "Coordinated via partner" },
      { label: "Lead time", value: "+1–2 weeks" },
    ],
  },
  {
    slug: "press-work",
    title: "Press Work",
    href: "/services/press-work/",
    description: "Mechanical pressing and forming operations. Blanking, bending, drawing. Integrated with CNC machining for complete part families.",
    specs: [
      { label: "Process", value: "Blanking, bending, drawing" },
    ],
  },
  {
    slug: "prototyping",
    title: "Prototyping",
    href: "/services/prototyping/",
    description: "Sample and prototype production before series commitment. First Article Inspection (FAI) included. Same machines and tolerances as series.",
    specs: [
      { label: "Inspection", value: "FAI included" },
      { label: "Lead time", value: "Short run" },
    ],
  },
  {
    slug: "assembly",
    title: "Assembly",
    href: "/services/assembly/",
    description: "Sub-assembly and complex component integration. Machined, pressed and sourced parts combined to customer specification.",
    specs: [
      { label: "Type", value: "Sub-assembly" },
    ],
  },
  {
    slug: "measurement",
    title: "3D Measurement & QC",
    href: "/services/measurement/",
    description: "In-house CMM (coordinate measuring machine), contour measurement and micro-hardness testing. ISO 9001 controlled measurement room.",
    specs: [
      { label: "Equipment", value: "CMM, contour gauge" },
      { label: "Hardness", value: "Micro-hardness testing" },
    ],
  },
  {
    slug: "welding",
    title: "Welding (TIG)",
    href: "/services/welding/",
    description: "TIG/WIG precision welding for machined assemblies. Steel, aluminium and stainless steel. ISO 9001 quality-controlled process.",
    specs: [
      { label: "Method", value: "TIG / WIG" },
      { label: "Materials", value: "Steel, Alu, SS" },
    ],
  },
];
