import Link from "next/link";
import PortalHeader from "../../components/PortalHeader";

const departments = [
  { name: "Technical & IT", open: 12, total: 28, width: "78%" },
  { name: "Examinations & Results", open: 9, total: 22, width: "62%" },
  { name: "Accounts & Fees", open: 6, total: 18, width: "48%" },
  { name: "Facilities & Maintenance", open: 5, total: 14, width: "36%" },
];

const recentComplaints = [
  { id: "CC-1048", title: "Examination result not updated", department: "Examinations & Results", assigned: "Assigned by Admin Desk", date: "Oct 22, 2026", status: "In progress", tone: "amber" },
  { id: "CC-1031", title: "Wi-Fi connection in the library", department: "Technical & IT", assigned: "Awaiting Admin Desk", date: "Oct 18, 2026", status: "Awaiting assignment", tone: "blue" },
  { id: "CC-0987", title: "Fee challan correction", department: "Accounts & Fees", assigned: "Assigned by Admin Desk", date: "Oct 10, 2026", status: "Resolved", tone: "emerald" },
];

const statusStyles = {
  amber: "bg-amber-50 text-amber-700 ring-amber-600/20",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/20",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PortalHeader role="Administrator" />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-10">
        <aside>
          <nav aria-label="Admin navigation" className="flex gap-2 overflow-x-auto lg:flex-col">
            <span aria-current="page" className="whitespace-nowrap rounded-lg bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700">Overview</span>
            <a href="#complaints" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Complaints</a>
            <a href="#departments" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Departments</a>
            <Link href="/staff/dashboard" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Staff view</Link>
          </nav>
        </aside>

        <section>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-violet-700">Administration</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">System overview</h1>
              <p className="mt-2 text-slate-600">Monitor complaints and department workloads across Campus Care.</p>
            </div>
            <span className="w-fit rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">Last 30 days</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Total complaints</p><p className="mt-3 text-3xl font-bold">82</p><p className="mt-2 text-xs text-emerald-700">↑ 8% from last month</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Awaiting review</p><p className="mt-3 text-3xl font-bold text-blue-700">17</p><p className="mt-2 text-xs text-slate-500">Across all departments</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">In progress</p><p className="mt-3 text-3xl font-bold text-amber-600">32</p><p className="mt-2 text-xs text-slate-500">Currently being handled</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Resolved</p><p className="mt-3 text-3xl font-bold text-emerald-600">33</p><p className="mt-2 text-xs text-slate-500">40% of all complaints</p></article>
          </div>

          <section className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
            <h2 className="font-bold text-violet-950">Who routes complaints?</h2>
            <div className="mt-3 grid gap-4 text-sm leading-6 text-violet-900 md:grid-cols-2">
              <p><strong>Admin / Complaint Desk:</strong> reviews the suggested category and assigns each complaint to the relevant department.</p>
              <p><strong>Department staff:</strong> receives assigned complaints, investigates them, and updates status and resolution.</p>
            </div>
          </section>

          <section id="departments" className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div><h2 className="text-lg font-bold">Department workload</h2><p className="mt-1 text-sm text-slate-500">Open complaints by department</p></div>
              <span className="text-xs font-medium text-slate-500">Sample overview</span>
            </div>
            <div className="mt-6 space-y-5">
              {departments.map((department) => (
                <div key={department.name}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm"><span className="font-medium text-slate-700">{department.name}</span><span className="shrink-0 text-slate-500">{department.open} open <span aria-hidden="true">·</span> {department.total} total</span></div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-500" style={{ width: department.width }} /></div>
                </div>
              ))}
            </div>
          </section>

          <section id="complaints" className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
              <div><h2 className="text-lg font-bold">Recent complaints</h2><p className="mt-1 text-sm text-slate-500">Latest records from across the portal</p></div>
              <span className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500">All departments</span>
            </div>
            <div className="divide-y divide-slate-100">
              {recentComplaints.map((complaint) => (
                <article key={complaint.id} className="grid gap-3 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:px-6">
                  <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold">{complaint.title}</h3><span className="text-xs text-slate-400">{complaint.id}</span></div><p className="mt-1 text-sm text-slate-500">{complaint.department} <span aria-hidden="true">·</span> {complaint.date}</p><p className="mt-1 text-xs font-medium text-violet-700">{complaint.assigned}</p></div>
                  <span className={"inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset " + statusStyles[complaint.tone]}>{complaint.status}</span>
                  <Link href={"/complaints/" + complaint.id} className="w-fit text-sm font-semibold text-blue-700 hover:text-blue-800">View details →</Link>
                </article>
              ))}
            </div>
          </section>
          <p className="mt-4 text-xs text-slate-500">Dashboard metrics are sample data for the UI preview.</p>
        </section>
      </div>
    </main>
  );
}
