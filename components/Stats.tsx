
"use client";
import { useEffect, useState } from "react";

const stats = [
  { value: 40, suffix: "%", label: "less claims", sub: "Lower frequency vs market avg with TarifEx" },
  { value: 1.7, suffix: "%", label: "claim frequency", sub: "Issuance fraud detection outcome" },
  { value: 3, suffix: "+ M", label: "people scored", sub: "Total real-person records scored" },
  { value: 840, suffix: "+ M ₺", label: "credit limits", sub: "Value created by Taxit" },
  { value: 1500, suffix: "+", label: "happy SMBs", sub: "Businesses trusting our solutions" }
];

export default function Stats() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setProgress(Math.min(1, frame / 40));
      if (frame >= 40) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section bg-slate-50">
      <div className="container-p grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((s) => {
          const display = s.value * progress;
          const text = s.value % 1 === 0 ? Math.round(display).toString() : display.toFixed(1);
          return (
            <div key={s.label} className="card p-6">
              <div className="text-3xl font-semibold">{text}{s.suffix}</div>
              <div className="font-medium mt-1">{s.label}</div>
              <div className="text-slate-600 text-sm mt-1">{s.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
