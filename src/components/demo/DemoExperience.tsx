import React, { useState, useCallback, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Confetti from "./Confetti";
import { Ch1Step1, Ch1Step2, Ch1Step3, Ch1Step4, Ch1Step5 } from "./Chapter1Steps";
import { Ch2Step1, Ch2Step2, Ch2Step3, Ch2Step4 } from "./Chapter2Steps";
import { Ch3Step1, Ch3Step2, Ch3Step3, Ch3Step4 } from "./Chapter3Steps";

type Screen = "intro" | "ch1" | "ch2" | "ch3" | "final";

const CHAPTER_CONFIG = {
  ch1: { steps: 5, color: "#3B82F6", label: "Agent 1 of 3", title: "Never Miss a Job", subtitle: "Watch what happens when a customer calls while you're busy" },
  ch2: { steps: 4, color: "#10B981", label: "Agent 2 of 3", title: "Lost Jobs Recovery", subtitle: "The money you didn't know you were leaving behind" },
  ch3: { steps: 4, color: "#F59E0B", label: "Agent 3 of 3", title: "Lead Conversion", subtitle: "Turn 'maybe later' into booked" },
};

const DemoExperience: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [step, setStep] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [transitionState, setTransitionState] = useState<"active" | "exit" | "enter">("active");

  const animateTransition = useCallback((cb: () => void) => {
    setTransitionState("exit");
    setTimeout(() => {
      cb();
      setTransitionState("enter");
      setTimeout(() => setTransitionState("active"), 50);
    }, 300);
  }, []);

  const nextStep = useCallback(() => {
    const config = CHAPTER_CONFIG[screen as keyof typeof CHAPTER_CONFIG];
    if (!config) return;

    if (step < config.steps) {
      animateTransition(() => setStep(s => s + 1));
    } else {
      // Move to next chapter
      const nextMap: Record<string, Screen> = { ch1: "ch2", ch2: "ch3", ch3: "final" };
      const next = nextMap[screen];
      if (next) {
        setTransitioning(true);
        setTimeout(() => {
          setScreen(next);
          setStep(1);
          setTransitioning(false);
          setTransitionState("active");
          if (next === "final") setShowConfetti(true);
        }, 400);
      }
    }
  }, [screen, step, animateTransition]);

  const goBack = useCallback(() => {
    if (step > 1) {
      animateTransition(() => setStep(s => s - 1));
    } else {
      const prevMap: Record<string, Screen> = { ch2: "ch1", ch3: "ch2" };
      const prev = prevMap[screen];
      if (prev) {
        animateTransition(() => {
          setScreen(prev);
          setStep(CHAPTER_CONFIG[prev as keyof typeof CHAPTER_CONFIG].steps);
        });
      }
    }
  }, [screen, step, animateTransition]);

  const startDemo = useCallback(() => {
    animateTransition(() => { setScreen("ch1"); setStep(1); });
  }, [animateTransition]);

  // Chapter flash overlay
  const [flashColor, setFlashColor] = useState<string | null>(null);
  useEffect(() => {
    if (transitioning) {
      const nextColors: Record<string, string> = { ch1: "#3B82F6", ch2: "#10B981", ch3: "#F59E0B", final: "#0A0A0A" };
      const target = screen === "ch1" ? "ch2" : screen === "ch2" ? "ch3" : "final";
      setFlashColor(nextColors[target]);
      setTimeout(() => setFlashColor(null), 400);
    }
  }, [transitioning]);

  const stepClass = transitionState === "exit" ? "step-exit" : transitionState === "enter" ? "step-enter" : "step-active";

  const config = CHAPTER_CONFIG[screen as keyof typeof CHAPTER_CONFIG];

  return (
    <div className="w-full h-full bg-demo-dark overflow-hidden relative">
      {/* Flash overlay */}
      {flashColor && (
        <div className="absolute inset-0 z-50 pointer-events-none" style={{ background: flashColor, animation: "chapter-flash 400ms ease-out forwards" }} />
      )}
      {showConfetti && <Confetti />}

      <div className="w-full h-full flex flex-col" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        {/* Header bar for chapters */}
        {config && screen !== "intro" && screen !== "final" && (
          <div className="shrink-0 px-4 pt-3 pb-2 space-y-2">
            <div className="flex items-center gap-3">
              {(step > 1 || screen !== "ch1") && (
                <button onClick={goBack} className="btn-press text-demo-light/60 p-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
              )}
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: config.color }}>{config.label}</p>
                <p className="text-[16px] font-bold text-demo-light">{config.title}</p>
              </div>
            </div>
            <ProgressBar current={step} total={config.steps} color={config.color} />
            <p className="text-[12px] text-demo-light/50">{config.subtitle}</p>
          </div>
        )}

        {/* Content */}
        <div className={`flex-1 overflow-hidden`}>
          <div className={`step-container ${stepClass} h-full`}>
            <div className="step-scroll h-full px-5 py-4">
              {screen === "intro" && <IntroScreen onStart={startDemo} />}
              {screen === "ch1" && step === 1 && <Ch1Step1 onNext={nextStep} />}
              {screen === "ch1" && step === 2 && <Ch1Step2 onNext={nextStep} />}
              {screen === "ch1" && step === 3 && <Ch1Step3 onNext={nextStep} />}
              {screen === "ch1" && step === 4 && <Ch1Step4 onNext={nextStep} />}
              {screen === "ch1" && step === 5 && <Ch1Step5 onNext={nextStep} />}
              {screen === "ch2" && step === 1 && <Ch2Step1 onNext={nextStep} />}
              {screen === "ch2" && step === 2 && <Ch2Step2 onNext={nextStep} />}
              {screen === "ch2" && step === 3 && <Ch2Step3 onNext={nextStep} />}
              {screen === "ch2" && step === 4 && <Ch2Step4 onNext={nextStep} />}
              {screen === "ch3" && step === 1 && <Ch3Step1 onNext={nextStep} />}
              {screen === "ch3" && step === 2 && <Ch3Step2 onNext={nextStep} />}
              {screen === "ch3" && step === 3 && <Ch3Step3 onNext={nextStep} />}
              {screen === "ch3" && step === 4 && <Ch3Step4 onNext={nextStep} />}
              {screen === "final" && <FinalScreen />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============= INTRO ============= */
const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-full text-center space-y-8 py-8">
    <div className="space-y-4 animate-fade-up">
      <h1 className="text-[32px] sm:text-[36px] font-extrabold text-demo-light leading-tight tracking-tight">
        See exactly what happens when your phone rings at 2pm while you're under a sink.
      </h1>
      <p className="text-[15px] text-demo-light/50 leading-relaxed max-w-sm mx-auto">
        Tap through each scenario. This is real. This is happening to your competitors right now.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-2 animate-fade-up delay-200">
      {[
        { label: "Agent 1 — Never miss a job", color: "#3B82F6" },
        { label: "Agent 2 — Lost jobs recovery", color: "#10B981" },
        { label: "Agent 3 — Lead conversion", color: "#F59E0B" },
      ].map((pill, i) => (
        <div key={i} className="px-3 py-1.5 rounded-full text-[12px] font-medium" style={{ background: `${pill.color}15`, color: pill.color, border: `1px solid ${pill.color}30` }}>
          {pill.label}
        </div>
      ))}
    </div>

    <div className="space-y-3 w-full animate-fade-up delay-400">
      <button onClick={onStart} className="btn-press w-full py-4 rounded-xl bg-demo-light text-demo-dark font-bold text-[16px]">
        Start the demo →
      </button>
      <p className="text-[13px] text-demo-light/30">Takes 3 minutes. No sign-up needed.</p>
    </div>
  </div>
);

