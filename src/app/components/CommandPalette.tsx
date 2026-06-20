import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Home, User, Code2, Briefcase, Mail, Download, Github, Linkedin, Bot, X } from "lucide-react";
import cvPdf from "../../imports/Digvijay_Vaghela_CV.pdf.pdf";
import { portfolioData } from "../data/portfolio-data";

type Command = {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  category: string;
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "/" && !isOpen) {
        if (document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
          e.preventDefault();
          setIsOpen(true);
        }
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      setSearch("");
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const commands: Command[] = [
    { id: "home", label: "Go to Home", icon: Home, category: "Navigation", action: () => scrollTo("home") },
    { id: "about", label: "About Me", icon: User, category: "Navigation", action: () => scrollTo("about") },
    { id: "skills", label: "Skills", icon: Code2, category: "Navigation", action: () => scrollTo("skills") },
    { id: "projects", label: "Projects", icon: Briefcase, category: "Navigation", action: () => scrollTo("projects") },
    { id: "experience", label: "Experience", icon: Briefcase, category: "Navigation", action: () => scrollTo("experience") },
    { id: "contact", label: "Contact", icon: Mail, category: "Navigation", action: () => scrollTo("contact") },
    
    { id: "resume", label: "Preview / Download Resume", icon: Download, category: "Actions", action: () => {
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('open-resume'));
    }},
    { id: "jarvis", label: "Open Jarvis", icon: Bot, category: "Actions", action: () => {
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('open-jarvis'));
    }},
    
    { id: "linkedin", label: "Open LinkedIn", icon: Linkedin, category: "Links", action: () => { window.open(portfolioData.social.linkedin, "_blank"); setIsOpen(false); } },
    { id: "github", label: "Open GitHub", icon: Github, category: "Links", action: () => { window.open(portfolioData.social.github, "_blank"); setIsOpen(false); } },
  ];

  const filteredCommands = commands.filter(c => 
    c.label.toLowerCase().includes(search.toLowerCase()) || 
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(filteredCommands.map(c => c.category)));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-900/60 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-white/10">
              <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 text-lg"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  No results found for "{search}"
                </div>
              ) : (
                categories.map(category => (
                  <div key={category} className="mb-2 last:mb-0">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {category}
                    </div>
                    {filteredCommands.filter(c => c.category === category).map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors shrink-0">
                          <cmd.icon className="w-4 h-4" />
                        </div>
                        <span className="flex-1 font-medium text-gray-800 dark:text-gray-200 group-hover:text-[var(--primary)] transition-colors">
                          {cmd.label}
                        </span>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
            
            <div className="px-4 py-3 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>Start typing to filter commands</span>
              </div>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 font-sans">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
