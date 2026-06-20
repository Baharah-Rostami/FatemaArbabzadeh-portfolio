import Hero from "../components/ui/Hero";
import { projects } from "../Data/Project";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="bg-[#F7F3E9] min-h-screen">
      <Hero
        badge="Portfolio"
        title="Selected Projects"
        subtitle="A collection of branding, illustration, advertising and creative design work."
       image="/Avatar.jfif"
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group"
            >
              <article
                className="overflow-hidden rounded-4xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className=" h-70 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"/>

                  <span
                    className=" absolute top-5 left-5 px-4 py-2 rounded-fullbg-white/90 backdrop-blur text-sm font-medium text-[#2F5D50]">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col min-h-55">
                  <h3 className="text-2xl font-bold text-[#2F5D50]">
                    {project.title}
                  </h3>

                  <p className="text-[#6B5B4B] mt-3 ligrow">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-5  py-3 rounded-full bg-[#2F5D50] text-white font-medium transition-all duration-300 group-hover:bg-[#25493F] group-hover:translate-x">
                      View Project
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}