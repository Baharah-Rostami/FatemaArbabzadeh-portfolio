import { statsData } from "../../Data/Stats";
import FadeIn from "../../components/ui/FadeIn";;
import { useCountUpOnView } from "../../hook/useCount";

function StatCard({ stat, index }) {
  const { ref, value } = useCountUpOnView(stat.number);

  return (
    <FadeIn delay={index * 0.1}>
      <div
        ref={ref}
        className="bg-[#F7F3E9] border border-[#2F5D50]/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
      >
        <h3 className="text-4xl font-bold text-[#2F5D50]">
          {value}+
        </h3>

        <p className="mt-2 text-[#3E3228]">{stat.label}</p>
      </div>
    </FadeIn>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2F5D50]">
              Highlights
            </h2>
            <p className="mt-3 text-[#3E3228]">
              A quick overview of my experience and journey.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}