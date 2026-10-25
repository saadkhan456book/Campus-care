
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Smart University Complaint Portal
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Your Voice Matters.
            <span className="mt-2 block text-blue-700">
              We Make It Count.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Submit university complaints, get AI-powered category
            suggestions, and track progress as your complaint reaches
            the relevant department.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/complaints/new"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Submit a Complaint
            </Link>

            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
            >
              How It Works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>✓ Secure Access</span>
            <span>✓ Smart Routing</span>
            <span>✓ Complaint Tracking</span>
          </div>
        </div>

        {/* Right Complaint Preview */}
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm text-slate-500">
                  Complaint Overview
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Smart Resolution
                </h2>
              </div>

              <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700">
                AI Assisted
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Example Complaint
              </p>
              <p className="mt-2 leading-6 text-slate-800">
                My examination result has not been updated.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-2 font-semibold text-slate-900">
                  Examinations
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Priority</p>
                <p className="mt-2 font-semibold text-amber-600">
                  Medium
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Suggested Department
              </p>
              <p className="mt-1 text-blue-700">
                Examinations &amp; Results
              </p>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Illustrative preview. Actual AI analysis will be
              connected during backend development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
