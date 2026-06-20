import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Target, Rocket, Briefcase, ArrowRight } from "lucide-react";

export function WhyHireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    { icon: Zap, title: "React & MERN Stack Development", description: "Expertise in building scalable, high-performance web applications using modern React ecosystems." },
    { icon: Target, title: "Responsive and Modern UI Development", description: "Crafting pixel-perfect, accessible, and highly responsive user interfaces with Tailwind CSS and Framer Motion." },
    { icon: Rocket, title: "Fast Learner and Problem Solver", description: "Quick to adapt to new technologies and committed to finding optimal solutions for complex technical challenges." },
    { icon: Briefcase, title: "Available for Freelance and Full-Time Opportunities", description: "Open to discussing projects, collaborations, and full-time roles. Ready to deliver immediate value to your team." }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-hire-me" ref={ref} className="relative py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 container-fluid max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Value Proposition</h2>
          <h3 className="font-bold text-gray-900 dark:text-white mb-6">
            Why Work <span className="text-indigo-600 dark:text-indigo-400">With Me</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 glass-card border border-gray-200 dark:border-white/10 rounded-3xl transition-all duration-300 hover:shadow-xl shadow-sm h-full relative z-10 overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToContact}
            className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-[var(--text-main)] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-[var(--primary)] shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <span className="text-lg">Let's Build Something Together</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
