import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Truck, UserCheck, Package, Building2, Car } from "lucide-react";
import { useRef } from "react";

const cases = [
  { icon: Truck, title: "Fleet Operators & Logistics", desc: "Real-time fleet visibility, route optimization, and driver performance management at scale.", accent: "#3B82F6" },
  { icon: UserCheck, title: "Individual Smart Drivers", desc: "Personal driving insights, safety scoring, and predictive alerts for safer, more efficient journeys.", accent: "#2563EB" },
  { icon: Building2, title: "Smart City Planners", desc: "Integrate vehicle and traffic data into city-wide mobility planning and infrastructure decisions.", accent: "#1D4ED8" },
  { icon: Car, title: "Automotive OEMs", desc: "Embed BluOrbit's connected vehicle intelligence into next-generation automotive platforms.", accent: "#3B82F6" },
  { icon: Package, title: "Enterprise Mobility Teams", desc: "Scalable mobility intelligence solutions for organizations managing complex vehicle ecosystems.", accent: "#2563EB" },
];

const TiltCard = ({ c, i }: { c: typeof cases[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -10, boxShadow: `0 20px 48px rgba(59,130,246,0.18), 0 4px 16px rgba(59,130,246,0.1)` }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative bg-white border border-gray-100 rounded-xl p-6 flex gap-4 items-start cursor-default h-full overflow-hidden"
      >
        {/* Icon */}
        <motion.div
          style={{ translateZ: 20 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-12 h-12 rounded-lg bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600"
        >
          <c.icon size={24} />
        </motion.div>

        {/* Text */}
        <div style={{ translateZ: 10 }}>
          <h3 className="font-play font-bold text-gray-900 mb-1">{c.title}</h3>
          <p className="font-play text-gray-500 text-sm leading-relaxed">{c.desc}</p>
        </div>

        {/* Bottom glow line — appears on hover via CSS group */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl bg-gradient-to-r from-blue-500 to-blue-300"
        />
      </motion.div>
    </motion.div>
  );
};

const UseCases = () => (
  <section id="use-cases" className="section-light section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Use Cases</p>
        <h2 className="font-play text-3xl md:text-4xl font-bold text-gray-900">
          One Platform for <span className="gradient-text-light">Every Mobility Player</span>
        </h2>
        <p className="font-play text-gray-400 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          Individual drivers to enterprise fleets, BluOrbit Go connects and optimizes every layer of mobility.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cases.map((c, i) => (
          <TiltCard key={c.title} c={c} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
