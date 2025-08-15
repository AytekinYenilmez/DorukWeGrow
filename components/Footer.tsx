
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-p py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="h-10 w-10 rounded-xl bg-brand-700 text-white grid place-items-center font-bold">SD</div>
          <div className="text-sm text-slate-600 mt-3">© {new Date().getFullYear()} WeGrow Analytics Inc. All rights reserved.</div>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/ethics">Code of Ethics</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+12166060260">+1 (216) 606-0260</a></li>
            <li><a href="mailto:[doruk emailcompany]">[doruk emailcompany]</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
