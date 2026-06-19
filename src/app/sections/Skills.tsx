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

      <div className="relative z-10 container-fluid">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Skills & Expertise</h2>
          <h3 className="font-bold text-gray-900 dark:text-white mb-6">
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
                  ? "bg-[var(--primary)] text-white shadow-lg transform scale-105 shadow-[0_0_20px_rgba(108,76,241,0.4)]"
                  : "glass-card text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] hover:border-[var(--primary)]/50"
              }`}
            >
              <span className="mr-2 text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="p-6 glass-card hover:border-[var(--primary)]/50 transition-all duration-500 rounded-3xl hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(108,76,241,0.3)] shadow-lg relative overflow-hidden z-10 flex flex-col gap-4 hover:-translate-y-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <span className="text-4xl drop-shadow-sm">{skill.icon}</span>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900 dark:text-white tracking-wide">{skill.name}</h4>
                      <span className="text-sm font-semibold text-[var(--primary)]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[var(--grad-1-start)] to-[var(--grad-1-end)] rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 animate-shimmer" />
                      </motion.div>
                    </div>
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