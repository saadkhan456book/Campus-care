import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            Campus <span className="text-blue-400">Care</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            A smarter way to submit university complaints, track
            progress, and improve accountability.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
             <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
            <li><a href="#departments" className="hover:text-blue-400">Departments</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Departments</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Technical & IT</li>
            <li>Accounts & Fees</li>
            <li>Examinations & Results</li>
            <li>Facilities & Maintenance</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Get Started</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Have a university concern? Submit it through Campus Care
            and follow its progress.
          </p>

          <Link
            href="/complaints/new"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Submit a Complaint
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Campus Care. All rights reserved.
      </div>
    </footer>
  );
}