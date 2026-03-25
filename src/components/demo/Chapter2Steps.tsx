import React from "react";
import PhoneMockup from "./PhoneMockup";
import AnimatedCounter from "./AnimatedCounter";

interface StepProps {
  onNext: () => void;
}

export const Ch2Step1: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="animate-fade-up text-center space-y-3">
      <p className="text-6xl font-extrabold text-demo-emerald">
        <AnimatedCounter target={6} />
      </p>
      <p className="text-lg text-demo-light/80 font-medium">calls you missed last week</p>
    </div>

    <div className="space-y-2">
      {[
        "Monday 8:47am — Missed call — Unknown",
        "Tuesday 2:13pm — Missed call — 587-xxx-xxxx",
        "Wednesday 11:30am — Missed call — Unknown",
        "Thursday 4:52pm — Missed call — 587-xxx-xxxx",
      ].map((line, i) => (
        <div key={i} className="animate-slide-left bg-gray-800/80 rounded-xl p-3 border border-gray-700/50" style={{ animationDelay: `${300 + i * 200}ms` }}>
          <p className="text-[13px] text-demo-light/80 flex items-center gap-2">
            <span className="text-red-400">📵</span> {line}
          </p>
        </div>
      ))}
    </div>

    <div className="animate-fade-up delay-800 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center">
      <p className="text-[15px] text-red-400">
        At $320 average job value, that's <strong className="text-xl"><AnimatedCounter target={1920} prefix="$" /></strong> that called you and got no reply.
      </p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-emerald text-white font-semibold text-[15px]">
      See how we recover it →
    </button>
  </div>
);

export const Ch2Step2: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="animate-fade-up text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 bg-demo-emerald/30" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-emerald">The 60-Second Text Back</p>
        <div className="h-px flex-1 bg-demo-emerald/30" />
      </div>
    </div>

    <PhoneMockup>
      <div className="pt-6 pb-4 space-y-3">
        <div className="animate-fade-up delay-200">
          <div className="bg-demo-emerald rounded-2xl rounded-tl-sm p-3 max-w-[90%]">
            <p className="text-[13px] text-white leading-relaxed">
              Hey! This is Mike's Plumbing — sorry we missed your call. Still need a hand? Reply here or grab a time: <span className="underline">book.mikesplumbing.com</span> 👍
            </p>
          </div>
          <p className="text-[10px] text-demo-text-muted mt-1">Sent · 2:15 PM</p>
        </div>
      </div>
    </PhoneMockup>

    <div className="animate-fade-up delay-400 bg-demo-emerald/10 border border-demo-emerald/20 rounded-2xl p-4 space-y-1">
      <p className="text-emerald-300 text-[15px]"><strong>62 seconds</strong> after the missed call.</p>
      <p className="text-emerald-300/70 text-[15px]">The lead hasn't called anyone else yet.</p>
      <p className="text-emerald-300/70 text-[15px]">Your message is already in their pocket.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-emerald text-white font-semibold text-[15px]">
      See what happens when they reply →
    </button>
  </div>
);

export const Ch2Step3: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <PhoneMockup>
      <div className="pt-4 pb-4 space-y-2">
        {[
          { from: "ai", text: "Hey! This is Mike's Plumbing — sorry we missed your call. Still need a hand?" },
          { from: "user", text: "Yeah I need my furnace looked at" },
          { from: "ai", text: "We can help with that! Are you in the Edmonton area?" },
          { from: "user", text: "Yes — Windermere" },
          { from: "ai", text: "Perfect — we cover Windermere. Want to grab a time this week? Here's our booking link: book.mikesplumbing.com" },
          { from: "user", text: "Done — booked for Thursday" },
        ].map((msg, i) => (
          <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 180}ms` }}>
            <div className={`rounded-2xl p-2.5 max-w-[82%] ${msg.from === "ai" ? "bg-demo-emerald rounded-tl-sm" : "bg-gray-100 rounded-tr-sm ml-auto"}`}>
              <p className={`text-[12px] leading-relaxed ${msg.from === "ai" ? "text-white" : "text-demo-text"}`}>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </PhoneMockup>

    <div className="animate-fade-up delay-800 bg-green-500/15 border border-green-500/25 rounded-2xl p-4 text-center space-y-1">
      <p className="text-lg font-bold text-green-400">Job recovered.</p>
      <p className="text-green-400 font-bold"><AnimatedCounter target={340} prefix="$" /> back in Mike's pocket.</p>
      <p className="text-green-400/60 text-[13px]">Mike was asleep when this happened.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-emerald text-white font-semibold text-[15px]">
      See the recovery dashboard →
    </button>
  </div>
);

export const Ch2Step4: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="animate-fade-up">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-emerald text-center mb-4">This Week's Recovery Report</p>
      <div className="bg-gray-800/80 rounded-2xl p-5 border border-gray-700/50 space-y-4">
        {[
          { label: "Missed calls texted", value: 8 },
          { label: "Replied", value: 5 },
          { label: "Booked", value: 3 },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
            <p className="text-[14px] text-demo-light/70">{item.label}</p>
            <p className="text-xl font-bold text-demo-emerald"><AnimatedCounter target={item.value} /></p>
          </div>
        ))}
        <div className="border-t border-gray-700 pt-3 flex justify-between items-center animate-fade-up delay-600">
          <p className="text-[14px] text-demo-light/70">Revenue recovered</p>
          <p className="text-2xl font-extrabold text-demo-emerald"><AnimatedCounter target={1020} prefix="$" /></p>
        </div>
        <div className="animate-fade-up delay-700 bg-demo-emerald/10 rounded-lg p-2 text-center">
          <p className="text-[13px] text-demo-emerald font-semibold">Recovery rate: 38%</p>
        </div>
      </div>
    </div>

    <div className="animate-fade-up delay-500 bg-demo-emerald/10 border border-demo-emerald/20 rounded-2xl p-4 text-center">
      <p className="text-emerald-300 text-[15px]"><strong>3 jobs. $1,020.</strong> From calls that already happened.</p>
      <p className="text-emerald-300/70 text-[14px] mt-1">Zero extra marketing spend. This is found money.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-amber text-demo-dark font-semibold text-[15px]">
      See Agent 3 →
    </button>
  </div>
);
