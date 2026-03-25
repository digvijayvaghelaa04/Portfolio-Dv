import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#0a0a0a] overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 dark:bg-red-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
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
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-red-500 mb-4">
            Education
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & <span className="text-blue-600 dark:text-red-500">Milestones</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 dark:from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-600/20 dark:from-red-600/20 to-blue-600/5 dark:to-red-600/5 border border-blue-600/30 dark:border-red-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:border-blue-600/50 dark:group-hover:border-red-600/50 group-hover:bg-blue-600/30 dark:group-hover:bg-red-600/30 transition-all duration-300"
                  >
                    <span className="text-4xl">{achievement.icon}</span>
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">
                    {achievement.title}
                  </h4>

                  <p className="text-blue-600 dark:text-red-400 font-semibold mb-3">
                    {achievement.issuer}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>

                  {/* Award Icon */}
                  <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-32 h-32 text-blue-500 dark:text-red-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/10 dark:bg-red-600/10 border border-blue-600/30 dark:border-red-600/30 rounded-full backdrop-blur-sm">
            <Award className="w-5 h-5 text-blue-600 dark:text-red-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Continuously learning and earning new certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}