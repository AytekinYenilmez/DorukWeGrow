
import Link from "next/link";

const features = [
  {
    title: "TarifEx",
    desc: "Pricing and tariff intelligence for insurers with measurable claim reductions.",
    href: "/products/tarifex"
  },
  {
    title: "Taxit",
    desc: "Working-capital scoring and credit monitoring for the real sector.",
    href: "/products/taxit"
  },
  {
    title: "GeoScore",
    desc: "Geospatial risk intelligence combining location-based data with machine learning.",
    href: "/products/geoscore"
  },
  {
    title: "AutoSense",
    desc: "IoT-enabled vehicle telemetry and analytics for smarter operations.",
    href: "/products/autosense"
  }
];

export default function FeaturedSolutions() {
  return (
    <section className="section">
      <div className="container-p">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Highlighted Solutions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="badge mb-3">Solution</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
              <Link href={f.href} className="btn btn-primary mt-4 inline-flex">Learn more</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
