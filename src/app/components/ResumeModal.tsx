import { motion, AnimatePresence } from "motion/react";
import { X, Download } from "lucide-react";
import { useEffect } from "react";
import cvPdf from "../../imports/Digvijay_Vaghela_CV.pdf.pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-900/80 dark:bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-black/20">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Resume Preview</h3>
              <div className="flex items-center gap-3">
                <a
                  href={cvPdf}
                  download="Digvijay_Vaghela_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--text-main)] text-white text-sm font-medium rounded-lg hover:bg-[var(--primary)] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-gray-100 dark:bg-[#050505] p-2 sm:p-6 overflow-hidden">
              <iframe
                src={`${cvPdf}#view=FitH`}
                className="w-full h-full rounded-lg shadow-sm border border-gray-200 dark:border-white/10"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
