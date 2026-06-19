import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Download, Instagram } from "lucide-react";
import { SnapchatIcon } from "../components/icons/SnapchatIcon";
import { portfolioData } from "../data/portfolio-data";
import cvPdf from "../../imports/Digvijay_Vaghela_CV.pdf.pdf";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--light-bg)] dark:bg-[var(--dark-bg)] transition-colors duration-500 perspective-[1000px]"
    >
      {/* Premium Minimal Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Subtle Glowing Orbs for that modern 1% feel */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/30 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--accent-blue)]/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" />

      {/* Content */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="relative z-10 container-fluid py-32 flex flex-col items-center justify-center text-center preserve-3d"
      >
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
          <span className="text-sm font-medium text-gray-800 dark:text-gray-300 tracking-wide">Available for Freelance & New Opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-extrabold mb-6 tracking-tight">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[var(--grad-1-start)] to-[var(--grad-1-end)] bg-clip-text text-transparent animate-gradient">
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
          <h2 className="font-semibold mb-6 text-gray-600 dark:text-gray-400">
            {portfolioData.personal.role}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            {portfolioData.personal.tagline}. {portfolioData.personal.description}
          </p>
          <p className="text-emerald-600 dark:text-emerald-400 max-w-3xl mx-auto mb-10 font-medium">
            Available for freelance projects, business websites, portfolio websites, and custom web applications.
          </p>
        </motion.div>

        {/* Custom Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-5 mb-16"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[var(--accent-blue)] hover:shadow-[0_0_40px_rgba(108,76,241,0.4)] w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-transparent text-gray-900 dark:text-white font-semibold rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
          >
            Hire Me
          </button>

          <a
            href={cvPdf}
            download="Digvijay_Vaghela_CV.pdf"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-[0_0_30px_rgba(108,76,241,0.2)] w-full sm:w-auto"
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
            { icon: Instagram, link: portfolioData.social.instagram, label: "Instagram" },
            { icon: SnapchatIcon, link: portfolioData.social.snapchat, label: "Snapchat" },
            { icon: Mail, link: `mailto:${portfolioData.personal.email}`, label: "Email" },
          ].map(({ icon: Icon, link, label }, index) => (
            <div key={label} className="relative group">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex p-4 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-[var(--primary)] dark:group-hover:text-[var(--primary)] transition-colors relative z-10" />
              </motion.a>
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {label}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-white" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

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