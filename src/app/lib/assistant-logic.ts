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

const GREETING = "Hi, I'm Jarvis 👋\nI can answer questions about Digvijay's skills, projects, experience, education, freelance services, and contact details.";
const DEFAULT_RESPONSE = "I'm not entirely sure, but I can help you with information about Digvijay's skills, projects, education, experience, freelance services, and contact details. What would you like to know?";

export const generateResponse = (input: string, context: ConversationContext): { response: string; links?: { url: string; label: string }[]; newContext: ConversationContext } => {
  const text = input.toLowerCase().replace(/[^\w\s]/g, "");
  let response = DEFAULT_RESPONSE;
  let links: { url: string; label: string }[] | undefined = undefined;
  let newContext = { ...context };

  // 1. Identity & Intro
  if (text.includes("who is digvijay") || text.includes("about him") || text.includes("who are you") || text.includes("introduce")) {
    response = "Digvijay is a passionate Full Stack Developer based in Ahmedabad, Gujarat, India. He builds scalable, modern, and user-friendly web applications.";
    newContext.lastTopic = "about";
  }
  
  // 2. Skills
  else if (text.includes("skill") || text.includes("technology") || text.includes("technologies") || text.includes("stack") || text.includes("what does he know") || text.includes("what do you know") || text.includes("tools")) {
    response = "Digvijay is highly proficient in:\n• Frontend: React.js, TypeScript, JavaScript, Tailwind CSS\n• Backend: Node.js, Express.js, MongoDB, MySQL\n• Tools: Git, Vercel, Figma, AI Assistants";
    newContext.lastTopic = "skills";
  }

  // 3. Projects
  else if (text.includes("project") || text.includes("built") || text.includes("portfolio") || text.includes("work")) {
    response = "He has built some excellent web applications, including:\n1. Vishwakarma Bat House (E-commerce)\n2. E-Learning Platform (LMS)\n3. This Portfolio Website\n\nI can show you the live demos if you'd like.";
    links = [
      { label: "View All Projects", url: "#projects" },
      { label: "Vishwakarma Bat House", url: "https://vishwakarmabathouse.in" }
    ];
    newContext.lastTopic = "projects";
  }

  // 4. Experience & Internship
  else if (text.includes("experience") || text.includes("internship") || text.includes("hn techno") || text.includes("job") || text.includes("work history")) {
    response = "Digvijay is interning at HN Techno (2025–2026), where he develops React interfaces, integrates REST APIs, and works on full stack applications for real-world clients.";
    newContext.lastTopic = "experience";
  }

  // 5. Education
  else if (text.includes("education") || text.includes("degree") || text.includes("study") || text.includes("bca") || text.includes("mca") || text.includes("college") || text.includes("university")) {
    response = "He holds a BCA from Sardar Patel University (2020–2023) and is currently pursuing an MCA at CVM University (2024–2026).";
    newContext.lastTopic = "about";
  }

  // 6. Freelance
  else if (text.includes("freelance") || text.includes("hire") || text.includes("services") || text.includes("can i hire") || text.includes("available")) {
    response = "Yes, Digvijay is open to freelance opportunities! He specializes in portfolio websites, e-commerce, and custom web apps. Would you like to get in touch?";
    links = [
      { label: "Contact Digvijay", url: "#contact" },
      { label: "Email Him", url: "mailto:digvijayvaghelaa04@gmail.com" }
    ];
    newContext.lastTopic = "freelance";
  }

  // 7. Contact
  else if (text.includes("contact") || text.includes("email") || text.includes("phone") || text.includes("call") || text.includes("reach")) {
    response = "You can reach him easily at digvijayvaghelaa04@gmail.com or 6356043003. He is based in Ahmedabad.";
    links = [
      { label: "Send an Email", url: "mailto:digvijayvaghelaa04@gmail.com" }
    ];
    newContext.lastTopic = "contact";
  }

  // 8. Resume / CV
  else if (text.includes("resume") || text.includes("cv") || text.includes("download") || text.includes("pdf")) {
    response = "Certainly. You can download his latest CV using the button below.";
    links = [
      { label: "Download CV", url: cvPdf }
    ];
    newContext.lastTopic = "about";
  }
  
  // 9. Contextual Follow-ups
  else if ((text.includes("tell me more") || text.includes("more") || text.includes("details")) && context.lastTopic) {
    if (context.lastTopic === "projects") {
      response = "One standout is 'Vishwakarma Bat House' - a fully responsive e-commerce site for cricket equipment. He also built a robust full-stack LMS platform.";
    } else if (context.lastTopic === "freelance") {
      response = "He handles everything from UI/UX to full-stack implementations. He writes clean, maintainable code and meets deadlines efficiently.";
    } else if (context.lastTopic === "skills") {
      response = "He excels at React and Tailwind CSS for beautiful frontends, and uses Node.js with MongoDB to build reliable backends.";
    } else {
      response = "Which specific area? I can provide more details about his projects, skills, or freelance availability.";
    }
  }

  // 10. Greetings
  else if (text === "hi" || text === "hello" || text === "hey" || text === "greetings") {
    response = GREETING;
  }

  return { response, links, newContext };
};

export const getGreeting = () => GREETING;
