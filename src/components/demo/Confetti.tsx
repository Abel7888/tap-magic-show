import React from "react";

const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#14B8A6", "#F97316"];

const Confetti: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    {Array.from({ length: 24 }).map((_, i) => (
      <div
        key={i}
        className="confetti-dot"
        style={{
          left: `${Math.random() * 100}%`,
          background: colors[i % colors.length],
          animationDelay: `${Math.random() * 0.8}s`,
          animationDuration: `${1.5 + Math.random()}s`,
          width: `${6 + Math.random() * 6}px`,
          height: `${6 + Math.random() * 6}px`,
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
        }}
      />
    ))}
  </div>
);

export default Confetti;
