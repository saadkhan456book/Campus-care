import Link from "next/link";
import PortalHeader from "../components/PortalHeader";

const complaints = [
  { id: "CC-1048", title: "Examination result not updated", department: "Examinations & Results", date: "Oct 22, 2026", status: "In progress", tone: "amber" },
  { id: "CC-1031", title: "Wi-Fi connection in the library", department: "Technical & IT", date: "Oct 18, 2026", status: "Awaiting admin assignment", tone: "blue" },
  { id: "CC-0987", title: "Fee challan correction", department: "Accounts & Fees", date: "Oct 10, 2026", status: "Resolved", tone: "emerald" },
];

const statusStyles = {
  amber: "bg-amber-50 text-amber-700 ring-amber-600/20",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/20",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

export default function StudentDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PortalHeader role="Student account" />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-10">
        <aside>
          <nav aria-label="Student navigation" className="flex gap-2 overflow-x-auto lg:flex-col">
            <span aria-current="page" className="whitespace-nowrap rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">Dashboard</span>
            <a href="#complaints" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">My Complaints</a>
            <Link href="/complaints/new" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Submit a Complaint</Link>
            <Link href="/profile" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Profile</Link>
            <Link href="/notifications" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Notifications</Link>
          </nav>
        </aside>

        <section>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-blue-600">Student portal</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">Your dashboard</h1>
              <p className="mt-2 text-slate-600">Review your complaints and check their latest status.</p>
            </div>
            <Link href="/complaints/new" className="inline-flex justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">+ New complaint</Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Total complaints</p><p className="mt-3 text-3xl font-bold">3</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">In progress</p><p className="mt-3 text-3xl font-bold text-amber-600">1</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Resolved</p><p className="mt-3 text-3xl font-bold text-emerald-600">1</p></article>
          </div>

          <section id="complaints" className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
              <div><h2 className="text-lg font-bold">Recent complaints</h2><p className="mt-1 text-sm text-slate-500">Sample records for the dashboard preview</p></div>
              <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:inline">3 records</span>
            </div>
            <div className="divide-y divide-slate-100">
              {complaints.map((complaint) => (
                <article key={complaint.id} className="grid gap-3 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:px-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-slate-900">{complaint.title}</h3><span className="text-xs text-slate-400">{complaint.id}</span></div>
                    <p className="mt-1 text-sm text-slate-500">{complaint.department} <span aria-hidden="true">·</span> {complaint.date}</p>
                  </div>
                  <span className={"inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset " + statusStyles[complaint.tone]}>{complaint.status}</span>
                  <Link href={"/complaints/" + complaint.id} className="w-fit text-sm font-semibold text-blue-700 hover:text-blue-800">View details →</Link>
                </article>
              ))}
            </div>
          </section>
          <p className="mt-4 text-xs text-slate-500">Dashboard entries are sample data and are not connected to saved complaints yet.</p>
        </section>
      </div>
    </main>
  );
}
