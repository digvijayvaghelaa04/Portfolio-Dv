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
    <section id="services" ref={ref} className="relative py-32 bg-gray-50 dark:bg-[#080808] overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-4 font-semibold">Freelance Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What I Can <span className="text-emerald-600 dark:text-emerald-400">Do For You</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 bg-white dark:bg-[#111]/80 border border-emerald-100 dark:border-white/5 rounded-3xl hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] shadow-lg dark:shadow-none h-full backdrop-blur-sm relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 dark:from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
