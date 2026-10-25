import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="bg-slate-950 text-white">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Campus Care home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold">C</span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold sm:text-lg">Campus Care</span>
            <span className="hidden text-xs text-slate-400 sm:block">Intelligent Complaint Portal</span>
          </span>
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">Menu</summary>
          <div className="absolute right-0 top-full z-20 mt-2 flex min-w-48 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
            {links.map((link) => <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">{link.label}</a>)}
          </div>
        </details>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">{link.label}</a>)}
        </div>

        <Link href="/login" className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500 sm:px-5">Login</Link>
      </nav>
    </header>
  );
}
