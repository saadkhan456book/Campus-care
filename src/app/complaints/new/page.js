import Link from "next/link";
import ComplaintSubmissionForm from "./ComplaintSubmissionForm";

export default function NewComplaintPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-800">← Back to home</Link>
        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Campus Care</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Submit a complaint</h1>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">Describe your concern and choose the department that can best help you.</p>
        </header>
        <ComplaintSubmissionForm />
      </div>
    </main>
  );
}
