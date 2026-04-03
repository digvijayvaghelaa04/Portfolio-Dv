import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
  ];

  const filteredProjects = filter === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#050505] dark:to-black overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <motion.div
        className="absolute top-1/2 -left-32 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize flex items-center justify-center ${
                filter === category
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md transform scale-105"
                  : "bg-white dark:bg-[#111] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              layout
              className="group relative"
            >
              <div className="relative bg-white dark:bg-[#111]/80 border border-indigo-100 dark:border-white/5 rounded-3xl overflow-hidden hover:border-indigo-300 dark:hover:border-white/20 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] shadow-lg dark:shadow-none h-full flex flex-col backdrop-blur-sm z-10">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-indigo-600/90 dark:bg-indigo-500/90 backdrop-blur-md text-white text-xs font-bold tracking-wider rounded-full flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/20 dark:bg-black/50 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-full text-white text-xs font-semibold tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Highlights */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-gray-400 text-xs font-medium border border-transparent">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}