const departments = [
  {
    number: "01",
    title: "Technical & IT",
    description: "Internet, software, Wi-Fi, and technical issues.",
  },
  {
    number: "02",
    title: "Accounts & Fees",
    description: "Fee payments, challans, and financial records.",
  },
  {
    number: "03",
    title: "Admissions",
    description: "Admission applications and enrollment concerns.",
  },
  {
    number: "04",
    title: "Examinations & Results",
    description: "Results, examination records, and scheduling issues.",
  },
  {
    number: "05",
    title: "Degree Processing",
    description: "Degree requests, verification, and processing delays.",
  },
  {
    number: "06",
    title: "Library Services",
    description: "Library access, books, and related facilities.",
  },
  {
    number: "07",
    title: "Facilities & Maintenance",
    description: "Classrooms, electricity, equipment, and campus facilities.",
  },
  {
    number: "08",
    title: "General Support",
    description: "University concerns that do not fit other categories.",
  },
];

export default function DepartmentCategories() {
  return (
    <section
      id="departments"
      className="bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Departments
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            One Portal, Multiple Departments
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Submit your concern through one portal and let the system
            help direct it to the relevant university department.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => (
            <article
              key={department.number}
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                {department.number}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {department.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {department.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}