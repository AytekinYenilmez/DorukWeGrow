
import Link from "next/link";
import { Brain, Building2, ShieldCheck, BarChart3 } from "lucide-react";

const items = [
  {
    title: "Insurance Solutions",
    desc: "Sector-specific products focused on maximizing efficiency and profitability.",
    href: "/products/tarifex",
    icon: ShieldCheck
  },
  {
    title: "Scoring Solutions",
    desc: "AI-powered scoring and rating solutions for diverse needs.",
    href: "/products/credit-score",
    icon: BarChart3
  },
  {
    title: "SMB Solutions",
    desc: "Turnkey solutions for small and medium-sized businesses.",
    href: "/products/taxit",
    icon: Building2
  },
  {
    title: "Data Science Solutions",
    desc: "From AI expertise to BI and reporting, tailored for your industry.",
    href: "/products/ai-advisory",
    icon: Brain
  }
];

export default function Categories() {
  return (
    <section className="section">
      <div className="container-p">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, href, icon: Icon }) => (
            <Link key={title} href={href} className="card p-6 hover:shadow-md transition">
              <Icon className="mb-3" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-slate-600 text-sm mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
