"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Technical & IT",
  "Accounts & Fees",
  "Admissions",
  "Examinations & Results",
  "Degree Processing",
  "Library Services",
  "Facilities & Maintenance",
  "General Support",
];

export default function ComplaintSubmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section role="status" aria-live="polite" className="mt-8 rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700" aria-hidden="true">✓</div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-700">Thank you</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Your complaint has been submitted</h2>
        <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">Your concern has been recorded in this preview. You can return to the home page or submit another complaint.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Back to home</Link>
          <button type="button" onClick={() => setSubmitted(false)} className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">Submit another complaint</button>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-700">Complaint title</label>
        <input id="title" name="title" type="text" required placeholder="Briefly describe the issue" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-700">Suggested department <span className="font-normal text-slate-500">(optional)</span></label>
        <select id="category" name="category" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
          <option value="" disabled>Select a department</option>
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
        <p className="mt-2 text-xs text-slate-500">The Admin/Complaint Desk reviews this suggestion and assigns your complaint to the right department.</p>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-700">Complaint details</label>
        <textarea id="description" name="description" required rows={6} placeholder="Explain what happened, when it happened, and how it affects you." className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
      </div>

      <div>
        <label htmlFor="attachment" className="mb-2 block text-sm font-medium text-slate-700">Supporting file <span className="font-normal text-slate-500">(optional)</span></label>
        <input id="attachment" name="attachment" type="file" className="block w-full rounded-lg border border-slate-300 text-sm text-slate-600 file:mr-4 file:border-0 file:bg-blue-50 file:px-4 file:py-3 file:font-semibold file:text-blue-700 hover:file:bg-blue-100" />
        <p className="mt-2 text-xs text-slate-500">You can attach a screenshot or document related to your complaint.</p>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
        <Link href="/" className="rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50">Cancel</Link>
        <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Submit complaint</button>
      </div>
    </form>
  );
}
