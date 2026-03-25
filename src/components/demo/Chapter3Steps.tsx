import React from "react";
import AnimatedCounter from "./AnimatedCounter";

interface StepProps {
  onNext: () => void;
}

export const Ch3Step1: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    {/* Funnel */}
    <div className="animate-fade-up flex flex-col items-center space-y-1">
      <div className="w-[220px] h-12 bg-demo-amber/20 border border-demo-amber/30 rounded-t-xl flex items-center justify-center">
        <p className="text-[12px] text-demo-amber font-medium">100 leads come in</p>
      </div>
      <div className="w-[160px] h-10 bg-demo-amber/15 border-x border-demo-amber/20 flex items-center justify-center">
        <p className="text-[11px] text-demo-amber/80">Most follow up on 20%</p>
      </div>
      <div className="w-[100px] h-10 bg-demo-amber/10 border border-demo-amber/15 rounded-b-xl flex items-center justify-center">
        <p className="text-[11px] text-demo-amber/70">~8 booked</p>
      </div>
      <div className="flex gap-2 pt-1">
        {["💸", "💸", "💸"].map((e, i) => (
          <span key={i} className="animate-fade-up text-lg" style={{ animationDelay: `${600 + i * 150}ms` }}>{e}</span>
        ))}
      </div>
    </div>

    <div className="animate-fade-up delay-500 text-center">
      <p className="text-[15px] text-demo-light/80 leading-relaxed">
        Most trades businesses lose <strong className="text-demo-amber">60–70% of their leads.</strong>
      </p>
      <p className="text-[15px] text-demo-light/60 mt-1">Not because the leads were bad. Because nobody followed up.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-amber text-demo-dark font-semibold text-[15px]">
      See how Agent 3 fixes this →
    </button>
  </div>
);

export const Ch3Step2: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="space-y-3">
      {[
        { icon: "💬", title: "SMS", text: "Hi James! Thanks for reaching out to Calgary HVAC. Here's a quick link to book a time: [link] — or just reply here 👍", color: "bg-demo-amber/10 border-demo-amber/20" },
        { icon: "📧", title: "Email", text: "Subject: Thanks for reaching out, James — We'd love to help with your furnace...", color: "bg-demo-amber/5 border-demo-amber/10" },
      ].map((item, i) => (
        <div key={i} className={`animate-notification ${item.color} border rounded-2xl p-4`} style={{ animationDelay: `${i * 250}ms` }}>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-demo-amber mb-1">{item.icon} {item.title}</p>
          <p className="text-[13px] text-demo-light/80 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="animate-fade-up delay-500 bg-demo-amber/10 border border-demo-amber/20 rounded-2xl p-4">
      <p className="text-amber-300 text-[15px]">James filled out a form at <strong>7:43pm.</strong></p>
      <p className="text-amber-300/80 text-[15px]">By 7:43:09 he had a text AND an email.</p>
      <p className="text-amber-300/60 text-[14px] mt-1">Before he even closed the tab.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-amber text-demo-dark font-semibold text-[15px]">
      See the follow-up sequence →
    </button>
  </div>
);

export const Ch3Step3: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-amber text-center">The AI Nurture Sequence</p>

    <div className="space-y-0 pl-4 border-l-2 border-demo-amber/30">
      {[
        { time: "Day 0 — 7:43pm", icon: "💬", text: "Instant SMS + email sent" },
        { time: "Day 1 — 9:00am", icon: "💬", text: '"Hey James, still looking for an HVAC tech? We have an opening Thursday morning."' },
        { time: "Day 3 — 10:30am", icon: "💬", text: '"Last week one of our clients saved $800 catching a furnace issue early. Want us to take a look at yours?"' },
        { time: "Day 3 — 10:31am", icon: "💬", text: 'James: "Actually yes — what\'s availability?"' },
        { time: "Day 3 — 10:31am", icon: "✅", text: "AI books James for Friday 2pm" },
      ].map((item, i) => (
        <div key={i} className="animate-slide-left pb-4 pl-4 relative" style={{ animationDelay: `${i * 250}ms` }}>
          <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-demo-dark border-2 border-demo-amber/50 flex items-center justify-center text-[10px]">
            {item.icon}
          </div>
          <p className="text-[11px] font-semibold text-demo-amber/80 mb-1">{item.time}</p>
          <p className="text-[13px] text-demo-light/80 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="animate-fade-up delay-800 bg-demo-amber/10 border border-demo-amber/20 rounded-2xl p-4 text-center">
      <p className="text-amber-300 text-[15px]">James was a "maybe later."</p>
      <p className="text-amber-300 text-[15px]">Agent 3 turned him into a <strong>booked job.</strong></p>
      <p className="text-amber-300/60 text-[14px] mt-1">3 days. Zero manual follow-up.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-amber text-demo-dark font-semibold text-[15px]">
      See the conversion numbers →
    </button>
  </div>
);

export const Ch3Step4: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="space-y-3">
      {[
        { label: "Before Agent 3", sublabel: "Lead conversion rate", value: "12%", color: "border-demo-blue/30 bg-demo-blue/5", textColor: "text-demo-blue" },
        { label: "After Agent 3", sublabel: "Lead conversion rate", value: "34%", color: "border-demo-amber/30 bg-demo-amber/10", textColor: "text-demo-amber", large: true },
        { label: "Extra revenue per month", sublabel: "From the same lead volume", value: "$2,100", color: "border-demo-emerald/30 bg-demo-emerald/10", textColor: "text-demo-emerald", large: true },
      ].map((card, i) => (
        <div key={i} className={`animate-fade-up border rounded-2xl p-5 text-center ${card.color}`} style={{ animationDelay: `${i * 250}ms` }}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-light/50 mb-1">{card.label}</p>
          <p className={`${card.large ? "text-4xl" : "text-3xl"} font-extrabold ${card.textColor}`}>{card.value}</p>
          <p className="text-[13px] text-demo-light/50 mt-1">{card.sublabel}</p>
        </div>
      ))}
    </div>

    <div className="animate-fade-up delay-600 text-center">
      <p className="text-[15px] text-demo-light/70">Same leads. Same ad budget. <strong className="text-demo-light">3× more bookings.</strong></p>
      <p className="text-[14px] text-demo-light/50 mt-1">Just better follow-up.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-dark border-2 border-demo-light text-demo-light font-semibold text-[15px]">
      Get all 3 agents →
    </button>
  </div>
);
