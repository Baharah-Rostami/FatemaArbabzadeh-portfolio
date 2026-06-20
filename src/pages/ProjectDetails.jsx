import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/Project";
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    const [current, setCurrent] = useState(0);

    if (!project) {
        return (<div className="min-h-screen flex items-center justify-center bg-[#F7F3E9]"> <h1 className="text-3xl font-bold text-[#2F5D50]">Project Not Found</h1> </div>
        );
    }

    const next = () => {
        setCurrent((prev) => (prev + 1) % project.images.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (<div className="min-h-screen bg-[#F7F3E9]">

        ```
        <section className="max-w-6xl mx-auto px-6 pt-20">
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#2F5D50] hover:gap-3 duration-300">
                <FaArrowLeft />
                Back to Projects
            </Link>

            <div className="mt-10">
                <span className="px-4 py-2 rounded-full bg-[#E8DDD0] text-[#8B6B4A] text-sm">
                    {project.category}
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F5D50] mt-6">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-[#5E5246] leading-relaxed">
                    {project.description}
                </p>
            </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5">
                <h2 className="text-2xl font-semibold text-[#2F5D50]">
                    Project Gallery
                </h2>

                <span className="text-[#8B6B4A]">
                    {current + 1} / {project.images.length}
                </span>
            </div>

            <div className="relative bg-white rounded-3xl md:rounded-4xl shadow-xl p-3 md:p-6">

                <img
                    src={project.images[current]}
                    alt={project.title}
                    className="w-full max-h-[250px] sm:max-h-[350px] md:max-h-125 object-contain rounded-xl md:rounded-2xl"
                />

                <button
                    onClick={prev}
                   className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-xl hover:scale-110 duration-300 flex items-center justify-center"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={next}
                    className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-xl hover:scale-110 duration-300 flex items-center justify-center"
                >
                    <FaChevronRight />
                </button>

            </div>

            <div className="flex gap-4 mt-8 overflow-x-auto pb-3 scrollbar-hide">
                {project.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={project.title}
                        onClick={() => setCurrent(index)}
                        className={`min-w-[70px] h-[70px] md:min-w-[110px] md:h-[110px] object-cover rounded-2xl cursor-pointer transition-all duration-300 ${current === index
                                ? "ring-4 ring-[#2F5D50] scale-105"
                                : "opacity-70 hover:opacity-100"
                            }`}
                    />
                ))}
            </div>

        </section>
    </div>

    );
}