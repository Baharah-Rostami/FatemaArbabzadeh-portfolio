import { aboutData } from "../../data/aboutData";
import FadeIn from "../../components/ui/FadeIn";

export default function AboutStory() {
  return (
    <section className="py-20 bg-[#F7F3E9]">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-[#7A9D7E] font-semibold uppercase tracking-wider">
              About
            </span>

            <h2 className="text-4xl font-bold text-[#2F5D50] mt-3">
              {aboutData.title}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#2F5D50]/10">
            <p className="text-[#3E3228] leading-8 text-lg whitespace-pre-line">
              {aboutData.description}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}