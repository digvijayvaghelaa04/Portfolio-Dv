import React from 'react';

/**
 * 🌟 Premium Resume / CV Component
 * 
 * Instructions:
 * - Built natively with React and Tailwind CSS.
 * - Uses modern CSS practices: Glassmorphism, Micro-animations, and smooth Gradients.
 * - Copy and paste this directly into your React/Next.js portfolio.
 * - Fully responsive for mobile and desktop viewing.
 */

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f172a] to-black text-gray-100 p-4 md:p-10 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Main Glassmorphism Container */}
      <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(20,184,166,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(20,184,166,0.25)] relative">
        
        {/* Subtle glowing orb in background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* --- Header Section --- */}
        <div className="p-8 md:p-12 border-b border-white/10 bg-white/[0.02]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
                Digvijaysinh <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Vaghela</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide">
                Frontend-Focused Full Stack Developer
              </p>
            </div>

            {/* Contact Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z' },
                { label: 'GitHub', href: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { label: 'Email', href: 'mailto:email@example.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-teal-500/10 hover:border-teal-500/30 hover:text-teal-300 transition-all duration-300 text-sm text-gray-300"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon}></path>
                  </svg>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Summary Layer */}
            <section className="group relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
                Professional Summary
              </h2>
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-base group-hover:text-gray-100 transition-colors duration-300">
                Passionate Full Stack Developer with 6+ months of hands-on experience specializing in React.js and modern UI/UX practices. Proven ability to build responsive, high-performance web applications from the ground up. Currently expanding backend capabilities with Node.js and MongoDB to engineer end-to-end scalable solutions with cinema-quality frontend experiences.
              </p>
            </section>

            {/* Experience Layer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
                Experience
              </h2>
              
              <div className="relative pl-8 border-l border-white/10 space-y-10">
                {/* Timeline Node */}
                <div className="absolute w-4 h-4 rounded-full bg-teal-400 -left-[9px] top-1 shadow-[0_0_15px_rgba(45,212,191,0.6)]"></div>
                
                <div className="group bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">Frontend Developer Intern</h3>
                      <p className="text-gray-400 text-sm mt-1">Tech / Software Startup</p>
                    </div>
                    <span className="mt-2 sm:mt-0 px-3 py-1 bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-lg text-xs font-semibold tracking-wider uppercase">
                      Present (6 Months)
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {[
                      "Architected responsive, cross-browser compatible UI components using React.js, improving layout consistency.",
                      "Collaborated on real-world web applications to translate design mockups into interactive frontend interfaces.",
                      "Optimized overall frontend performance resulting in a highly intuitive navigation experience and improved load metrics."
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400 items-start">
                        <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Layer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Project Card 1 */}
                <div className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] hover:border-teal-500/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">TechDV (LMS)</h3>
                  <p className="text-xs text-teal-400 mb-4 font-mono relative z-10">MERN Stack | Tailwind | JWT</p>
                  <p className="text-sm text-gray-400 mb-4 flex-grow relative z-10">
                    Comprehensive full-stack learning platform with Role-Based Access Control, video lectures, and responsive dashboards.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-white hover:text-teal-400 transition-colors w-fit relative z-10">
                    View Project <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>

                {/* Project Card 2 */}
                <div className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">Cinematic Portfolio</h3>
                  <p className="text-xs text-blue-400 mb-4 font-mono relative z-10">React | Tailwind CSS | Vercel</p>
                  <p className="text-sm text-gray-400 mb-4 flex-grow relative z-10">
                    Modern, highly responsive personal portfolio utilizing glassmorphism and smooth micro-animations.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors w-fit relative z-10">
                    View Project <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>

              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-12">
            
            {/* Skills Layer */}
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sticky top-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Core Tech Stack
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript (ES6)', 'TypeScript', 'Tailwind CSS', 'Redux', 'Bootstrap', 'HTML/CSS'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-white transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Backend & DB</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Postman', 'Vercel', 'VS Code'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education Layer */}
            <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
                Education
              </h2>
              <div className="group">
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">Master of Computer Applications</h3>
                <p className="text-sm text-teal-400/80 mt-1 uppercase tracking-widest font-semibold">Final Year</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  ISTAR - CVM University<br />
                  <span className="opacity-70">Focus on scalable software engineering and modern web architectures.</span>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
