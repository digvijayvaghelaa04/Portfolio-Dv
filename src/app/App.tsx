import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { MusicPlayer } from "./components/MusicPlayer";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <MusicPlayer />
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