import { Home, Briefcase, Bot, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import cvPdf from "../../imports/Digvijay_Vaghela_CV.pdf.pdf";

export function MobileDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past hero slightly
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home, action: () => scrollTo("home") },
    { id: "projects", label: "Projects", icon: Briefcase, action: () => scrollTo("projects") },
    { id: "jarvis", label: "Jarvis", icon: Bot, action: () => window.dispatchEvent(new CustomEvent('open-jarvis')) },
    { id: "resume", label: "Resume", icon: FileText, action: () => window.dispatchEvent(new CustomEvent('open-resume')) },
    { id: "contact", label: "Contact", icon: Mail, action: () => scrollTo("contact") },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 z-[90] md:hidden"
    >
      <div className="bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg px-2 py-2 flex items-center justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={item.action}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-gray-500 hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
