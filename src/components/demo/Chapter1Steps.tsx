import React from "react";
import PhoneMockup from "./PhoneMockup";
import AnimatedCounter from "./AnimatedCounter";

interface StepProps {
  onNext: () => void;
  nextLabel?: string;
  nextColor?: string;
}

/* ============= CHAPTER 1 STEPS ============= */

export const Ch1Step1: React.FC<StepProps> = ({ onNext, nextLabel = "See what happens next →" }) => (
  <div className="space-y-5">
    <div className="animate-fade-up">
      <p className="text-[15px] leading-relaxed text-demo-light/90">
        It's <strong>2:14pm on a Tuesday.</strong> Mike Chen, a plumber with 8 years in business, is replacing a water heater in Glenora.
      </p>
      <p className="text-[15px] leading-relaxed text-demo-light/70 mt-2">His phone rings.</p>
    </div>

    <PhoneMockup>
      <div className="pt-6 pb-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-demo-blue/10 mx-auto flex items-center justify-center animate-ring-pulse">
          <svg className="w-8 h-8 text-demo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-text-muted">Incoming Call</p>
        <p className="text-xl font-bold text-demo-text">Sarah M.</p>
        <p className="text-sm text-demo-text-muted">New Customer</p>
        <div className="flex justify-center gap-12 pt-4">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white rotate-[135deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
        </div>
      </div>
    </PhoneMockup>

    <div className="animate-fade-up delay-500 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
      <p className="text-red-400 font-semibold text-[15px]">Mike can't answer. He's under a sink.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-blue text-white font-semibold text-[15px]">
      {nextLabel}
    </button>
  </div>
);

export const Ch1Step2: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <PhoneMockup>
      <div className="pt-6 pb-4 space-y-3">
        <div className="animate-slide-up bg-red-50 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21L8.28 3.684A1 1 0 007.28 3H5z" /></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-demo-text">Missed Call</p>
            <p className="text-xs text-demo-text-muted">Sarah M. · 2:14 PM</p>
          </div>
        </div>
        <div className="animate-slide-up delay-200 bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-demo-text-muted mb-1">🎙 1 New Voicemail</p>
        </div>
        <div className="animate-slide-up delay-400 bg-gray-100 rounded-xl p-3">
          <p className="text-xs font-medium text-demo-text">Sarah M.</p>
          <p className="text-sm text-demo-text-muted mt-1">Nevermind, found someone else 👎</p>
        </div>
      </div>
    </PhoneMockup>

    <div className="animate-fade-up delay-300 bg-red-500/10 border border-red-500/20 rounded-2xl p-5 space-y-2">
      <p className="text-red-400 text-[15px]">Sarah waited <strong>4 minutes.</strong></p>
      <p className="text-red-400 text-[15px]">Called <strong>3 competitors.</strong></p>
      <p className="text-red-400 text-[15px]">Booked the second one that answered.</p>
      <div className="pt-2">
        <p className="text-3xl font-extrabold text-red-400">
          <AnimatedCounter target={380} prefix="$" /> <span className="text-lg font-semibold">lost</span>
        </p>
      </div>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-blue text-white font-semibold text-[15px]">
      Now see what happens WITH the AI →
    </button>
  </div>
);

export const Ch1Step3: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <PhoneMockup>
      <div className="pt-6 pb-4 space-y-3">
        <div className="animate-slide-up bg-blue-50 rounded-xl p-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-demo-blue animate-pulse" />
          <p className="text-sm font-semibold text-demo-blue">Agent 1 answering...</p>
          <div className="flex gap-0.5 ml-auto">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="audio-bar bg-demo-blue" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-300 space-y-2">
          <div className="bg-demo-blue rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
            <p className="text-[13px] text-white leading-relaxed">
              "Thanks for calling Mike's Plumbing! We're with a customer right now but I can get you booked in. What type of job do you need help with today?"
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
            <p className="text-[13px] text-demo-text leading-relaxed">
              "I have a leaking pipe under my kitchen sink."
            </p>
          </div>
        </div>
      </div>
    </PhoneMockup>

    <div className="animate-fade-up delay-400 bg-demo-blue/10 border border-demo-blue/20 rounded-2xl p-4 space-y-1">
      <p className="text-blue-300 text-[15px]">The AI answered in <strong>1.4 seconds.</strong></p>
      <p className="text-blue-300/80 text-[15px]">Sarah doesn't know it's an AI.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-blue text-white font-semibold text-[15px]">
      See how it qualifies her →
    </button>
  </div>
);

