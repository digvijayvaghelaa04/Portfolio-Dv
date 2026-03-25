import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Custom cursor effect
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", updateCursor);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />

        {/* Custom Cursor Styles */}
        <style>{`
          .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(37, 99, 235, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, border-color 0.2s;
          }

          .dark .custom-cursor {
            border-color: rgba(220, 38, 38, 0.5);
          }

          @media (max-width: 768px) {
            .custom-cursor {
              display: none;
            }
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Selection color */
          ::selection {
            background-color: rgba(37, 99, 235, 0.2);
            color: inherit;
          }

          .dark ::selection {
            background-color: rgba(220, 38, 38, 0.3);
            color: white;
          }

          /* Scrollbar Styles - Light Mode */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f3f4f6;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #2563eb, #1d4ed8);
            border-radius: 5px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #3b82f6, #2563eb);
          }

          /* Scrollbar Styles - Dark Mode */
          .dark ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }

          .dark ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #dc2626, #991b1b);
            border-radius: 5px;
          }

          .dark ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #ef4444, #dc2626);
          }

          /* Line clamp utility */
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}