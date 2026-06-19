import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, MapPin } from "lucide-react";
import { SnapchatIcon } from "../components/icons/SnapchatIcon";
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
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: portfolioData.social.instagram, label: "Instagram" },
    { icon: SnapchatIcon, href: portfolioData.social.snapchat, label: "Snapchat" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-[#0F172A] border-t border-white/10 overflow-hidden transition-colors duration-500">

      <div className="relative z-10 container-fluid py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-white mb-4">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-md font-medium">
                {portfolioData.personal.tagline}. Building exceptional digital experiences
                with modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
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
              <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-[var(--primary)] transition-colors font-medium inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-[var(--primary)] rounded-full group-hover:w-4 transition-all duration-300" />
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
              <h4 className="text-white font-bold mb-6 tracking-wide">Get in Touch</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-[var(--primary)] transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-[var(--primary)] transition-colors flex items-center"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </li>
                <li className="flex items-center text-gray-500">{portfolioData.personal.location}</li>
              </ul>

              {/* Location Map Card */}
              <a
                href="https://maps.app.goo.gl/UZaEWEJfKCtRnght6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
                className="mt-6 block relative w-full md:w-[220px] h-[120px] rounded-2xl overflow-hidden border border-white/10 bg-[#1E293B]/40 group shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-[#0F172A] to-transparent">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-indigo-400 drop-shadow-md" />
                  </div>
                  <span className="text-gray-200 text-xs font-semibold tracking-wide">
                    Ahmedabad, Gujarat, India
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights
            reserved.
          </p>

          <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
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
        className="fixed z-50 right-4 md:right-8 bottom-[calc(24px+env(safe-area-inset-bottom))] w-[52px] h-[52px] bg-[var(--text-main)] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--primary)] transition-all duration-300 hover:shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}