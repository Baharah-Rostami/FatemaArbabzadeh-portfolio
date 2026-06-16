import { experiences } from "../../Data/Experience";
import FadeIn from "../../components/ui/FadeIn";

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-[#F7F3E9]">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#7A9D7E] font-semibold uppercase tracking-wider">
              Experience
            </span>

            <h2 className="text-4xl font-bold text-[#2F5D50] mt-3">
              My Professional Journey
            </h2>
          </div>
        </FadeIn>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#2F5D50]/20" />

          {experiences.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="relative pl-16 pb-12">

                {/* Dot */}
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#2F5D50]/10 hover:-translate-y-1 transition">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    <h3 className="text-2xl font-semibold text-[#2F5D50]">
                      {item.title}
                    </h3>

                    <span className="text-sm bg-[#2F5D50]/10 text-[#2F5D50] px-4 py-2 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-[#3E3228] leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}