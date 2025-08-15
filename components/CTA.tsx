
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-p card p-8 sm:p-12 bg-gradient-to-br from-brand-50 to-white border-brand-200">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Interested in our solutions?</h3>
            <p className="text-slate-700 mt-2">See how WeGrow can help your business grow safer and faster.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <Link href="/products" className="btn">All Solutions</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
