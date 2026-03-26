import React from "react";

interface SmsBubbleProps {
  from: "incoming" | "outgoing";
  sender?: string;
  text: string;
  delay?: number;
}

const SmsBubble: React.FC<SmsBubbleProps> = ({ from, sender, text, delay = 0 }) => {
  const isOutgoing = from === "outgoing";

  return (
    <div
      className="animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {sender && (
        <p className={`text-[10px] font-medium mb-0.5 px-1 ${isOutgoing ? "text-right text-demo-text-muted" : "text-demo-text-muted"}`}>
          {sender}
        </p>
      )}
      <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}>
        <div
          className={`rounded-2xl px-3 py-2 max-w-[82%] ${
            isOutgoing
              ? "bg-[#007AFF] rounded-br-sm"
              : "bg-[#E9E9EB] rounded-bl-sm"
          }`}
        >
          <p className={`text-[13px] leading-relaxed ${isOutgoing ? "text-white" : "text-[#1C1C1E]"}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmsBubble;
