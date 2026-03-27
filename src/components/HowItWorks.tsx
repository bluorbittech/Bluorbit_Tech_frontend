import { motion } from "framer-motion";

const steps = [
  { image: "/images/how it works icon(1).png", title: "Connect Vehicles & Sensors", desc: "Integrate vehicle telemetry, GPS, and road sensors via API or plug-and-play devices in minutes.", color: "from-blue-600/30 to-blue-400/10" },
  { image: "/images/how it works icon (2).png", title: "Stream Real-Time Data", desc: "Vehicle health, driver behavior, and live traffic data flow continuously into the BluOrbit platform.", color: "from-blue-500/30 to-blue-300/10" },
  { image: "/images/how it works icon (3).png", title: "AI Mobility Engine Analyzes", desc: "The BluOrbit AI Mobility Engine processes multi-source data to detect risks, patterns, and optimization opportunities.", color: "from-blue-400/30 to-white/10" },
  { image: "/images/how it works icon (4).png", title: "Deliver Actionable Intelligence", desc: "Real-time dashboards, predictive alerts, and route optimization recommendations empower smarter decisions.", color: "from-white/20 to-blue-400/10" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.2 + 0.25, ease: "backOut" },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.2 + 0.35, ease: "easeOut" },
  }),
};

const HowItWorks = () => (
  <section id="how-it-works" className="section-dark section-padding relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
          From Connection to <span className="gradient-text">Intelligence</span>
        </h2>
        <p className="font-play text-white/40 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          Four steps that turn raw vehicle and road data into real-time mobility intelligence.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">

        {/* Animated connector line — desktop only */}
        <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px z-0">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={connectorVariants}
            style={{ left: `${i * 33.33}%`, width: "33.33%", originX: 0 }}
            />
          ))}
        </div>

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative z-10 flex flex-col items-center text-center px-4 pb-2"
          >
            {/* Step number */}
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconVariants}
              className="relative mb-6"
            >
              {/* Outer pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-full bg-blue-500/30"
              />
              {/* Icon circle */}
              <div className={`w-[104px] h-[104px] rounded-full bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center relative`}>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={step.image} alt={step.title} className="w-9 h-9 object-contain" />
                </motion.div>
                {/* Step badge */}
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center border-2 border-[#0B1120]">
                  {i + 1}
                </span>
              </div>
            </motion.div>

            {/* Text */}
            <h3 className="font-play font-bold text-white text-base mb-2 leading-snug">{step.title}</h3>
            <p className="font-play text-white/45 text-sm leading-relaxed">{step.desc}</p>

            {/* Mobile connector arrow */}
            {i < steps.length - 1 && (
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={connectorVariants}
                style={{ originX: 0.5 }}
                className="lg:hidden mt-6 mb-2 w-px h-8 bg-gradient-to-b from-blue-500/60 to-transparent mx-auto"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
