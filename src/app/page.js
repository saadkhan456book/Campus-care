import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Complaintworkflow from "./components/Complaintworkflow";
import Systemfeatures from "./components/Systemfeatures";
import DepartmentCategories from "./components/DepartmentCatagories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Complaintworkflow />
      <Systemfeatures />
      <DepartmentCategories />
      <section id="about" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">About Campus Care</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">A clearer path to resolving campus concerns</h2>
          </div>
          <div className="space-y-4 leading-7 text-slate-600">
            <p>Campus Care gives students one place to share university concerns and follow their progress.</p>
            <p>By organizing complaints by department and showing their status, the portal helps students and university teams communicate more clearly.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
