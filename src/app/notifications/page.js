import Link from "next/link";

const notifications = [
  { id: "1", complaintId: "CC-1048", title: "Your complaint is being reviewed", message: "Examinations & Results has started reviewing your complaint about the missing result.", time: "Oct 23, 2026", unread: true, kind: "status" },
  { id: "2", complaintId: "CC-1031", title: "Complaint received", message: "Your library Wi-Fi complaint was received and is waiting for department review.", time: "Oct 18, 2026", unread: true, kind: "received" },
  { id: "3", complaintId: "CC-0987", title: "Complaint resolved", message: "Your fee challan correction complaint has been resolved by Accounts & Fees.", time: "Oct 12, 2026", unread: false, kind: "resolved" },
];

const iconStyles = {
  status: "bg-amber-100 text-amber-700",
  received: "bg-blue-100 text-blue-700",
  resolved: "bg-emerald-100 text-emerald-700",
};

const icons = { status: "↻", received: "✓", resolved: "✓" };

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold">Campus <span className="text-blue-600">Care</span></Link>
          <Link href="/dashboard" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Dashboard</Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">Updates</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="mt-2 text-slate-600">Status updates about your complaints.</p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">2 unread</span>
        </div>

        <section aria-label="Notification list" className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {notifications.map((notification) => (
            <article key={notification.id} className={"border-b border-slate-100 p-5 last:border-b-0 sm:p-6 " + (notification.unread ? "bg-blue-50/40" : "bg-white")}>
              <div className="flex gap-4">
                <span className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold " + iconStyles[notification.kind]} aria-hidden="true">{icons[notification.kind]}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2"><h2 className="font-semibold text-slate-900">{notification.title}</h2>{notification.unread && <span className="h-2 w-2 rounded-full bg-blue-600" aria-label="Unread" />}</div>
                    <time className="text-xs text-slate-500">{notification.time}</time>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{notification.message}</p>
                  <Link href={"/complaints/" + notification.complaintId} className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800">View complaint →</Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        <p className="mt-4 text-xs text-slate-500">Notifications shown here are sample updates for the UI preview.</p>
      </div>
    </main>
  );
}
