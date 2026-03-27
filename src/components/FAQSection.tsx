import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is BluOrbit Go?", a: "BluOrbit Go is an AI powered connected mobility platform that integrates vehicle telemetry, driver behavior, and road data into a centralized intelligence system delivering real-time dashboards, predictive alerts, and actionable insights for safer, more efficient mobility." },
  { q: "How Does the AI Mobility Engine Work?", a: "BluOrbit Go Mobility Engine continuously processes data from vehicles, drivers, and road sensors. It detects risk patterns, predicts maintenance needs, and generates real-time recommendations for route optimization and safety all without manual intervention." },
  { q: "Who is BluOrbit Go Designed for?", a: "We cater to a diverse range of stakeholders, including fleet operators, logistics managers, individual drivers, smart city planners, and automotive OEMs. It is designed to support any organization or individual requiring real-time, connected vehicle data and advanced mobility intelligence." },
  { q: "Can BluOrbit Go integrate with our existing Vehicle Systems?", a: "Yes. We offer a comprehensive REST API and support integration with existing telematics hardware, GPS systems, ERP, and fleet management platforms. Enterprise custom integrations are also available." },
  { q: "Is my vehicle and driver data secure?", a: "All data is encrypted end-to-end with AES-256 encryption. BluOrbit Go complies with GDPR, CCPA, and SOC 2 standards. You retain full control over data access, sharing, and retention policies." },
  { q: "Is there a free trial?", a: "Yes. All SaaS plans include a 14-day free trial with full platform access. No credit card required. Enterprise plans include a guided proof-of-concept engagement." },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      animate={isOpen ? {
        borderColor: "rgba(59,130,246,0.5)",
        boxShadow: "0 0 24px rgba(59,130,246,0.12), inset 0 0 20px rgba(59,130,246,0.04)",
      } : {
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "none",
      }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border bg-white/[0.04] backdrop-blur-xl overflow-hidden"
    >
      {/* Trigger */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`font-play text-sm font-medium transition-colors duration-200 ${isOpen ? "text-white" : "text-white/75 group-hover:text-white"}`}>
          {faq.q}
        </span>

        {/* Rotating chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/8 text-white/40 group-hover:bg-white/12 group-hover:text-white/70"
          }`}
        >
          <ChevronDown size={15} />
        </motion.div>
      </button>

      {/* Animated content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25, delay: isOpen ? 0.1 : 0 } }}
            className="overflow-hidden"
          >
            {/* Blue left accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="mx-6 mb-5 pl-4 border-l-2 border-blue-500/50"
            >
              <p className="font-play text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-dark section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="font-play text-white/40 mt-4 text-sm max-w-sm mx-auto">Everything you need to know about BluOrbit Go.</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
