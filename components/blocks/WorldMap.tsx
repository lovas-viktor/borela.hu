import worldmap from "@/data/worldmap.json";

type PointKey = keyof typeof worldmap.points;

interface Node {
  key: PointKey;
}

// Target countries (Hungary = origin). Dots only — no km labels (brief).
const NODES: Node[] = [
  { key: "fr" },
  { key: "ch" },
  { key: "de" },
  { key: "li" },
  { key: "jp" },
  { key: "cn" },
  { key: "in" },
  { key: "br" },
];

interface WorldMapProps {
  heading: string;
  lead?: string;
  label?: string;
}

export default function WorldMap({ heading, lead, label }: WorldMapProps) {
  const { land, points } = worldmap;
  const hu = points.hu;

  // Arched quadratic path from Hungary to a target point.
  const arcPath = (to: { x: number; y: number }) => {
    const mx = (hu.x + to.x) / 2;
    const my = Math.min(hu.y, to.y) - Math.hypot(to.x - hu.x, to.y - hu.y) * 0.18 - 6;
    return `M ${hu.x} ${hu.y} Q ${mx} ${my} ${to.x} ${to.y}`;
  };

  return (
    <div>
      {label && <div className="font-mono text-[10px] tracking-[0.12em] text-ink-tertiary uppercase mb-7">{label}</div>}
      <div className="max-w-2xl mb-10">
        <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-0.02em] uppercase text-ink">
          {heading}
        </h2>
        {lead && <p className="text-[16px] text-ink-secondary leading-relaxed mt-4">{lead}</p>}
      </div>

      <div className="relative border border-border bg-surface">
        <svg viewBox="285 42 675 269" className="w-full h-auto" role="img" aria-label={heading}>
          {/* Landmasses */}
          <path d={land} className="fill-surface-alt stroke-border-strong" strokeWidth={0.4} strokeLinejoin="round" />

          {/* Shipping arcs from Hungary */}
          {NODES.map((n) => (
            <path
              key={`arc-${n.key}`}
              d={arcPath(points[n.key])}
              fill="none"
              className="stroke-primary"
              strokeWidth={1}
              strokeOpacity={0.3}
            />
          ))}

          {/* Target dots */}
          {NODES.map((n) => (
            <circle key={`dot-${n.key}`} cx={points[n.key].x} cy={points[n.key].y} r={2.2} className="fill-primary" />
          ))}

          {/* Animated blue dots travelling from Hungary outward */}
          {NODES.map((n, i) => (
            <circle key={`flow-${n.key}`} r={1.7} className="fill-primary">
              <animateMotion
                dur="3.4s"
                begin={`${(i % 4) * 0.6}s`}
                repeatCount="indefinite"
                path={arcPath(points[n.key])}
              />
            </circle>
          ))}

          {/* Hungary origin (Borela) */}
          <circle cx={hu.x} cy={hu.y} r={3.4} className="fill-primary" />
          <circle cx={hu.x} cy={hu.y} r={6} className="fill-none stroke-primary" strokeWidth={0.8} strokeOpacity={0.5} />

          {/* Borela logo on Hungary (the origin marker — not a partner logo) */}
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
    </div>
  );
}
