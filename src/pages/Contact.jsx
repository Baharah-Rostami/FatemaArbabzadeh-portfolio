import Hero from "../components/ui/Hero";
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:fatema.email@example.com",
    },
  ];

  return (
    <div className="bg-[#F7F3E9] min-h-screen pt-32">

      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12">

          <h2 className="text-3xl font-bold text-[#2F5D50] mb-2">
            Start Your Project
          </h2>

          <p className="text-[#6B5B4B] mb-10">
            Tell me about your idea and I'll get back to you as soon as possible.
          </p>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium text-[#2F5D50]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-2xl border border-[#E5DED2] focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#2F5D50]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 rounded-2xl border border-[#E5DED2] focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2F5D50]">
                Project Type
              </label>

              <select
                className="w-full px-5 py-4 rounded-2xl border border-[#E5DED2] focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
              >
                <option>Brand Identity</option>
                <option>Social Media Design</option>
                <option>Illustration</option>
                <option>Print Design</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2F5D50]">
                Budget Range
              </label>

              <select
                className="w-full px-5 py-4 rounded-2xl border border-[#E5DED2] focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
              >
                <option>$100 - $300</option>
                <option>$300 - $500</option>
                <option>$500 - $1000</option>
                <option>$1000+</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2F5D50]">
                Project Details
              </label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-2xl border border-[#E5DED2] resize-none focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#2F5D50] text-white font-medium hover:bg-[#25493F] transition"
            >
              Send Inquiry
            </button>

          </form>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-5">

          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] text-xl">
                  {social.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-[#2F5D50]">
                    {social.name}
                  </h3>

                  <p className="text-sm text-[#8B6B4A]">
                    Connect with me
                  </p>
                </div>

              </div>

              <FaArrowRight className="text-[#2F5D50] group-hover:translate-x-2 transition-transform" />
            </a>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-[#2F5D50] p-10 md:p-16 text-center">

          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">

            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
              Creative Collaboration
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Bring Your Vision to Life?
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Every successful project starts with a conversation.
              Let's discuss your ideas and create something memorable together.
            </p>

            <a
              href="https://mailto:fatema.email@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#2F5D50] font-semibold hover:-translate-y-1 transition"
            >
              Start a Project
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}