export const Ch1Step4: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <PhoneMockup>
      <div className="pt-4 pb-4 space-y-2">
        {[
          { from: "ai", text: "Got it — leaking pipe. What's the address?" },
          { from: "user", text: "147 Whyte Ave" },
          { from: "ai", text: "Perfect. When works best — are you available tomorrow morning?" },
          { from: "user", text: "Yes, 9am works" },
          { from: "ai", text: "Let me check availability..." },
        ].map((msg, i) => (
          <div key={i} className={`animate-fade-up`} style={{ animationDelay: `${i * 200}ms` }}>
            <div className={`rounded-2xl p-2.5 max-w-[82%] ${msg.from === "ai" ? "bg-demo-blue rounded-tl-sm" : "bg-gray-100 rounded-tr-sm ml-auto"}`}>
              <p className={`text-[13px] leading-relaxed ${msg.from === "ai" ? "text-white" : "text-demo-text"}`}>{msg.text}</p>
            </div>
          </div>
        ))}
        <div className="animate-fade-up delay-800 bg-blue-50 rounded-xl p-3 mt-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-demo-blue mb-2">📅 Calendar</p>
          <div className="bg-demo-blue/10 border border-demo-blue/30 rounded-lg p-2 flex items-center gap-2">
            <span className="text-demo-blue text-lg">✓</span>
            <div>
              <p className="text-[12px] font-semibold text-demo-text">Tuesday · 9:00 AM</p>
              <p className="text-[11px] text-demo-text-muted">Available</p>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>

    <div className="animate-fade-up bg-demo-blue/10 border border-demo-blue/20 rounded-2xl p-4">
      <p className="text-blue-300 text-[14px] mb-2 font-semibold">47 seconds into the call:</p>
      <div className="space-y-1">
        {["Job type ✓", "Address ✓", "Timing ✓"].map((item, i) => (
          <p key={i} className="text-blue-300/80 text-[14px]">{item}</p>
        ))}
      </div>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-blue text-white font-semibold text-[15px]">
      See the booking →
    </button>
  </div>
);

export const Ch1Step5: React.FC<StepProps> = ({ onNext }) => (
  <div className="space-y-5">
    <div className="space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-text-muted text-center">Mike's Phone</p>
      <div className="animate-notification bg-gray-800 rounded-2xl p-4 border border-gray-700">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-demo-blue mb-1">🔔 New Booking from Agent 1</p>
        <p className="text-[14px] text-white font-medium">Sarah M. | Leaking pipe</p>
        <p className="text-[13px] text-white/70">147 Whyte Ave | Tomorrow 9am</p>
        <p className="text-[13px] mt-2">😮 <span className="text-white/60 italic">I was under a sink.</span></p>
      </div>

      <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-text-muted text-center pt-2">Sarah's Phone</p>
      <div className="animate-notification delay-300 bg-white rounded-2xl p-4 border border-demo-border shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-demo-text-muted mb-1">💬 Mike's Plumbing</p>
        <p className="text-[14px] text-demo-text leading-relaxed">
          Hi Sarah! Your plumbing appointment is confirmed for Wednesday at 9:00 AM. Address: 147 Whyte Ave. See you then! — Mike's Plumbing
        </p>
      </div>
    </div>

    <div className="animate-fade-up delay-500 bg-green-500/15 border border-green-500/25 rounded-2xl p-5 text-center space-y-1">
      <p className="text-2xl font-extrabold text-green-400">Job saved.</p>
      <p className="text-lg font-bold text-green-400"><AnimatedCounter target={380} prefix="$" /> recovered.</p>
      <p className="text-green-400/70 text-[14px]">While Mike was under a sink.</p>
    </div>

    <button onClick={onNext} className="btn-press w-full py-3.5 rounded-xl bg-demo-emerald text-white font-semibold text-[15px]">
      See Agent 2 →
    </button>
  </div>
);
