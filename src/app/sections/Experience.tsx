import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-100/30 dark:from-indigo-900/10 via-transparent to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="text-indigo-600 dark:text-indigo-400">Education</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {portfolioData.experience.map((item, index) => {
              const isWork = item.type === "work";
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Side */}
                  <div
                    className={`${
                      isLeft ? "lg:text-right" : "lg:order-2"
                    }`}
                  >
                    <div className="inline-block lg:block">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                          isWork ? "from-indigo-500 to-indigo-600 dark:from-indigo-500 dark:to-indigo-600" : "from-purple-500 to-purple-600 dark:from-purple-500 dark:to-purple-600"
                        } rounded-2xl mb-4 shadow-lg`}
                      >
                        {isWork ? (
                          <Briefcase className="w-8 h-8 text-white" />
                        ) : (
                          <GraduationCap className="w-8 h-8 text-white" />
                        )}
                      </motion.div>

                      <div className={`${isLeft ? "lg:pr-12" : "lg:pl-12"}`}>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">
                          {item.position}
                        </h4>
                        <h5 className="text-lg text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                          {item.company}
                        </h5>
                        <div className={`flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                          <span className="flex items-center gap-1 bg-white dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-100 dark:border-white/10 shadow-sm">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1 bg-white dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-100 dark:border-white/10 shadow-sm">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 bg-indigo-500 rounded-full border-4 border-gray-50 dark:border-[#050505]" />
                      <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75" />
                    </motion.div>
                  </div>

                  {/* Right Side - Content Card */}
                  <div className={isLeft ? "lg:order-2" : ""}>
                    <div className="p-8 bg-white dark:bg-[#111]/80 border border-indigo-100 dark:border-white/5 rounded-3xl hover:border-indigo-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] shadow-lg dark:shadow-none backdrop-blur-sm group relative overflow-hidden z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-4">
                          {item.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.2 + 0.3 + i * 0.1,
                              }}
                              className="flex items-start gap-4 p-3 bg-gray-50/50 dark:bg-black/30 rounded-xl"
                            >
                              <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}