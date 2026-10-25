const features = [
  {
    number: "01",
    title: "AI-Powered Analysis",
    description:
      "AI suggests the complaint category and priority based on the student's description.",
  },
  {
    number: "02",
    title: "Smart Department Routing",
    description:
      "Complaints are directed to the relevant university department.",
  },
  {
    number: "03",
    title: "Real-Time Tracking",
    description:
      "Students can monitor complaint status and follow resolution progress.",
  },
  {
    number: "04",
    title: "Role-Based Access",
    description:
      "Students, department staff, and administrators get access according to their roles.",
  },
  {
    number: "05",
    title: "Notifications & Escalation",
    description:
      "Status updates and reminders help prevent complaints from being overlooked.",
  },
  {
    number: "06",
    title: "Transparent History",
    description:
      "Complaint status changes and staff actions are recorded for accountability.",
  },
];

export default function Systemfeatures() {
  return (
    <section
      id="features"
      className="bg-slate-50 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Platform Features
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Everything Needed for Better Complaint Handling
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A structured platform designed to improve transparency,
            accountability, and complaint resolution across university
            departments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-600">
                {feature.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}