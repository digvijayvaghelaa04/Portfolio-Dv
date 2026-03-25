import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { portfolioData } from "../data/portfolio-data";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">("frontend");

  const tabs = [
    { id: "frontend" as const, label: "Frontend", icon: "⚛️" },
    { id: "backend" as const, label: "Backend", icon: "🚀" },
    { id: "tools" as const, label: "Tools & DevOps", icon: "🛠️" },
  ];

  const skills = portfolioData.skills[activeTab];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 dark:from-red-900/10 via-white dark:via-black to-gray-50 dark:to-black" />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 dark:bg-red-600/10 rounded-full blur-[150px]"
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
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-red-500 mb-4">Skills & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-blue-600 dark:text-red-500">Technical Arsenal</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 dark:bg-red-600 text-white shadow-lg dark:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-blue-600/50 dark:hover:border-red-600/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] border border-blue-600/20 dark:border-red-600/20 rounded-2xl hover:border-blue-600/40 dark:hover:border-red-600/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] shadow-md dark:shadow-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  </div>
                  <span className="text-blue-600 dark:text-red-500 font-bold text-lg">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-red-600 dark:to-red-500 rounded-full"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }
      `}</style>
    </section>
  );
}