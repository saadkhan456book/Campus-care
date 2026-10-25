export default function  Complaintworkflow() {
  const steps = [
    {
      number: "01",
      title: "Submit Complaint",
      description:
        "Describe your issue and submit your complaint securely through the portal.",
    },
    {
      number: "02",
      title: "Admin Desk Reviews & Assigns",
      description:
        "The Admin/Complaint Desk reviews the category suggestion and assigns the complaint to the relevant department. AI may assist with suggestions, but the Admin Desk confirms the route.",
    },
    {
      number: "03",
      title: "Department Staff Handles It",
      description:
        "Department staff works on the assigned complaint and updates its status. Students can track progress until resolution.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Simple Process
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            How Campus Care Works
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Three simple steps to submit, route, and track your
            university complaint.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-700">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}