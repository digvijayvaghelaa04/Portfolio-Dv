import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send } from "lucide-react";
import { generateResponse, getGreeting, Message, ConversationContext } from "../lib/assistant-logic";

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: getGreeting(),
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [context, setContext] = useState<ConversationContext>({ lastTopic: null });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = (textInput?: string) => {
    const text = textInput ?? inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textInput) setInputValue("");

    // Simulate slight delay for AI feel
    setTimeout(() => {
      const { response, links, newContext } = generateResponse(userMsg.text, context);
      setContext(newContext);

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response,
        links: links,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 400);
  };

  const suggestedQuestions = [
    "Who is Digvijay?",
    "Tell me about his skills",
    "What projects has he built?",
    "Can I hire him?"
  ];

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed z-50 left-4 md:left-8 bottom-[calc(24px+env(safe-area-inset-bottom))] bg-white dark:bg-[#1E293B] text-[#0F172A] dark:text-white px-5 py-3 rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 group"
          >
            <Bot className="w-5 h-5 mr-2 text-[#6C4CF1]" />
            <span className="font-semibold tracking-wide">Digvijay AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[60] left-4 right-4 md:left-8 md:right-auto bottom-[calc(24px+env(safe-area-inset-bottom))] md:w-[360px] max-h-[75vh] md:h-[500px] h-[75vh] bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#1E293B]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#6C4CF1]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#6C4CF1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] dark:text-white text-sm">Digvijay AI</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Personal Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-[#0F172A]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex gap-2 max-w-[85%]">
                    {msg.sender === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-[#6C4CF1]/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-[#6C4CF1]" />
                      </div>
                    )}
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-[#6C4CF1] text-white rounded-tr-sm"
                          : "bg-gray-100 dark:bg-[#1E293B] text-[#0F172A] dark:text-gray-200 rounded-tl-sm border border-gray-200 dark:border-white/5"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      
                      {msg.links && msg.links.length > 0 && (
                        <div className="mt-3 flex flex-col gap-2">
                          {msg.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith("http") || link.url.endsWith(".pdf") ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-[#6C4CF1] bg-[#6C4CF1]/10 dark:bg-[#6C4CF1]/20 hover:bg-[#6C4CF1]/20 dark:hover:bg-[#6C4CF1]/30 transition-colors px-3 py-1.5 rounded-lg flex items-center justify-center text-center"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (only show if no user messages yet) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 bg-white dark:bg-[#0F172A]">
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs text-[#0F172A] dark:text-gray-300 bg-gray-100 dark:bg-[#1E293B] border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-left font-medium"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#0F172A]">
              <div className="flex items-center gap-2 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-50 dark:bg-[#1E293B] text-[#0F172A] dark:text-white border border-gray-200 dark:border-white/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#6C4CF1] transition-colors pr-10"
                  aria-label="Message Digvijay AI"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="absolute right-1 w-8 h-8 rounded-full bg-[#6C4CF1] flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5b3ee0] transition-colors"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
