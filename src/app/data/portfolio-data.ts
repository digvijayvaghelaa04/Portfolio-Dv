export const portfolioData = {
  personal: {
    name: "Digvijay Vaghela",
    role: "Full Stack Developer",
    tagline: "Building Scalable Digital Solutions",
    description: "I am a passionate Full Stack Developer with strong hands-on experience in building modern web applications. Currently strengthening my backend skills while pursuing my MCA degree. I focus on creating scalable, responsive, and user-friendly digital solutions using modern JavaScript technologies. I enjoy solving real-world problems through clean code, intuitive UI design, and efficient system architecture. My goal is to continuously grow as a developer and contribute to impactful software products.",
    email: "digvijayvahelaa04@gmail.com",
    phone: "635-604-3003",
    location: "Ahmedabad, Gujarat, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    dateOfBirth: "04 / 03 / 2003",
    religion: "Hindu",
    nationality: "Indian",
  },

  social: {
    github: "https://github.com/digvijayvaghelaa04",
    linkedin: "https://www.linkedin.com/in/digvijay-vaghelaa/",
    twitter: "",
    dribbble: "",
    behance: "",
  },

  about: {
    bio: "I am a Full Stack Developer with practical experience in building responsive and modern web applications. My frontend foundation is strong, and I am currently focusing on improving my backend development skills step by step. I enjoy creating user-friendly interfaces, writing clean code, and understanding how complete systems work from frontend to backend. As an MCA student, I am continuously learning and improving my technical abilities to become a more complete software developer.",
    mission: "My focus is to build efficient, scalable, and practical web solutions while growing deeper in backend development, API design, and database understanding. I believe in continuous learning, real project experience, and improving with every build.",
    interests: [
      "Full Stack Development",
      "Backend Learning & APIs",
      "Database Design",
      "Problem Solving",
      "System Architecture",
      "Clean UI Development",
    ],
    yearsOfExperience: 6,
    projectsCompleted: 5,
  },

  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 88, icon: "💛" },
      { name: "Vue.js", level: 80, icon: "💚" },
      { name: "HTML5/CSS3", level: 95, icon: "🎯" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "REST API", level: 85, icon: "🔌" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "MySQL", level: 75, icon: "🐬" },
    ],
    tools: [
      { name: "Git", level: 85, icon: "🔀" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Photoshop", level: 65, icon: "🎨" },
      { name: "MS Office", level: 85, icon: "📊" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Tech DV E-Learning Platform",
      category: "E-Learning Platform",
      description: "A comprehensive full stack e-learning platform where students can access coding courses, track progress, and submit projects. Features include user authentication, course management dashboard, and an interactive code learning module built with React.js, Node.js, and MySQL.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["React.js", "Node.js", "MySQL", "Express", "JWT"],
      githubLink: "https://github.com/digvijayvaghelaa04/TechDV",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Personal Branding",
      description: "A modern, cinematic personal portfolio website showcasing projects, skills, and experience with smooth animations and responsive design. Built with React and Tailwind CSS featuring dark/light theme toggle.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubLink: "https://github.com/digvijayvaghelaa04/Portfolio-Dv",
      featured: true,
    },
    {
      id: 3,
      title: "Book Store",
      category: "E-Commerce",
      description: "A responsive Book Store web application built using HTML, CSS, Bootstrap, and JavaScript. It features book listings, clean UI, category-based presentation, and smooth front-end interactions.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/digvijayvaghelaa04/Book-Store",
      featured: true,
    },
  ],

  experience: [
    {
      id: 1,
      position: "Full Stack Developer Intern",
      company: "HN Techno",
      location: "Ahmedabad, Gujarat",
      period: "Dec 2025 - Present",
      type: "work",
      description: "6 Months Internship",
      achievements: [
        "Implemented REST APIs and designed responsive UI components",
        "Contributed to database architecture using MySQL and MongoDB",
        "Worked on multiple client projects from development to deployment",
      ],
    },
    {
      id: 2,
      position: "Master of Computer Applications (MCA)",
      company: "CVM University",
      location: "Anand, Gujarat",
      period: "2024 - Running",
      type: "education",
      description: "Pursuing advanced studies in Computer Applications with focus on modern web technologies, software engineering, and system design.",
      achievements: [
        "Specializing in Full Stack Development",
        "Working on advanced web application projects",
        "Learning cutting-edge technologies and frameworks",
      ],
    },
    {
      id: 3,
      position: "Bachelor of Computer Applications (BCA)",
      company: "Sardar Patel University",
      location: "Vallabh Vidyanagar, Gujarat",
      period: "2020 - 2023",
      type: "education",
      description: "Graduated with strong foundation in computer science, programming fundamentals, and web development technologies.",
      achievements: [
        "Completed comprehensive programming coursework",
        "Built multiple academic projects",
        "Developed strong problem-solving skills",
      ],
    },
  ],

  achievements: [
    {
      id: 4,
      title: "BCA Graduation",
      issuer: "Sardar Patel University",
      date: "2023",
      icon: "🎓",
      description: "Successfully completed Bachelor's degree in Computer Applications",
    },
    {
      id: 3,
      title: "MCA (Master of Computer Applications)",
      issuer: "CVM University",
      date: "2024 - Present",
      icon: "🎓",
      description: "Currently pursuing Master’s degree focused on advanced software engineering, full stack development, and modern computing technologies.",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Senior Developer",
      position: "HN Techno",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content: "Digvijay is a dedicated developer who quickly grasps new concepts and applies them effectively. His work on our client projects was impressive.",
      rating: 5,
    },
    {
      id: 2,
      name: "Project Manager",
      position: "HN Techno",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "Great team player with strong technical skills. Always willing to learn and take on new challenges.",
      rating: 5,
    },
    {
      id: 3,
      name: "Tech Mentor",
      position: "CVM University",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "Shows excellent problem-solving abilities and a genuine passion for web development. A promising developer with great potential.",
      rating: 5,
    },
  ],

  // Soft skills from CV
  softSkills: [
    "Active Interactor",
    "Strong Decision Maker",
    "Good Communication",
    "Team Collaborator",
    "Problem Solver",
    "Fast Learner",
  ],

  // Languages from CV
  languages: [
    { name: "Gujarati", level: 3 },
    { name: "Hindi", level: 3 },
    { name: "English", level: 2 },
  ],
};