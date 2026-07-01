import Image from "next/image";
import worldmap from "@/data/worldmap.json";

type PointKey = keyof typeof worldmap.points;

interface Node {
  key: PointKey;
  logo: string;
  name: string;
  // Label box offset from the geographic point (Europe is crowded → fan out).
  dx: number;
  dy: number;
}

// Target countries (Hungary = origin, handled separately). Knorr-Bremse repeats
// across its five locations; the logo makes the company clear per the brief.
const NODES: Node[] = [
  // Europe is crowded — fan into rows below the cluster (leader lines link back).
  // Top row: fr, ch, de. Bottom row: li (left) + Mercedes (right, handled separately).
  { key: "fr", logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse", dx: -71, dy: 34 },
  { key: "ch", logo: "/partners/sulzer.png", name: "Sulzer", dx: -17, dy: 35 },
  { key: "de", logo: "/partners/freudenberg.png", name: "Freudenberg", dx: 47, dy: 46 },
  { key: "li", logo: "/partners/hilti.png", name: "Hilti", dx: -56, dy: 84 },
  { key: "jp", logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse", dx: 0, dy: -30 },
  { key: "cn", logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse", dx: 0, dy: -30 },
  { key: "in", logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse", dx: 0, dy: 30 },
  { key: "br", logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse", dx: 0, dy: 32 },
];

const BOX_W = 68;
const BOX_H = 44;

interface WorldMapProps {
  heading: string;
  lead: string;
  label?: string;
}

export default function WorldMap({ heading, lead, label }: WorldMapProps) {
  const { land, points } = worldmap;
  const hu = points.hu;

  // Arched quadratic path from Hungary to a target point.
  const arc = (to: { x: number; y: number }) => {
    const mx = (hu.x + to.x) / 2;
    const my = Math.min(hu.y, to.y) - Math.hypot(to.x - hu.x, to.y - hu.y) * 0.18 - 6;
    return `M ${hu.x} ${hu.y} Q ${mx} ${my} ${to.x} ${to.y}`;
  };

  return (
    <div>
      {label && <div className="font-mono text-[10px] tracking-[0.12em] text-ink-tertiary uppercase mb-7">{label}</div>}
      <div className="max-w-2xl mb-10">
        <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-0.02em] uppercase text-ink mb-4">
          {heading}
        </h2>
        <p className="text-[16px] text-ink-secondary leading-relaxed">{lead}</p>
      </div>

      <div className="relative border border-border bg-surface">
        <svg viewBox="285 42 675 336" className="w-full h-auto" role="img" aria-label={heading}>
          {/* Landmasses */}
          <path d={land} className="fill-surface-alt stroke-border-strong" strokeWidth={0.4} strokeLinejoin="round" />

          {/* Shipping arrows from Hungary */}
          {NODES.map((n) => (
            <path
              key={`arc-${n.key}`}
              d={arc(points[n.key])}
              fill="none"
              className="stroke-primary"
              strokeWidth={1}
              strokeOpacity={0.3}
            />
          ))}
          {/* Animated blue dots travelling from Hungary outward */}
          {NODES.map((n, i) => (
            <circle key={`flow-${n.key}`} r={1.7} className="fill-primary">
              <animateMotion
                dur="3.4s"
                begin={`${(i % 4) * 0.6}s`}
                repeatCount="indefinite"
                path={arc(points[n.key])}
              />
            </circle>
          ))}

          {/* Leader lines + target dots */}
          {NODES.map((n) => {
            const pt = points[n.key];
            return (
              <g key={`node-${n.key}`}>
                {(n.dx !== 0 || n.dy !== 0) && (
                  <line x1={pt.x} y1={pt.y} x2={pt.x + n.dx} y2={pt.y + n.dy} className="stroke-border-strong" strokeWidth={0.5} />
                )}
                <circle cx={pt.x} cy={pt.y} r={2.2} className="fill-primary" />
              </g>
            );
          })}

          {/* Hungary origin (Borela) */}
          <circle cx={hu.x} cy={hu.y} r={3.4} className="fill-primary" />
          <circle cx={hu.x} cy={hu.y} r={6} className="fill-none stroke-primary" strokeWidth={0.8} strokeOpacity={0.5} />

          {/* Partner logos */}
          {NODES.map((n) => {
            const pt = points[n.key];
            const cx = pt.x + n.dx;
            const cy = pt.y + n.dy;
            return (
              <g key={`logo-${n.key}`}>
                <rect x={cx - BOX_W / 2} y={cy - BOX_H / 2} width={BOX_W} height={BOX_H} rx={2} className="fill-background stroke-border" strokeWidth={0.5} />
                <image
                  href={n.logo}
                  x={cx - BOX_W / 2 + 4}
                  y={cy - BOX_H / 2 + 4}
                  width={BOX_W - 8}
                  height={BOX_H - 8}
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            );
          })}

          {/* Mercedes — Hungarian plant; its arrow points home to Hungary */}
          <g>
            <path d={`M 520 198 Q 508 156 ${hu.x} ${hu.y}`} fill="none" className="stroke-primary" strokeWidth={1} strokeOpacity={0.3} />
            <rect x={520 - BOX_W / 2} y={198 - BOX_H / 2} width={BOX_W} height={BOX_H} rx={2} className="fill-background stroke-border" strokeWidth={0.5} />
            <image href="/partners/mercedes.png" x={520 - BOX_W / 2 + 4} y={198 - BOX_H / 2 + 4} width={BOX_W - 8} height={BOX_H - 8} preserveAspectRatio="xMidYMid meet" />
          </g>

          {/* Keller Systeme AG — Switzerland (shares the CH point with Sulzer) */}
          <g>
            <line x1={points.ch.x} y1={points.ch.y} x2={590} y2={198} className="stroke-border-strong" strokeWidth={0.5} />
            <rect x={590 - BOX_W / 2} y={198 - BOX_H / 2} width={BOX_W} height={BOX_H} rx={2} className="fill-background stroke-border" strokeWidth={0.5} />
            <image href="/partners/keller.png" x={590 - BOX_W / 2 + 4} y={198 - BOX_H / 2 + 4} width={BOX_W - 8} height={BOX_H - 8} preserveAspectRatio="xMidYMid meet" />
          </g>

          {/* Borela logo on Hungary */}
          <g>
            <rect x={hu.x - 30} y={hu.y - 44} width={60} height={26} rx={2} className="fill-primary" />
            <image
              href="/partners/borela.png"
              x={hu.x - 26}
              y={hu.y - 40}
              width={52}
              height={18}
              preserveAspectRatio="xMidYMid meet"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <line x1={hu.x} y1={hu.y} x2={hu.x} y2={hu.y - 18} className="stroke-primary" strokeWidth={0.6} />
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        {[
          { logo: "/partners/freudenberg.png", name: "Freudenberg" },
          { logo: "/partners/hilti.png", name: "Hilti" },
          { logo: "/partners/knorr-bremse.png", name: "Knorr-Bremse" },
          { logo: "/partners/mercedes.png", name: "Mercedes-Benz" },
          { logo: "/partners/sulzer.png", name: "Sulzer" },
          { logo: "/partners/keller.png", name: "Keller Systeme" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <Image src={p.logo} alt={p.name} width={28} height={20} className="h-4 w-auto object-contain" />
            <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
