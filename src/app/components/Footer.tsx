import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent dark:from-indigo-900/10 dark:via-black dark:to-black opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-md font-medium">
                {portfolioData.personal.tagline}. Building exceptional digital experiences
                with modern web technologies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white hover:border-gray-900 dark:hover:border-white transition-all duration-300 group shadow-sm hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-indigo-500 rounded-full group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Get in Touch</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-500">{portfolioData.personal.location}</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights
            reserved.
          </p>

          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and React
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}