import Link from "next/link";
import PortalHeader from "../../components/PortalHeader";

const items = [
  { id: "CC-1048", title: "Examination result not updated", student: "Hamza Ali", department: "Examinations & Results", submitted: "Oct 22, 2026", priority: "High", status: "In progress", tone: "amber" },
];

const statusStyles = {
  blue: "bg-blue-50 text-blue-700 ring-blue-600/20",
  amber: "bg-amber-50 text-amber-700 ring-amber-600/20",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

export default function StaffDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PortalHeader role="Department staff" />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-10">
        <aside>
          <nav aria-label="Staff navigation" className="flex gap-2 overflow-x-auto lg:flex-col">
            <span aria-current="page" className="whitespace-nowrap rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">Overview</span>
            <a href="#inbox" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Complaint inbox</a>
            <Link href="/" className="whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900">Public portal</Link>
          </nav>
        </aside>

        <section>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-blue-600">Staff workspace</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">Complaint overview</h1>
              <p className="mt-2 text-slate-600">Work on complaints assigned to your department by the Admin Desk.</p>
            </div>
            <span className="w-fit rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">Examinations & Results</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Assigned to your department</p><p className="mt-3 text-3xl font-bold">1</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Awaiting review</p><p className="mt-3 text-3xl font-bold text-blue-700">0</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">In progress</p><p className="mt-3 text-3xl font-bold text-amber-600">1</p></article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">Resolved</p><p className="mt-3 text-3xl font-bold text-emerald-600">0</p></article>
          </div>

          <section id="inbox" className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
              <h2 className="text-lg font-bold">Assigned complaint queue</h2>
              <p className="mt-1 text-sm text-slate-500">Complaints routed here by the Admin / Complaint Desk</p>
            </div>
            <div className="divide-y divide-slate-100">
              {items.map((item) => (
                <article key={item.id} className="grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold">{item.title}</h3><span className="text-xs text-slate-400">{item.id}</span></div>
                    <p className="mt-1 text-sm text-slate-500">{item.student} <span aria-hidden="true">·</span> {item.department} <span aria-hidden="true">·</span> {item.submitted}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2"><span className={"rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset " + statusStyles[item.tone]}>{item.status}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{item.priority} priority</span></div>
                  </div>
                  <Link href={"/complaints/" + item.id} className="w-fit rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">Review complaint →</Link>
                </article>
              ))}
            </div>
          </section>
          <p className="mt-4 text-xs text-slate-500">Only the Admin / Complaint Desk assigns departments; department staff handles its assigned queue. This list uses sample data.</p>
        </section>
      </div>
    </main>
  );
}
