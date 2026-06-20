import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { WhyHireMe } from "./sections/WhyHireMe";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { PortfolioAssistant } from "./components/PortfolioAssistant";
import { CustomCursor } from "./components/CustomCursor";
import { CommandPalette } from "./components/CommandPalette";
import { MobileDock } from "./components/MobileDock";
import { ScrollProgress } from "./components/ScrollProgress";
import { PremiumBackground } from "./components/PremiumBackground";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    const handleOpenResume = () => setIsResumeModalOpen(true);
    window.addEventListener("open-resume", handleOpenResume);
    return () => window.removeEventListener("open-resume", handleOpenResume);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-500 relative">
        <PremiumBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyHireMe />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        
        {/* Global Floating Components */}
        <PortfolioAssistant />
        <CommandPalette />
        <MobileDock />
        <ScrollProgress />
        <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        <CustomCursor />

        <Analytics />
        <SpeedInsights />

        {/* Global Styles */}
        <style>{`
          @media (pointer: fine) {
            body, a, button, [role="button"], input, select, textarea {
              cursor: none !important;
            }
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Selection color */
          ::selection {
            background-color: rgba(99, 102, 241, 0.2); /* indigo */
            color: inherit;
          }

          .dark ::selection {
            background-color: rgba(139, 92, 246, 0.3); /* violet */
            color: white;
          }

          /* Scrollbar Styles - Light Mode */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f8fafc;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #6366f1, #4f46e5); /* indigo */
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #818cf8, #6366f1);
          }

          /* Scrollbar Styles - Dark Mode */
          .dark ::-webkit-scrollbar-track {
            background: #050505;
          }

          .dark ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #6d28d9, #4c1d95); /* violet */
            border-radius: 4px;
          }

          .dark ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #8b5cf6, #6d28d9);
          }

          /* Line clamp utility */
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}