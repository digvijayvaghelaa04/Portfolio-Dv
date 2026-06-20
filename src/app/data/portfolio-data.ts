import profileImg from "../../imports/images/IMG_0133.png";
import batHouseImg from "../../imports/images/bat_house_mockup.png";
import portfolioImg from "../../imports/images/portfolio_mockup.png";
import elearningImg from "../../imports/images/elearning_mockup.png";

export const portfolioData = {
  personal: {
    name: "Digvijay Vaghela",
    role: "React Developer | Freelance Web Developer",
    tagline: "Building Scalable Digital Solutions",
    description: "I am a passionate Full Stack Developer with strong hands-on experience in building modern web applications. Currently strengthening my backend skills. I focus on creating scalable, responsive, and user-friendly digital solutions using modern JavaScript technologies. I am available for freelance projects, business websites, portfolio websites, and custom web applications.",
    email: "digvijayvahelaa04@gmail.com",
    phone: "635-604-3003",
    location: "Ahmedabad, Gujarat, India",
    avatar: profileImg,
    dateOfBirth: "04 / 03 / 2003",
    religion: "Hindu",
    nationality: "Indian",
  },

  social: {
    github: "https://github.com/digvijayvaghelaa04",
    linkedin: "https://www.linkedin.com/in/digvijay-vaghelaa/",
    instagram: "https://www.instagram.com/_dig__1/",
    snapchat: "https://snapchat.com/t/2tVkcP8K",
    twitter: "",
    dribbble: "",
    behance: "",
  },

  about: {
    bio: "Completed Master of Computer Applications (MCA) in 2026, with focus on full stack development, backend learning, API design, and scalable web applications. I have practical experience in full stack web development with strong frontend skills and improving backend skills. I have actively worked on freelancing and client project experience to deliver high-quality digital solutions.",
    mission: "My focus is to build efficient, scalable, and practical web solutions while growing deeper in backend development, API design, and database understanding. I believe in continuous learning, real project experience, and improving with every build.",
    interests: [
      "Full Stack Development",
      "Freelance Web Development",
      "Backend Learning & APIs",
      "Database Design",
      "Problem Solving",
      "Clean UI Development",
    ],
  },

  skills: {
    frontend: [
      { name: "React.js", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "💛", level: 88 },
      { name: "HTML5/CSS3", icon: "🎯", level: 95 },
      { name: "Tailwind CSS", icon: "🎨", level: 88 },
      { name: "Bootstrap", icon: "🅱️", level: 85 },
      { name: "TypeScript", icon: "💙", level: 75 },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 90 },
      { name: "Express.js", icon: "🚂", level: 85 },
      { name: "REST API", icon: "🔌", level: 85 },
      { name: "MongoDB", icon: "🍃", level: 75 },
      { name: "MySQL", icon: "🐬", level: 75 },
      { name: "API Integration", icon: "🔗", level: 85 },
    ],
    tools: [
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Postman", icon: "📡", level: 85 },
      { name: "Figma", icon: "🎨", level: 75 },
      { name: "Vercel", icon: "🚀", level: 85 },
      { name: "Netlify", icon: "⚡", level: 80 },
    ],
    aiTools: [
      { name: "ChatGPT", icon: "🤖", level: 95 },
      { name: "GitHub Copilot", icon: "✈️", level: 85 },
      { name: "Claude AI", icon: "🧠", level: 90 },
      { name: "Figma AI", icon: "✨", level: 80 },
      { name: "Antigravity AI", icon: "🌌", level: 90 },
    ]
  },

  projects: [
    {
      id: 1,
      title: "Vishwakarma Bat House",
      category: "E-Commerce",
      description: "A modern cricket bat e-commerce website built for showcasing premium bats, product details, responsive UI, and smooth user experience.",
      problem: "The client needed a digital storefront to showcase premium, handcrafted cricket bats to a wider audience, moving beyond local sales.",
      solution: "Developed a fast, responsive React-based e-commerce platform with a sleek UI to highlight product details and simplify the inquiry process.",
      image: batHouseImg,
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://vishwakarmabathouse.in/",
      githubLink: "",
      featured: true,
      badges: ["Client Project", "Live Project", "E-Commerce"],
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      category: "Personal Branding",
      description: "A modern responsive portfolio website created to showcase my skills, projects, experience, freelancing work, and contact information.",
      problem: "Needed a centralized, premium hub to demonstrate development capabilities to recruiters and freelance clients.",
      solution: "Built a 'Super Ultra Pro Max' portfolio featuring an integrated AI assistant (Jarvis), modern layout, and high-performance animations.",
      image: portfolioImg,
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      liveLink: "https://portfolio-dv-six.vercel.app/",
      githubLink: "",
      featured: true,
      badges: ["Live Project", "Featured", "AI Integrated"],
    },
    {
      id: 3,
      title: "E-Learning Platform",
      category: "E-Learning",
      description: "A full stack e-learning platform where students can access courses, track learning progress, view lessons, and manage their learning journey.",
      problem: "Students lacked a cohesive platform to track multi-module courses and view their progress interactively.",
      solution: "Engineered a robust full-stack LMS with secure authentication, course dashboards, and progress tracking.",
      image: elearningImg,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "",
      githubLink: "https://github.com/digvijayvaghelaa04/TechDV",
      featured: true,
      badges: ["Full Stack Project", "Featured"],
    },
  ],

  experience: [
    {
      id: 1,
      position: "Internship",
      company: "HN Techno",
      location: "Ahmedabad, Gujarat",
      period: "2025 - 2026",
      type: "work",
      description: "Completed Internship focused on full stack web development and practical industry experience.",
      achievements: [
        "Developed responsive React.js interfaces and reusable components.",
        "Integrated REST APIs and worked with databases.",
        "Contributed to real-world projects and gained practical development experience.",
      ],
      skills: ["React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    },
    {
      id: 2,
      position: "MCA (Master of Computer Applications)",
      company: "CVM University",
      location: "Anand, Gujarat",
      period: "Completed in 2026",
      type: "education",
      description: "Completed Master’s degree focused on advanced software engineering, full stack development, and modern computing technologies.",
      achievements: [
        "Focused on backend development, API design, and database understanding.",
        "Built practical full-stack projects using modern JavaScript technologies.",
      ],
      skills: ["Full Stack Development", "Database Design", "Software Engineering"],
    },
    {
      id: 3,
      position: "BCA (Bachelor's of Computer Applications)",
      company: "Sardar Patel University",
      location: "Anand, Gujarat",
      period: "Completed in 2023",
      type: "education",
      description: "Successfully completed Bachelor's degree in Computer Applications.",
      achievements: [
        "Gained a strong foundation in programming, databases, and general computer science concepts.",
        "Graduated with excellent academic performance.",
      ],
      skills: ["C/C++", "Java", "SQL", "Web Basics"],
    }
  ],

  achievements: [
    {
      id: 1,
      title: "MCA (Master of Computer Applications)",
      issuer: "CVM University",
      date: "2024 - 2026",
      icon: "🎓",
      description: "Completed Master’s degree focused on advanced software engineering, full stack development, and modern computing technologies.",
    },
    {
      id: 2,
      title: "BCA Graduation",
      issuer: "Sardar Patel University",
      date: "2020 - 2023",
      icon: "🎓",
      description: "Successfully completed Bachelor's degree in Computer Applications",
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
  ],

  softSkills: [
    "Active Interactor",
    "Strong Decision Maker",
    "Good Communication",
    "Team Collaborator",
    "Problem Solver",
    "Fast Learner",
  ],

  languages: [
    { name: "Gujarati", level: 3 },
    { name: "Hindi", level: 3 },
    { name: "English", level: 2 },
  ],
};