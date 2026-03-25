import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, color }) => (
  <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
    <div
      className="h-full rounded-full transition-all duration-500 ease-out"
      style={{ width: `${(current / total) * 100}%`, background: color }}
    />
  </div>
);

export default ProgressBar;
