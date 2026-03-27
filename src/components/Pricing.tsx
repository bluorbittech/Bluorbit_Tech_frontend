import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Individual",
    price: "$19",
    period: "/mo",
    desc: "For individual smart drivers",
    features: ["1 Vehicle", "Real-time telemetry", "Driver behavior scoring", "Predictive safety alerts", "Route optimization", "Mobile app access"],
    highlighted: false,
    link: "https://buy.stripe.com/test_cNieVd5Td4O58p550X4ko01",
  },
  {
    name: "Fleet Pro",
    price: "$79",
    period: "/mo",
    desc: "For fleet operators & logistics teams",
    features: ["Up to 25 vehicles", "Everything in Individual", "Fleet management dashboard", "Real-time mobility analytics", "Team & driver management", "Priority support"],
    highlighted: true,
    link: "https://buy.stripe.com/test_7sY28rgxR1BT9t9gJF4ko00",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale mobility & OEM solutions",
    features: ["Unlimited vehicles", "Everything in Fleet Pro", "Custom API integrations", "Enterprise mobility intelligence", "Dedicated account manager", "SLA guarantee"],
    highlighted: false,
    link: "#contact",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.35, delay: 0.3 + i * 0.07, ease: "easeOut" },
  }),
};

const Pricing = () => (
  <section id="pricing" className="section-dark section-padding relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/4 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Pricing</p>
        <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
          Simple, <span className="gradient-text">Transparent</span> Pricing
        </h2>
        <p className="font-play text-white/40 mt-4 text-sm max-w-sm mx-auto">Start free. Scale as you grow.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: plan.highlighted ? 1.03 : 1.04, y: -6, transition: { type: "spring", stiffness: 280, damping: 20 } }}
            className={`relative flex flex-col gap-5 rounded-2xl p-7 cursor-default ${
              plan.highlighted
                ? "bg-gradient-to-b from-blue-600/20 to-blue-900/20 border border-blue-500/50"
                : "glass-card"
            }`}
            style={plan.highlighted ? {
              boxShadow: "0 0 0 1px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2), 0 0 80px rgba(59,130,246,0.08)",
            } : {}}
          >
            {/* Pro glow pulse ring */}
            {plan.highlighted && (
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl border border-blue-400/40 pointer-events-none"
              />
            )}

            {/* Most Popular badge */}
            {plan.highlighted && (
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-[0_0_16px_rgba(59,130,246,0.5)]"
              >
                <Zap size={11} className="fill-white" /> Most Popular
              </motion.span>
            )}

            {/* Plan name + desc */}
            <div>
              <h3 className={`font-cinzel text-xl font-bold ${plan.highlighted ? "text-white" : "text-white/90"}`}>{plan.name}</h3>
              <p className="font-play text-white/40 text-sm mt-1">{plan.desc}</p>
            </div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
              className="flex items-baseline gap-1"
            >
              <span className={`text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-white/90"}`}>{plan.price}</span>
              <span className="text-white/40 text-sm">{plan.period}</span>
            </motion.div>

            {/* Divider */}
            <div className={`h-px ${plan.highlighted ? "bg-blue-400/30" : "bg-white/8"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((f, fi) => (
                <motion.li
                  key={f}
                  custom={fi}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                  className="font-play flex items-center gap-2.5 text-sm text-white/70"
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-blue-500/30" : "bg-white/8"}`}>
                    <Check size={12} className={plan.highlighted ? "text-blue-300" : "text-white/60"} />
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            {plan.highlighted ? (
              <motion.a
                href={plan.link}
                target={plan.link.startsWith("http") ? "_blank" : "_self"}
                rel={plan.link.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ["0 0 12px rgba(59,130,246,0.4)", "0 0 28px rgba(59,130,246,0.7)", "0 0 12px rgba(59,130,246,0.4)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                className="font-lilita w-full mt-auto py-2.5 rounded-lg bg-blue-500 text-white font-semibold text-sm flex items-center justify-center"
              >
                Start Free Trial
              </motion.a>
            ) : (
              <motion.a
                href={plan.link}
                target={plan.link.startsWith("http") ? "_blank" : "_self"}
                rel={plan.link.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full mt-auto py-2.5 rounded-lg border border-white/15 text-white/70 font-semibold text-sm hover:text-white transition-colors flex items-center justify-center"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
