export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ───────── Navigation Bar ───────── */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <span className="text-xl font-bold tracking-tight">
          XGMS<span className="text-blue-400">.io</span>
        </span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#values" className="hover:text-white transition">
            Values
          </a>
          <a href="#careers" className="hover:text-white transition">
            Careers
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* ───────── Hero Section ───────── */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-blue-300 bg-blue-950 rounded-full border border-blue-800">
          Now Building · Launching 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          The Global Standard for
          <br />
          <span className="text-blue-400">Hospital Data Platform</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
          XGMS ONE is a cloud-based EMR SaaS platform built on regulatory
          compliance, clinical safety, and privacy-preserving architecture —
          from Day 1.
        </p>
        <div className="flex gap-4 mt-10">
          <a
            href="#careers"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
          >
            Join Our Team
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ───────── Core Values Section ───────── */}
      <section id="values" className="px-8 py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-16">
          Built on Three Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-3">Clinical Safety</h3>
            <p className="text-gray-400 leading-relaxed">
              Fail-closed architecture ensures patient data integrity. Every
              clinical workflow is governed by the Technical Constitution with
              mandatory audit trails.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy by Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Consent management, purpose limitation, pseudonymization, and
              export controls are embedded in the platform core — not bolted on
              later.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 text-blue-400 text-2xl mb-5">
              🌐
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Compliance</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed for multi-jurisdictional operation from the ground up.
              HIPAA, GDPR, and Korean PIPA compliance built into every data
              flow.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── About Section ───────── */}
      <section id="about" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What is XGMS ONE?</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            XGMS ONE is a next-generation cloud-based Electronic Medical Record
            (EMR) platform that unifies clinical workflows, AI-driven decision
            support, and privacy-preserving data analytics into a single global
            SaaS solution. We are building the standard hospital database that
            healthcare institutions worldwide can trust.
          </p>
        </div>
      </section>

      {/* ───────── Careers Section ───────── */}
      <section
        id="careers"
        className="px-8 py-24 border-t border-gray-800 bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">We&apos;re Hiring</h2>
          <p className="text-gray-400 text-lg mb-10">
            Join us in building the future of global healthcare IT.
          </p>

          {/* CTO Position Card */}
          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 text-left">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                Chief Technology Officer (CTO)
              </h3>
              <span className="px-3 py-1 text-xs font-medium text-green-300 bg-green-950 rounded-full border border-green-800">
                Open
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are looking for a visionary CTO to lead the architecture and
              engineering of XGMS ONE. You will own the Technical Constitution,
              drive cloud infrastructure decisions, and build a world-class
              engineering team for a platform designed to serve hospitals
              globally.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Cloud Architecture
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Healthcare IT
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                EMR / EHR Systems
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Data Privacy
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">
                Global SaaS
              </span>
            </div>
            <a
              href="mailto:careers@xgms.io"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
            >
              Apply Now → careers@xgms.io
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Contact Section ───────── */}
      <section id="contact" className="px-8 py-24 border-t border-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 text-lg mb-8">
            Interested in partnership, investment, or joining our mission?
          </p>
          <a
            href="mailto:contact@xgms.io"
            className="text-blue-400 hover:text-blue-300 text-lg font-medium transition"
          >
            contact@xgms.io
          </a>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="px-8 py-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2026 XGMS. Privacy & Compliance First.</p>
        <p className="mt-1">Seoul, South Korea · Building for the World</p>
      </footer>
    </div>
  );
}