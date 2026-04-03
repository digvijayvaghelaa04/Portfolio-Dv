import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Anti-spam hidden field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide a bit more detail (min 15 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });

      // Reset success status after a while
      setTimeout(() => setSubmitStatus("idle"), 6000);

    } catch (error: any) {
      console.error("Submission failed:", error);
      setSubmitStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email || "digvijay@example.com"}`, label: "Mail" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/50 dark:from-indigo-900/10 via-transparent to-transparent" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4 font-semibold">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work <span className="text-indigo-600 dark:text-indigo-400">Together</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
              Contact Information
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-[#111]/80 border border-indigo-100 dark:border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50 transition-all duration-300 shadow-sm">
                    <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 font-medium">{info.label}</p>
                    {info.href ? (
                       <a
                         href={info.href}
                         className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-lg"
                       >
                         {info.value}
                       </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-semibold text-lg">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h5>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white hover:border-gray-900 dark:hover:border-white transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-[#111]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-indigo-100 dark:border-white/5 shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.02)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              
              {/* Anti-spam Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-gray-300 font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border ${
                    errors.name ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  } rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                    <AlertCircle className="w-4 h-4"/> {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-gray-300 font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border ${
                    errors.email ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  } rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                    <AlertCircle className="w-4 h-4"/> {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-900 dark:text-gray-300 font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border ${
                    errors.subject ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  } rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                    <AlertCircle className="w-4 h-4"/> {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-gray-300 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border ${
                    errors.message ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  } rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1">
                    <AlertCircle className="w-4 h-4"/> {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group mt-4 relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                    Sending securely...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-400 dark:text-emerald-500" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages overlay */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Thanks for reaching out! I've received your message and will reply shortly.</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-700 dark:text-red-400 font-medium flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}