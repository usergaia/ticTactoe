export const PlayerO = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle
      cx="24"
      cy="24"
      r="20"
      style={{
        stroke: '#06b6d4',
        strokeDasharray: 2 * Math.PI * 20,
        strokeDashoffset: 2 * Math.PI * 20,
        strokeWidth: 5,
        fill: 'none',
        animation: 'draw-o 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
      }}
    />
    <style>{`
      @keyframes draw-o {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);
