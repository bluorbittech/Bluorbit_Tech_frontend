import { motion } from "framer-motion";

const features = [
  { image: "/images/key features icons(1).png", title: "Vehicle Telemetry Integration", desc: "Connect and stream live vehicle data — speed, fuel, engine health, and GPS — into a unified intelligence layer.", idle: { animate: { scaleX: [1, 1.2, 1], scaleY: [1, 0.85, 1] }, transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } } },
  { image: "/images/key features icons (2).png", title: "Driver Behavior Monitoring", desc: "AI-scored analysis of driving patterns to identify risk, reward safe habits, and reduce incidents.", idle: { animate: { rotate: [0, 25, 0] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } } },
  { image: "/images/key features icons (3).png", title: "Predictive Safety Alerts", desc: "Real-time notifications for risk zones, harsh braking, fatigue detection, and vehicle anomalies before they escalate.", idle: { animate: { rotate: [-12, 12, -12] }, transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 } } },
  { image: "/images/key features icons (4).png", title: "Global Real-Time Routing", desc: "AI-powered routing that reduces fuel consumption, travel time, and emissions across fleets and individual trips.", idle: { animate: { x: [0, 4, 0] }, transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" } } },
  { image: "/images/key features icons (5).png", title: "Vehicle Health & Maintenance", desc: "Predictive diagnostics and maintenance scheduling based on live vehicle performance data.", idle: { animate: { rotate: [0, 20, 0, -20, 0] }, transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 } } },
  { image: "/images/key features icons (6).png", title: "Mobility Intelligence Dashboard", desc: "Command-center dashboards with real-time KPIs, fleet analytics, and customizable mobility insights.", idle: { animate: { scaleY: [1, 1.15, 1] }, transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } } },
];

// Even-index cards: text slides from left. Odd: from right.
const textVariants = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -32 : 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } },
});

const cardVariants = (i: number) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } },
});

const Features = () => (
  <section id="features" className="section-dark section-padding relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/4 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Key Features</p>
        <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
          Everything You Need for{" "}
          <span className="gradient-text">Connected Mobility Intelligence</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants(i)}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
            className="glass-card p-7 flex flex-col gap-4 group relative overflow-hidden cursor-default"
          >
            {/* Hover glow sweep */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileHover={{ opacity: 1, x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
            />

            {/* Animated icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/25 to-blue-400/10 border border-blue-500/20 flex items-center justify-center text-blue-400 relative">
              <motion.div
                animate={f.idle.animate}
                transition={f.idle.transition}
                className="w-full h-full flex items-center justify-center p-2"
              >
                <img src={f.image} alt={f.title} className="w-full h-full object-contain" />
              </motion.div>
              {/* Icon glow on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.4 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-lg bg-blue-500/20 blur-sm pointer-events-none"
              />
            </div>

            {/* Text slides in */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants(i)}
              className="flex flex-col gap-2"
            >
              <h3 className="font-play font-bold text-base text-white">{f.title}</h3>
              <p className="font-play text-white/45 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-300/50"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
