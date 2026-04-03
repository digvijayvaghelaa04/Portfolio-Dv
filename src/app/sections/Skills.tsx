import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { portfolioData } from "../data/portfolio-data";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools" | "aiTools">("frontend");

  const tabs = [
    { id: "frontend" as const, label: "Frontend", icon: "⚛️" },
    { id: "backend" as const, label: "Backend", icon: "🚀" },
    { id: "tools" as const, label: "Tools", icon: "🛠️" },
    { id: "aiTools" as const, label: "AI Tools", icon: "🤖" },
  ];

  const skills = portfolioData.skills[activeTab];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 dark:from-indigo-900/10 via-transparent to-transparent" />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/10 rounded-full blur-[150px]"
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
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Skills & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-indigo-600 dark:text-indigo-400">Technical Arsenal</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                activeTab === tab.id
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md transform scale-105"
                  : "bg-white dark:bg-[#111] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span className="mr-2 text-xl">{tab.icon}</span>
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
              <div className="p-6 bg-white dark:bg-[#111]/80 border border-indigo-100 dark:border-white/5  hover:border-indigo-300 dark:hover:border-white/20 transition-all duration-300 rounded-3xl hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] shadow-sm dark:shadow-none backdrop-blur-sm relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl drop-shadow-sm">{skill.icon}</span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">{skill.name}</h4>
                    </div>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{skill.level}%</span>
                  </div>

                  {/* Premium Progress Bar */}
                  <div className="relative h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 rounded-full"
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        }
      `}</style>
    </section>
  );
}