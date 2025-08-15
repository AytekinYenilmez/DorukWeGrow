
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "Insurance Solutions",
    subtitle: "Bring customers and your organization together with smart insurance applications.",
    cta: { label: "Explore Insurance", href: "/products/tarifex" }
  },
  {
    title: "Scoring Solutions",
    subtitle: "See what others can't. Make faster decisions while keeping risk under control.",
    cta: { label: "Explore Scoring", href: "/products/credit-score" }
  },
  {
    title: "SMB Solutions",
    subtitle: "Innovative products tailored for small and medium businesses.",
    cta: { label: "Explore SMB", href: "/products/taxit" }
  }
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => { clearInterval(id); emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="container-p">
        <div className="py-12 sm:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-5xl font-semibold">
              AI-Powered Decisions for Modern Businesses
            </motion.h1>
            <p className="text-slate-600 text-lg">
              Scoring, insurance, SMB, and data science solutions that unlock growth while managing risk.
            </p>
            <div className="flex gap-3">
              <Link className="btn btn-primary" href="/contact">Contact Sales</Link>
              <Link className="btn" href="/products">See Products</Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200" ref={emblaRef}>
              <div className="flex">
                {slides.map((s, i) => (
                  <div className="min-w-0 flex-[0_0_100%] p-8 sm:p-12 bg-gradient-to-br from-brand-50 to-white" key={s.title}>
                    <div className="space-y-3">
                      <div className="badge">Featured</div>
                      <h3 className="text-2xl sm:text-3xl font-semibold">{s.title}</h3>
                      <p className="text-slate-700">{s.subtitle}</p>
                      <Link className="btn btn-primary" href={s.cta.href}>{s.cta.label}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i+1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={"h-2 w-8 rounded-full border " + (index === i ? "bg-brand-600 border-brand-600" : "bg-white border-slate-300")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
