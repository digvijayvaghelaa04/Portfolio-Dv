import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";
import cvPdf from "../../imports/Digvijay_Vaghela_FullStack_Developer.pdf";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Premium Minimal Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Subtle Glowing Orbs for that modern 1% feel */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-10 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-300 tracking-wide">Available for new opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
              {portfolioData.personal.name}
            </span>
          </h1>
        </motion.div>

        {/* Role & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-400">
            {portfolioData.personal.role}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.personal.tagline}. {portfolioData.personal.description}
          </p>
        </motion.div>

        {/* Custom Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-transparent text-gray-900 dark:text-white font-semibold rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
          >
            Contact Me
          </button>

          <a
            href={cvPdf}
            download="Digvijay_Vaghela_CV.pdf"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] w-full sm:w-auto"
          >
            <span>Download CV</span>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, link: portfolioData.social.github, label: "GitHub" },
            { icon: Linkedin, link: portfolioData.social.linkedin, label: "LinkedIn" },
            { icon: Mail, link: `mailto:${portfolioData.personal.email}`, label: "Email" },
          ].map(({ icon: Icon, link, label }, index) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 rounded-full hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm dark:shadow-none"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}