"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type PrototypeStep = 1 | 2 | 3 | 4;

type PrototypeExperienceValue = {
  completedSteps: ReadonlySet<PrototypeStep>;
  completeStep: (step: PrototypeStep) => void;
};

const PrototypeExperienceContext = createContext<PrototypeExperienceValue | null>(null);

const steps: Array<{ step: PrototypeStep; title: string; description: string }> = [
  {
    step: 1,
    title: "加入后续",
    description: "在评论区找到「你霉柿吧」的评论，点击「蹲一下」。加入后会显示暂无更新提示，并变为「86 人一起蹲 ›」。",
  },
  {
    step: 2,
    title: "体验暂无后续",
    description: "再次点击「你霉柿吧」评论下的「86 人一起蹲 ›」，打开暂无更新的「蹲一蹲」半浮层。",
  },
  {
    step: 3,
    title: "体验已有后续",
    description: "找到「小鱼」的评论，点击「蹲一下」。加入后会直接打开作者已更新的「蹲一蹲」半浮层。",
  },
  {
    step: 4,
    title: "体验作者更新",
    description: "在「蹲一蹲消息」的「等你更新」区域点击「去更新」。",
  },
];

function PrototypeGuide({ completedSteps }: { completedSteps: ReadonlySet<PrototypeStep> }) {
  const activeStep = steps.find(({ step }) => !completedSteps.has(step))?.step;

  return (
    <aside className="prototype-guide" aria-label="TRY THE PROTOTYPE 体验指引">
      <p className="prototype-eyebrow">TRY THE PROTOTYPE</p>
      <h2>跟随下面步骤体验「蹲个后续」</h2>

      <ol className="prototype-steps">
        {steps.map(({ step, title, description }) => {
          const completed = completedSteps.has(step);
          const active = activeStep === step;

          return (
            <li key={step} className={`prototype-step ${completed ? "completed" : ""} ${active ? "active" : ""}`} aria-current={active ? "step" : undefined}>
              <span className="prototype-step-marker" aria-label={completed ? `步骤 ${step} 已完成` : `步骤 ${step}`}>
                {completed ? "✓" : step}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              {step === 3 && (
                <p className="prototype-route-hint">查看完毕后回到页面最上方，点击返回进入消息列表</p>
              )}
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

export function PrototypeExperienceProvider({ children }: { children: React.ReactNode }) {
  const [completedSteps, setCompletedSteps] = useState<Set<PrototypeStep>>(() => new Set());
  const completeStep = useCallback((step: PrototypeStep) => {
    setCompletedSteps((current) => {
      if (current.has(step)) return current;
      const next = new Set(current);
      next.add(step);
      return next;
    });
  }, []);
  const value = useMemo(() => ({ completedSteps, completeStep }), [completedSteps, completeStep]);

  return (
    <PrototypeExperienceContext.Provider value={value}>
      <div className="prototype-shell">
        <div className="prototype-demo">{children}</div>
        <PrototypeGuide completedSteps={completedSteps} />
      </div>
    </PrototypeExperienceContext.Provider>
  );
}

export function usePrototypeExperience() {
  const value = useContext(PrototypeExperienceContext);
  if (!value) throw new Error("usePrototypeExperience must be used inside PrototypeExperienceProvider");
  return value;
}
