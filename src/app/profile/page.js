import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold">Campus <span className="text-blue-600">Care</span></Link>
          <Link href="/dashboard" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Dashboard</Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <div>
          <p className="text-sm font-semibold text-blue-600">Account</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">My profile</h1>
          <p className="mt-2 text-slate-600">View your Campus Care account details.</p>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-4 border-b border-slate-100 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700" aria-hidden="true">AK</div>
            <div><h2 className="text-lg font-bold">Ayesha Khan</h2><p className="mt-1 text-sm text-slate-500">Student account</p></div>
          </div>

          <dl className="divide-y divide-slate-100 px-6 sm:px-8">
            <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-4"><dt className="text-sm font-medium text-slate-500">Name</dt><dd className="text-sm font-semibold text-slate-900">Ayesha Khan</dd></div>
            <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-4"><dt className="text-sm font-medium text-slate-500">Username</dt><dd className="text-sm font-semibold text-slate-900">ayesha.k</dd></div>
            <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-4"><dt className="text-sm font-medium text-slate-500">Account type</dt><dd className="text-sm font-semibold text-slate-900">Student</dd></div>
            <div className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-4"><dt className="text-sm font-medium text-slate-500">Member since</dt><dd className="text-sm font-semibold text-slate-900">October 2026</dd></div>
          </dl>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
            <Link href="/dashboard" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100">Back to dashboard</Link>
            <button type="button" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Edit profile</button>
          </div>
        </section>
        <p className="mt-4 text-xs text-slate-500">Profile details are sample data for the UI preview.</p>
      </div>
    </main>
  );
}
