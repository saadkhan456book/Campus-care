import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-800">← Campus Care</Link>
        <div className="mt-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">C</div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to manage and track your university complaints.</p>
        </div>
        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">Username</label>
            <input id="username" name="username" type="text" required autoComplete="username" placeholder="Enter your username" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" name="password" type="password" required autoComplete="current-password" placeholder="Enter your password" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <button type="button" className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Sign in</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">New to Campus Care? <Link href="/register" className="font-semibold text-blue-700 hover:text-blue-800">Create an account</Link></p>
      </section>
    </main>
  );
}
