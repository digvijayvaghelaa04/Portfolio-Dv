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
    <footer className="relative bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-red-600/20 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-gray-100 to-gray-100 dark:from-red-900/10 dark:via-black dark:to-black" />

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
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
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
                    className="w-10 h-10 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-red-600 hover:border-blue-600 dark:hover:border-red-600 transition-all duration-300 group shadow-sm dark:shadow-none"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
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
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-red-500 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-blue-600 dark:bg-red-500 group-hover:w-4 transition-all duration-300" />
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
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-blue-600 dark:hover:text-red-500 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-blue-600 dark:hover:text-red-500 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </li>
                <li>{portfolioData.personal.location}</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 dark:via-red-600/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights
            reserved.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 dark:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-blue-700 dark:hover:bg-red-700 transition-all duration-300 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}