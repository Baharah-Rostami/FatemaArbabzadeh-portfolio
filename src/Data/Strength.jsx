
import FadeIn from "../components/ui/FadeIn";
import {
  GraduationCap,
  Palette,
  Briefcase,
  Users,
} from "lucide-react";

export default function CoreStrengthsSection() {
  const strengths = [
    {
      title: "Education",
      description:
        "Experienced in teaching and supporting educational programs.",
      icon: GraduationCap,
    },
    {
      title: "Graphic Design",
      description:
        "Skilled in Photoshop, Illustrator, After Effects, and Canva.",
      icon: Palette,
    },
    {
      title: "Management",
      description:
        "Strong organizational, supervision, and leadership abilities.",
      icon: Briefcase,
    },
    {
      title: "Communication",
      description:
        "Able to collaborate effectively with students, colleagues, and communities.",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#7A9D7E] font-semibold uppercase tracking-wider">
              Strengths
            </span>

            <h2 className="text-4xl font-bold text-[#2F5D50] mt-3">
              What I Do Best
            </h2>

            <p className="mt-4 text-[#3E3228] max-w-2xl mx-auto">
              Combining education, creativity, and leadership to make a positive impact.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-[#F7F3E9] rounded-3xl p-8 border border-[#2F5D50]/10 hover:-translate-y-2 transition-all duration-300">

                  <div className="w-14 h-14 rounded-2xl bg-[#2F5D50] text-white flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#2F5D50] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#3E3228] leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}