
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      items: [
        {
          label: "Scoring Solutions",
          items: [
            { label: "Credit Score", href: "/products/credit-score" },
            { label: "GeoScore", href: "/products/geoscore" },
            { label: "B2B Scoring", href: "/products/b2b-scoring" },
            { label: "Behavior Score", href: "/products/behavior-score" }
          ]
        },
        {
          label: "SMB Solutions",
          items: [
            { label: "Taxit", href: "/products/taxit" },
            { label: "Taxit Lite", href: "/products/taxit-lite" },
            { label: "AutoSense", href: "/products/autosense" }
          ]
        },
        {
          label: "Insurance Solutions",
          items: [
            { label: "TarifEx", href: "/products/tarifex" },
            { label: "Fraud Detection", href: "/products/fraud-detection" }
          ]
        },
        {
          label: "Data Science",
          items: [
            { label: "AI Advisory", href: "/products/ai-advisory" },
            { label: "Modeling", href: "/products/modeling" },
            { label: "BI & Reporting", href: "/products/bi-reporting" }
          ]
        }
      ]
    },
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-p flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand-700 text-white grid place-items-center font-bold">WG</div>
          <span className="font-semibold">WeGrow</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menu.map((m) => {
            if (!("items" in m)) {
              return (
                <Link key={m.label} className="nav-link" href={m.href}>{m.label}</Link>
              );
            }
            return (
              <div key={m.label} className="relative group">
                <button className="nav-link inline-flex items-center gap-1">
                  {m.label} <ChevronDown size={16} />
                </button>
                <div className="dropdown grid grid-cols-2 gap-6 min-w-[520px]">
                  {m.items?.map((col) => (
                    <div key={col.label}>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{col.label}</div>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="text-sm hover:text-brand-700">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <button className="md:hidden btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-p py-4 space-y-4">
            <Link className="block" href="/">Home</Link>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer">Products</summary>
              <div className="mt-3 grid grid-cols-2 gap-6">
                {/* Mobile simplified list */}
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Scoring Solutions</div>
                  <ul className="space-y-1">
                    <li><Link href="/products/credit-score">Credit Score</Link></li>
                    <li><Link href="/products/geoscore">GeoScore</Link></li>
                    <li><Link href="/products/b2b-scoring">B2B Scoring</Link></li>
                    <li><Link href="/products/behavior-score">Behavior Score</Link></li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">SMB Solutions</div>
                  <ul className="space-y-1">
                    <li><Link href="/products/taxit">Taxit</Link></li>
                    <li><Link href="/products/taxit-lite">Taxit Lite</Link></li>
                    <li><Link href="/products/autosense">AutoSense</Link></li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Insurance</div>
                  <ul className="space-y-1">
                    <li><Link href="/products/tarifex">TarifEx</Link></li>
                    <li><Link href="/products/fraud-detection">Fraud Detection</Link></li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Data Science</div>
                  <ul className="space-y-1">
                    <li><Link href="/products/ai-advisory">AI Advisory</Link></li>
                    <li><Link href="/products/modeling">Modeling</Link></li>
                    <li><Link href="/products/bi-reporting">BI & Reporting</Link></li>
                  </ul>
                </div>
              </div>
            </details>
            <Link className="block" href="/about">About</Link>
            <Link className="block" href="/press">Press</Link>
            <Link className="block" href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
