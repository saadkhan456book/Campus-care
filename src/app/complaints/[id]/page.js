import Link from "next/link";
import { notFound } from "next/navigation";

const complaints = {
  "CC-1048": {
    title: "Examination result not updated",
    suggestedDepartment: "Examinations & Results",
    assignedDepartment: "Examinations & Results",
    assignmentStatus: "Assigned by Admin Desk",
    submitted: "Oct 22, 2026",
    status: "In progress",
    statusStyle: "bg-amber-50 text-amber-700 ring-amber-600/20",
    description: "My examination result for the recent semester has not appeared in the student portal. Please review the result record and update it if all requirements are complete.",
    updates: [
      { title: "Complaint submitted", date: "Oct 22, 2026", detail: "Your complaint was received by Campus Care.", done: true },
      { title: "Admin Desk assigned the complaint", date: "Oct 23, 2026", detail: "Admin Desk confirmed Examinations & Results and routed it to that department staff team.", done: true },
      { title: "Department staff review", date: "Oct 24, 2026", detail: "The assigned staff team is reviewing your concern.", done: true },
      { title: "Resolution", date: "Pending", detail: "An update will appear here when the department responds.", done: false },
    ],
  },
  "CC-1031": {
    title: "Wi-Fi connection in the library",
    suggestedDepartment: "Technical & IT",
    assignedDepartment: "Pending Admin Desk assignment",
    assignmentStatus: "Awaiting routing",
    submitted: "Oct 18, 2026",
    status: "Submitted",
    statusStyle: "bg-blue-50 text-blue-700 ring-blue-600/20",
    description: "The library Wi-Fi connection drops frequently in the study area, making it difficult to access course materials.",
    updates: [
      { title: "Complaint submitted", date: "Oct 18, 2026", detail: "Your complaint was received by Campus Care.", done: true },
      { title: "Admin Desk review and assignment", date: "Pending", detail: "Admin Desk will confirm the suggested department and route the complaint to its staff queue.", done: false },
      { title: "Department staff review", date: "Pending", detail: "The assigned team will review the complaint after routing.", done: false },
      { title: "Resolution", date: "Pending", detail: "An update will appear here when the department responds.", done: false },
    ],
  },
  "CC-0987": {
    title: "Fee challan correction",
    suggestedDepartment: "Accounts & Fees",
    assignedDepartment: "Accounts & Fees",
    assignmentStatus: "Assigned by Admin Desk",
    submitted: "Oct 10, 2026",
    status: "Resolved",
    statusStyle: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    description: "The fee challan showed an incorrect amount. The Accounts & Fees department reviewed the record and corrected the challan.",
    updates: [
      { title: "Complaint submitted", date: "Oct 10, 2026", detail: "Your complaint was received by Campus Care.", done: true },
      { title: "Admin Desk assigned the complaint", date: "Oct 10, 2026", detail: "Admin Desk routed it to Accounts & Fees staff.", done: true },
      { title: "Accounts & Fees staff reviewed it", date: "Oct 11, 2026", detail: "The department checked the fee record.", done: true },
      { title: "Complaint resolved", date: "Oct 12, 2026", detail: "The challan amount was corrected.", done: true },
    ],
  },
};

export default async function ComplaintDetailPage({ params }) {
  const { id } = await params;
  const complaint = complaints[id];

  if (!complaint) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="text-sm font-semibold text-blue-700 hover:text-blue-800">← Back to dashboard</Link>
        <header className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-slate-500">Complaint ID: {id}</p>
            <span className={"inline-flex rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ring-inset " + complaint.statusStyle}>{complaint.status}</span>
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{complaint.title}</h1>
          <p className="mt-3 text-sm text-slate-600">Submitted {complaint.submitted}</p>
        </header>

        <section className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6 sm:p-7">
          <h2 className="text-lg font-bold text-violet-950">Department routing</h2>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            <div><dt className="font-medium text-violet-700">Suggested department</dt><dd className="mt-1 font-semibold text-slate-900">{complaint.suggestedDepartment}</dd></div>
            <div><dt className="font-medium text-violet-700">Assigned department</dt><dd className="mt-1 font-semibold text-slate-900">{complaint.assignedDepartment}</dd></div>
            <div><dt className="font-medium text-violet-700">Routing handled by</dt><dd className="mt-1 font-semibold text-slate-900">{complaint.assignmentStatus}</dd></div>
          </dl>
          <p className="mt-4 text-sm leading-6 text-violet-900">Admin / Complaint Desk confirms the department assignment. Department staff handles the complaint after it appears in their assigned queue.</p>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold">Complaint details</h2>
            <p className="mt-4 leading-7 text-slate-600">{complaint.description}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold">Resolution progress</h2>
            <ol className="mt-6 space-y-6">
              {complaint.updates.map((update, index) => (
                <li key={update.title} className="relative flex gap-4">
                  {index < complaint.updates.length - 1 && <span className="absolute left-[11px] top-7 h-[calc(100%+1.5rem)] w-px bg-slate-200" aria-hidden="true" />}
                  <span className={"relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold " + (update.done ? "bg-blue-600 text-white" : "border-2 border-slate-200 bg-white text-slate-400")}>{update.done ? "✓" : index + 1}</span>
                  <div><div className="flex flex-wrap items-center gap-x-2"><h3 className="text-sm font-semibold text-slate-900">{update.title}</h3><span className="text-xs text-slate-400">{update.date}</span></div><p className="mt-1 text-sm leading-6 text-slate-500">{update.detail}</p></div>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <p className="mt-5 text-xs text-slate-500">Tracking information shown here is sample data for the UI preview.</p>
      </div>
    </main>
  );
}
