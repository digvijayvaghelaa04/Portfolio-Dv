import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Monitor, Briefcase, ShoppingCart, Layout, Layers, Wand2 } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Briefcase,
      title: "Portfolio Website Development",
      description: "Custom, modern, and highly responsive portfolio websites tailored to highlight your personal brand and skills."
    },
    {
      icon: Monitor,
      title: "Business Website Development",
      description: "Professional web presence for your business, focusing on conversion, speed, and modern aesthetics."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website Development",
      description: "Scalable and secure online stores with smooth checkout experiences and attractive product displays."
    },
    {
      icon: Layout,
      title: "React Frontend Development",
      description: "Building interactive, dynamic, and state-of-the-art frontend applications using React and Tailwind CSS."
    },
    {
      icon: Layers,
      title: "Full Stack Web Application",
      description: "End-to-end web application development encompassing robust backend APIs and beautiful frontend interfaces."
    },
    {
      icon: Wand2,
      title: "Website Redesign & UI Improvement",
      description: "Revamping existing websites with premium glassmorphism, modern animations, and improved UX/UI."
    }
  ];

  return (
    <section id="services" ref={ref} className="relative py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">Freelance Services</h2>
          <h3 className="font-bold text-gray-900 dark:text-white mb-6">
            What I Can <span className="text-indigo-600 dark:text-indigo-400">Do For You</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 glass-card rounded-3xl transition-all duration-300 hover:shadow-xl shadow-sm h-full relative z-10 overflow-hidden hover:-translate-y-1 hover:border-[var(--border-light)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 glass-card border-[var(--border-light)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/5 dark:group-hover:bg-[var(--primary)]/10 transition-all duration-300 shadow-sm group-hover:scale-105">
                    <service.icon className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-[var(--text-main)] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-[var(--primary)] shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <span className="text-lg">Start a Project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
