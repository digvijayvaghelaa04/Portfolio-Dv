import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Zap, Target, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Months Experience", value: portfolioData.about.yearsOfExperience, suffix: "" },
    { label: "Projects Completed", value: portfolioData.about.projectsCompleted, suffix: "" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-black overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 dark:bg-red-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
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
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-red-500 mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Turning Vision Into <span className="text-blue-600 dark:text-red-500">Reality</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>{portfolioData.about.bio}</p>
              <p className="text-blue-600 dark:text-red-400 font-semibold">{portfolioData.about.mission}</p>
            </div>

            {/* Interests */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600 dark:text-red-500" />
                What I Love
              </h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-blue-600/10 dark:bg-red-600/10 border border-blue-600/20 dark:border-red-600/20 rounded-lg text-blue-600 dark:text-red-400 text-sm backdrop-blur-sm hover:bg-blue-600/20 dark:hover:bg-red-600/20 hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 dark:from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                      <span className="text-blue-600 dark:text-red-500">{stat.suffix}</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "Writing maintainable, scalable, and elegant code that stands the test of time.",
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimizing every millisecond to deliver blazing-fast user experiences.",
            },
            {
              icon: Target,
              title: "Precision",
              description: "Attention to detail in every pixel, ensuring pixel-perfect implementations.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 dark:from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 bg-blue-600/10 dark:bg-red-600/10 border border-blue-600/30 dark:border-red-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 dark:group-hover:bg-red-600/20 group-hover:border-blue-600/50 dark:group-hover:border-red-600/50 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-blue-600 dark:text-red-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}