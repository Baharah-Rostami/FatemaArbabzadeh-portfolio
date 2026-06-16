import { FaLeaf, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2F5D50] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B6B4A]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf />
            <h2 className="text-2xl font-bold">Fatema Portfolio</h2>
          </div>

          <p className="text-white/70 leading-relaxed mb-6">
            Creative graphic designer focused on branding, visual identity, and illustration.
            Let’s build something meaningful together.
          </p>
        </div>

        {/* RIGHT CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact</h3>

          <div className="space-y-4 text-white/80">

            {/* Email */}
            <a
              href="mailto:fatema.email@example.com"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaEnvelope />
              <span>fatema.email@example.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+937XXXXXXXX"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaPhone />
              <span>+93 7XX XXX XXX</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fatema-arbabzada-540794393"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaLinkedin />
              <span>LinkedIn Profile</span>
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">
        © {year} Author: Baharah Rostami | All rights reserved.
      </div>

    </footer>
  );
}