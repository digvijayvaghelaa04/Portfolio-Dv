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
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-[#0a0a0a] overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 dark:bg-red-600/10 rounded-full blur-[150px]"
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
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-red-500 mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-blue-600 dark:text-red-500">Projects</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 mx-auto rounded-full" />
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
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                filter === category
                  ? "bg-blue-600 dark:bg-red-600 text-white shadow-lg dark:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-blue-600/50 dark:hover:border-red-600/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              layout
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl overflow-hidden hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none h-full">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600/90 dark:bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-red-600/10 border border-blue-600/30 dark:border-red-600/30 rounded-full text-blue-600 dark:text-red-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-gray-700 dark:text-gray-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 dark:bg-red-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-red-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] group/btn"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">GitHub</span>
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