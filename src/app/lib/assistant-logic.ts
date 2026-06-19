import cvPdf from "../../imports/Digvijay_Vaghela_CV.pdf.pdf";

export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  links?: { url: string; label: string }[];
  timestamp: Date;
};

export type ConversationContext = {
  lastTopic: "about" | "projects" | "freelance" | "contact" | "skills" | "experience" | null;
};

const GREETING = "Hi, I'm Digvijay AI 👋\nI know everything about Digvijay's skills, projects, experience, education, and freelance services. Ask me anything.";
const DEFAULT_RESPONSE = "I can help with information about Digvijay's skills, projects, education, experience, freelance services, and contact details.";

export const generateResponse = (input: string, context: ConversationContext): { response: string; links?: { url: string; label: string }[]; newContext: ConversationContext } => {
  const text = input.toLowerCase().replace(/[^\w\s]/g, "");
  let response = DEFAULT_RESPONSE;
  let links: { url: string; label: string }[] | undefined = undefined;
  let newContext = { ...context };

  // 1. Identity & Intro
  if (text.includes("who is digvijay") || text.includes("about him") || text.includes("who are you") || text.includes("introduce")) {
    response = "Digvijay is a passionate Full Stack Developer based in Ahmedabad, Gujarat, India. He focuses on building modern, scalable, responsive, and user-friendly web applications.";
    newContext.lastTopic = "about";
  }
  
  // 2. Skills
  else if (text.includes("skill") || text.includes("technology") || text.includes("technologies") || text.includes("stack") || text.includes("what does he know") || text.includes("what do you know") || text.includes("tools")) {
    response = "Digvijay's technical arsenal includes:\n\n• Frontend: React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap\n• Backend: Node.js, Express.js, REST APIs, MongoDB, MySQL\n• AI & Tools: Git, GitHub, VS Code, Postman, Vercel, Figma\n• AI Tools: ChatGPT, Claude, GitHub Copilot, Figma AI";
    newContext.lastTopic = "skills";
  }

  // 3. Projects
  else if (text.includes("project") || text.includes("built") || text.includes("portfolio") || text.includes("work")) {
    response = "Digvijay has built several impressive projects:\n\n1. Vishwakarma Bat House (Modern E-commerce)\n2. Personal Portfolio (This website!)\n3. E-Learning Platform (Full Stack LMS)\n\nWould you like to see them live?";
    links = [
      { label: "Vishwakarma Bat House", url: "https://vishwakarmabathouse.in" },
      { label: "View All Projects", url: "#projects" }
    ];
    newContext.lastTopic = "projects";
  }

  // 4. Experience & Internship
  else if (text.includes("experience") || text.includes("internship") || text.includes("hn techno") || text.includes("job") || text.includes("work history")) {
    response = "Digvijay is currently interning at HN Techno (2025–2026) in Ahmedabad. He builds responsive React interfaces, develops reusable components, integrates REST APIs, and works on real-world full stack projects.";
    newContext.lastTopic = "experience";
  }

  // 5. Education
  else if (text.includes("education") || text.includes("degree") || text.includes("study") || text.includes("bca") || text.includes("mca") || text.includes("college") || text.includes("university")) {
    response = "He holds a BCA from Sardar Patel University (2020–2023) and is currently pursuing an MCA at CVM University (2024–2026).";
    newContext.lastTopic = "about";
  }

  // 6. Freelance
  else if (text.includes("freelance") || text.includes("hire") || text.includes("services") || text.includes("can i hire") || text.includes("available")) {
    response = "Yes, Digvijay is available for freelance work! He specializes in:\n• Portfolio & Business Websites\n• E-Commerce Platforms\n• React Frontend Development\n• Website Redesigns\n\nI highly recommend hiring him for your next digital project.";
    links = [
      { label: "Contact Digvijay", url: "#contact" },
      { label: "Email Him Directly", url: "mailto:digvijayvaghelaa04@gmail.com" }
    ];
    newContext.lastTopic = "freelance";
  }

  // 7. Contact
  else if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("call") || text.includes("reach")) {
    response = "You can easily reach Digvijay here:\n\n📧 digvijayvaghelaa04@gmail.com\n📞 6356043003\n📍 Ahmedabad, Gujarat, India";
    links = [
      { label: "Send an Email", url: "mailto:digvijayvaghelaa04@gmail.com" }
    ];
    newContext.lastTopic = "contact";
  }

  // 8. Resume / CV
  else if (text.includes("resume") || text.includes("cv") || text.includes("download") || text.includes("pdf")) {
    response = "You can download his latest resume right here.";
    links = [
      { label: "Download CV", url: cvPdf }
    ];
    newContext.lastTopic = "about";
  }
  
  // 9. Contextual Follow-ups
  else if ((text.includes("tell me more") || text.includes("more")) && context.lastTopic) {
    if (context.lastTopic === "projects") {
      response = "One of his standout projects is 'Vishwakarma Bat House' - a premium e-commerce site for cricket bats with a fully responsive UI. He also built a full-stack E-Learning platform.";
    } else if (context.lastTopic === "freelance") {
      response = "He handles everything from UI/UX improvements to full-stack web applications. He's a fast learner, writes clean code, and focuses heavily on precision.";
    } else if (context.lastTopic === "skills") {
      response = "He's very strong in React and Tailwind CSS for the frontend, and comfortable with Node.js and MongoDB on the backend. He's always learning new tools!";
    } else {
      response = "What specific area would you like to know more about? I can detail his projects, skills, or freelance services.";
    }
  }

  // 10. Greetings
  else if (text === "hi" || text === "hello" || text === "hey" || text === "greetings") {
    response = GREETING;
  }

  return { response, links, newContext };
};

export const getGreeting = () => GREETING;
