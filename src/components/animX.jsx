export const PlayerX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="h-12 w-12"
  >
    <line
      x1="20"
      y1="20"
      x2="80"
      y2="80"
      stroke="#ef4444"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="84.85"
      strokeDashoffset="84.85"
      style={{
        animation: 'draw-x1 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
      }}
    />
    <line
      x1="80"
      y1="20"
      x2="20"
      y2="80"
      stroke="#ef4444"
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="84.85"
      strokeDashoffset="84.85"
      style={{
        animation: 'draw-x2 0.35s 0.18s cubic-bezier(0.4,0,0.2,1) forwards',
      }}
    />
    <style>{`
      @keyframes draw-x1 {
        to { stroke-dashoffset: 0; }
      }
      @keyframes draw-x2 {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);
