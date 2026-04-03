import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Zap, Target, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[150px]"
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
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Turning Vision Into <span className="text-indigo-600 dark:text-indigo-400">Reality</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Bio & Image (User wanted profile image added) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-indigo-100 dark:border-white/10 group">
              <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={portfolioData.personal.avatar} 
                alt={portfolioData.personal.name} 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            <div className="w-full">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                What I Love
              </h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-lg text-indigo-700 dark:text-indigo-300 text-sm backdrop-blur-sm hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-300"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full flex flex-col justify-center"
          >
             <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed bg-white dark:bg-[#111]/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl dark:shadow-none backdrop-blur-md">
              <p>{portfolioData.about.bio}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent my-6"></div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium leading-relaxed">{portfolioData.about.mission}</p>
            </div>
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
              <div className="p-8 bg-white dark:bg-[#111]/80 border border-indigo-100 dark:border-white/5 rounded-3xl hover:border-indigo-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] shadow-lg dark:shadow-none h-full backdrop-blur-sm relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}