/* ============= FINAL ============= */
const FinalScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-full text-center space-y-6 py-6">
    <div className="animate-fade-up space-y-3">
      <h2 className="text-[28px] font-extrabold text-demo-light leading-tight">
        Your competitor just answered a call you missed.
      </h2>
    </div>

    <div className="space-y-2 w-full animate-fade-up delay-200">
      {[
        { label: "Agent 1 — Answers every call", color: "#3B82F6" },
        { label: "Agent 2 — Recovers missed leads", color: "#10B981" },
        { label: "Agent 3 — Converts every lead", color: "#F59E0B" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
          <span style={{ color: item.color }} className="text-lg">✓</span>
          <p className="text-[14px] font-medium text-demo-light/80">{item.label}</p>
        </div>
      ))}
    </div>

    <div className="w-full space-y-3 animate-fade-up delay-400">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-demo-light/40">Pricing</p>
      {[
        { name: "Starter", price: "$127/mo", setup: "$197 setup" },
        { name: "Growth", price: "$167/mo", setup: "$297 setup" },
        { name: "Full System", price: "$247/mo", setup: "$397 setup" },
      ].map((plan, i) => (
        <div key={i} className="flex items-center justify-between bg-demo-light/5 border border-demo-light/10 rounded-xl px-4 py-3">
          <p className="text-[14px] font-semibold text-demo-light">{plan.name}</p>
          <div className="text-right">
            <p className="text-[14px] font-bold text-demo-light">{plan.price}</p>
            <p className="text-[11px] text-demo-light/40">{plan.setup}</p>
          </div>
        </div>
      ))}
      <p className="text-[12px] text-demo-light/30 italic">One recovered job pays for the entire month. Most clients recover 2–3 per week.</p>
    </div>

    <div className="w-full space-y-3 animate-fade-up delay-600">
      <a href="#book" className="btn-press block w-full py-4 rounded-xl bg-demo-light text-demo-dark font-bold text-[16px] text-center">
        Book a free 15-min call →
      </a>
      <a href="#video" className="btn-press block w-full py-3.5 rounded-xl border-2 border-demo-light/30 text-demo-light font-semibold text-[15px] text-center">
        Watch the full demo video
      </a>
      <p className="text-[12px] text-demo-light/25 leading-relaxed">
        Setup in 48 hours · No contracts · Cancel anytime<br />
        Used by plumbers, HVAC techs & electricians
      </p>
    </div>
  </div>
);

export default DemoExperience;
