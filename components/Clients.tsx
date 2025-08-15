"use client";
const logos = ["korusigorta","emsan","jumbo","kilim","modalife","regal","siemens","vestel"];

export default function Clients() {
  return (
    <section className="section bg-slate-50">
      <div className="container-p">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Trusted by leading brands</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-10 animate-[scroll_30s_linear_infinite]">
            {logos.map((l) => (
              <div key={l} className="h-12 w-28 rounded-xl bg-white border border-slate-200 grid place-items-center text-slate-500">
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
  }