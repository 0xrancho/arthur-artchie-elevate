interface QuadrantVisualizationProps {
  rrScore: number; // 0-5
  rrpScore: number; // 0-15 (bands: <3, 3-8, 8-15, >15)
  quadrant: string;
  trajectory: string;
}

export const QuadrantVisualization = ({
  rrScore,
  rrpScore,
  quadrant,
  trajectory,
}: QuadrantVisualizationProps) => {
  // SVG dimensions
  const width = 400;
  const height = 400;
  const padding = 60;
  const gridSize = width - padding * 2;

  // Calculate position (X = RRP: 0-15, Y = RR: 0-5)
  const calculatePosition = (rr: number, rrp: number) => {
    // Clamp values to ensure they stay within bounds
    const clampedRR = Math.min(Math.max(rr, 0), 5);
    const clampedRRP = Math.min(Math.max(rrp, 0), 15);

    const x = padding + (clampedRRP / 15) * gridSize; // X-axis is RRP (Risk & Revenue Potential)
    const y = padding + ((5 - clampedRR) / 5) * gridSize; // Y-axis is RR (Relationship & Reciprocity), inverted for SVG
    return { x, y };
  };

  // Calculate trajectory arrow rotation
  const getTrajectoryRotation = (trajectory: string): number => {
    const rotations: Record<string, number> = {
      'Strategic Growth': -45, // Up-right
      'Revenue Growth': 0, // Right
      'Trust Growth': -90, // Up
      'Stable': 0,
      'Declining Trust': 90, // Down
      'Declining Revenue': 180, // Left
      'Full Decline': 135, // Down-left
    };
    return rotations[trajectory] || 0;
  };

  // Get quadrant color
  const getQuadrantColor = (quad: string): string => {
    const colors: Record<string, string> = {
      'Strategic Partner': '#4ADE80', // Green
      'Trusted Specialist': '#22D3EE', // Cyan
      'Embedded Utility': '#F59E0B', // Amber
      'Declining Vendor': '#EF4444', // Red
    };
    return colors[quad] || '#64748B';
  };

  const position = calculatePosition(rrScore, rrpScore);
  const rotation = getTrajectoryRotation(trajectory);
  const color = getQuadrantColor(quadrant);

  return (
    <div className="flex flex-col items-center">
      <svg
        width={width}
        height={height}
        className="font-mono"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        {/* Background quadrants */}
        <rect
          x={padding}
          y={padding}
          width={gridSize / 2}
          height={gridSize / 2}
          fill="rgba(34, 211, 238, 0.05)"
          stroke="#334155"
          strokeWidth="1"
        />
        <rect
          x={padding + gridSize / 2}
          y={padding}
          width={gridSize / 2}
          height={gridSize / 2}
          fill="rgba(74, 222, 128, 0.05)"
          stroke="#334155"
          strokeWidth="1"
        />
        <rect
          x={padding}
          y={padding + gridSize / 2}
          width={gridSize / 2}
          height={gridSize / 2}
          fill="rgba(239, 68, 68, 0.05)"
          stroke="#334155"
          strokeWidth="1"
        />
        <rect
          x={padding + gridSize / 2}
          y={padding + gridSize / 2}
          width={gridSize / 2}
          height={gridSize / 2}
          fill="rgba(245, 158, 11, 0.05)"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Axis lines */}
        <line
          x1={padding}
          y1={padding + gridSize / 2}
          x2={padding + gridSize}
          y2={padding + gridSize / 2}
          stroke="#475569"
          strokeWidth="2"
        />
        <line
          x1={padding + gridSize / 2}
          y1={padding}
          x2={padding + gridSize / 2}
          y2={padding + gridSize}
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Quadrant labels */}
        {/* Top-left: Trusted Specialist (Low RRP, High RR) */}
        <text
          x={padding + gridSize / 4}
          y={padding + gridSize / 4}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          TRUSTED
        </text>
        <text
          x={padding + gridSize / 4}
          y={padding + gridSize / 4 + 12}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          SPECIALIST
        </text>

        {/* Top-right: Strategic Partner (High RRP, High RR) */}
        <text
          x={padding + (gridSize * 3) / 4}
          y={padding + gridSize / 4}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          STRATEGIC
        </text>
        <text
          x={padding + (gridSize * 3) / 4}
          y={padding + gridSize / 4 + 12}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          PARTNER
        </text>

        {/* Bottom-left: Declining Vendor (Low RRP, Low RR) */}
        <text
          x={padding + gridSize / 4}
          y={padding + (gridSize * 3) / 4}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          DECLINING
        </text>
        <text
          x={padding + gridSize / 4}
          y={padding + (gridSize * 3) / 4 + 12}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          VENDOR
        </text>

        {/* Bottom-right: Embedded Utility (High RRP, Low RR) */}
        <text
          x={padding + (gridSize * 3) / 4}
          y={padding + (gridSize * 3) / 4}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          EMBEDDED
        </text>
        <text
          x={padding + (gridSize * 3) / 4}
          y={padding + (gridSize * 3) / 4 + 12}
          textAnchor="middle"
          className="text-[10px] fill-gray-400 font-mono font-bold"
        >
          UTILITY
        </text>

        {/* Axis labels */}
        <text
          x={padding + gridSize / 2}
          y={height - 20}
          textAnchor="middle"
          className="text-xs fill-gray-300 font-mono font-bold"
        >
          RRP (Risk & Revenue Potential) →
        </text>
        <text
          x={20}
          y={padding + gridSize / 2}
          textAnchor="middle"
          className="text-xs fill-gray-300 font-mono font-bold"
          transform={`rotate(-90, 20, ${padding + gridSize / 2})`}
        >
          ← RR (Relationship & Reciprocity)
        </text>

        {/* Scale markers */}
        {/* Y-axis (RR): 0-5 */}
        <text x={padding - 10} y={padding + 5} textAnchor="end" className="text-[10px] fill-gray-500 font-mono">
          5
        </text>
        <text x={padding - 10} y={padding + gridSize / 2 + 5} textAnchor="end" className="text-[10px] fill-gray-500 font-mono">
          2.5
        </text>
        <text x={padding - 10} y={padding + gridSize + 5} textAnchor="end" className="text-[10px] fill-gray-500 font-mono">
          0
        </text>

        {/* X-axis (RRP): 0-15 */}
        <text x={padding} y={padding + gridSize + 20} textAnchor="middle" className="text-[10px] fill-gray-500 font-mono">
          0
        </text>
        <text x={padding + gridSize / 2} y={padding + gridSize + 20} textAnchor="middle" className="text-[10px] fill-gray-500 font-mono">
          7.5
        </text>
        <text x={padding + gridSize} y={padding + gridSize + 20} textAnchor="middle" className="text-[10px] fill-gray-500 font-mono">
          15
        </text>

        {/* Position dot with glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pulse">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow ring */}
        <circle
          cx={position.x}
          cy={position.y}
          r="16"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.3"
        >
          <animate
            attributeName="r"
            values="16;20;16"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Position dot */}
        <circle
          cx={position.x}
          cy={position.y}
          r="10"
          fill={color}
          filter="url(#glow)"
          className="cursor-pointer"
        />
        <circle
          cx={position.x}
          cy={position.y}
          r="6"
          fill="white"
          opacity="0.9"
        />

        {/* Trajectory arrow */}
        {trajectory !== 'Stable' && (
          <g
            transform={`translate(${position.x}, ${position.y}) rotate(${rotation})`}
          >
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="0"
              stroke={color}
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              filter="url(#pulse)"
            >
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </line>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  fill={color}
                />
              </marker>
            </defs>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-6 flex items-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-gray-300">Current Position</span>
        </div>
        {trajectory !== 'Stable' && (
          <div className="flex items-center gap-2">
            <svg width="20" height="12" className="inline-block">
              <line
                x1="0"
                y1="6"
                x2="16"
                y2="6"
                stroke={color}
                strokeWidth="2"
                markerEnd="url(#legend-arrow)"
              />
              <defs>
                <marker
                  id="legend-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="2.5"
                  orient="auto"
                >
                  <polygon points="0 0, 8 2.5, 0 5" fill={color} />
                </marker>
              </defs>
            </svg>
            <span className="text-gray-300">Trajectory: {trajectory}</span>
          </div>
        )}
      </div>
    </div>
  );
};
