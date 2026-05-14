export interface MachineEntry {
  category: string;
  count: number;
  spec: string;
}

export interface MaterialFamily {
  name: string;
  examples: string;
}

export interface ToleranceRow {
  process: string;
  typical: string;
  note?: string;
}

export const machines: MachineEntry[] = [
  { category: "CNC Turning (multi-axis)", count: 12, spec: "Goodway GLS-3300 YS, Citizen-Miyano BNE 51 MSY — Y-axis, sub-spindle" },
  { category: "CNC Turning (standard)", count: 28, spec: "Index C65, Citizen Cincom L32A-1M8 — bar Ø1–90 mm" },
  { category: "CNC Machining Centers", count: 6, spec: "3- and 4-axis, horizontal and vertical configurations" },
  { category: "Press machines", count: 8, spec: "Mechanical presses 25–100 t" },
  { category: "CMM / Measurement", count: 2, spec: "Coordinate measuring machine + contour measuring instrument" },
];

export const materials: MaterialFamily[] = [
  { name: "Steel", examples: "C45, 42CrMo4, 16MnCr5, case-hardening steels" },
  { name: "Aluminium", examples: "EN AW-6082, 7075, AlSi-alloys" },
  { name: "Stainless steel", examples: "1.4301 (304), 1.4404 (316L), duplex grades" },
  { name: "Brass & Copper alloys", examples: "CuZn39Pb3 (CW614N), CuSn8, CuCr1Zr" },
  { name: "Cast iron / GGG", examples: "EN-GJL-250, EN-GJS-400, nodular iron" },
];

export const tolerances: ToleranceRow[] = [
  { process: "CNC turning — standard", typical: "±0.05 mm", note: "ISO 2768-m" },
  { process: "CNC turning — precision", typical: "±0.01 mm", note: "With in-process gauging" },
  { process: "CNC milling — standard", typical: "±0.05 mm" },
  { process: "CNC milling — precision", typical: "±0.01 mm" },
  { process: "Surface roughness", typical: "Ra 0.8–3.2 μm", note: "Application dependent" },
  { process: "Thread tolerance", typical: "6H / 6g", note: "ISO standard" },
];
