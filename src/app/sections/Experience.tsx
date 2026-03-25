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
      className="relative py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100 dark:from-red-900/10 via-white dark:via-black to-gray-50 dark:to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-red-500 mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="text-blue-600 dark:text-red-500">Education</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 dark:from-red-600/50 via-blue-600/30 dark:via-red-600/30 to-transparent hidden lg:block" />

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
                          isWork ? "from-blue-600 to-blue-700 dark:from-red-600 dark:to-red-700" : "from-purple-600 to-purple-700 dark:from-blue-600 dark:to-blue-700"
                        } rounded-2xl mb-4 shadow-lg dark:shadow-[0_0_30px_rgba(220,38,38,0.3)]`}
                      >
                        {isWork ? (
                          <Briefcase className="w-8 h-8 text-white" />
                        ) : (
                          <GraduationCap className="w-8 h-8 text-white" />
                        )}
                      </motion.div>

                      <div className={`${isLeft ? "lg:pr-12" : "lg:pl-12"}`}>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.position}
                        </h4>
                        <h5 className="text-lg text-blue-600 dark:text-red-500 font-semibold mb-3">
                          {item.company}
                        </h5>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 bg-blue-600 dark:bg-red-600 rounded-full border-4 border-white dark:border-black" />
                      <div className="absolute inset-0 bg-blue-600 dark:bg-red-600 rounded-full animate-ping opacity-75" />
                    </motion.div>
                  </div>

                  {/* Right Side - Content Card */}
                  <div className={isLeft ? "lg:order-2" : ""}>
                    <div className="p-8 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 dark:from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="relative">
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {item.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.2 + 0.3 + i * 0.1,
                              }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-red-500 rounded-full mt-2 flex-shrink-0" />
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