import Link from "next/link";

export default function PortalHeader({ role }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 text-xl font-bold text-slate-900">Campus <span className="text-blue-600">Care</span></Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:inline">{role}</span>
          <Link href="/" className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-4">Sign out</Link>
        </div>
      </div>
    </header>
  );
}
