import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sources = [
  { image: "/images/Platform Architecture icons(1).png", label: "Vehicle Telemetry", sub: "Speed · Health · GPS" },
  { image: "/images/Platform Architecture icons (2).png", label: "Driver Behavior", sub: "Patterns · Scoring · Fatigue" },
  { image: "/images/Platform Architecture icons (3).png", label: "Road & Traffic Data", sub: "Sensors · Conditions · Flow" },
];

const TechDiagram = () => (
  <section className="section-light section-padding relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Platform Architecture</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How BluOrbit Go Converts Data into{" "}
          <span className="gradient-text-light">Real-Time Insights</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          BluOrbit Go seamlessly connects vehicle, driver, and road data, generating real time insights and predictive intelligence for smarter mobility.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {/* Data Sources */}
        <div className="flex flex-col gap-4">
          {sources.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="light-card p-4 flex items-center gap-3 w-56"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center p-1.5 flex-shrink-0">
                <img src={s.image} alt={s.label} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-gray-900 text-sm font-semibold">{s.label}</p>
                <p className="text-gray-400 text-xs">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center px-4 lg:px-6"
        >
          <ArrowRight size={28} className="text-primary rotate-90 lg:rotate-0" />
        </motion.div>

        {/* AI Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="light-card p-8 flex flex-col items-center gap-3 w-56 text-center border-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >
          <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center p-2">
            <img src="/images/Platform Architecture icons (4).png" alt="BluOrbit Go Engine" className="w-full h-full object-contain" />
          </div>
          <p className="text-gray-900 font-bold text-sm">BluOrbit Go</p>
          <p className="text-blue-600 text-xs font-semibold">Mobility Engine</p>
          <p className="text-gray-400 text-xs leading-relaxed">Real-time processing · Risk prediction · Pattern detection</p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center px-4 lg:px-6"
        >
          <ArrowRight size={28} className="text-primary rotate-90 lg:rotate-0" />
        </motion.div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="light-card p-6 flex flex-col items-center gap-3 w-56 text-center"
        >
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center p-2">
            <img src="/images/Platform Architecture icons (5).png" alt="Mobility Intelligence" className="w-full h-full object-contain" />
          </div>
          <p className="text-gray-900 font-semibold text-sm">Mobility Intelligence</p>
          <ul className="text-gray-400 text-xs flex flex-col gap-1.5 text-left w-full">
            <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Predictive safety alerts</li>
            <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Route optimization</li>
            <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Fleet performance insights</li>
            <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Real-time dashboards</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechDiagram;
