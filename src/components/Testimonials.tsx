import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Avenra Solis",
    role: "Fleet Operations Manager",
    company: "TransGlobal Logistics",
    text: "BluOrbit Go's real-time vehicle telemetry and AI alerts cut our fleet incidents by 40% and reduced fuel costs by 20%. The command-center dashboard is exactly what we needed.",
    image: "/images/testimonial(1).png",
  },
  {
    name: "Nysha Elric",
    role: "Connected Vehicle Lead",
    company: "AutoTech OEM",
    text: "We integrated BluOrbit Go's API into our connected vehicle platform in days. The predictive intelligence layer is genuinely impressive — it's transformed how we think about driver safety.",
    image: "/images/testimonial (2).png",
  },
  {
    name: "Velina Croix",
    role: "Smart City Mobility Planner",
    company: "City of Meridian",
    text: "BluOrbit Go gave us real-time visibility into traffic and vehicle data across the city. The mobility insights have directly improved our infrastructure planning decisions.",
    image: "/images/testimonial (3).png",
  },
  {
    name: "Tavish Kalen",
    role: "Head of Logistics",
    company: "SwiftMove Africa",
    text: "Deploying BluOrbit Go across our 200-vehicle fleet was seamless. The predictive maintenance alerts alone have saved us thousands in unexpected breakdowns.",
    image: "/images/testimonial (4).png",
  },
  {
    name: "Sorien Thalor",
    role: "Automotive Product Lead",
    company: "NovaDrive GmbH",
    text: "The depth of driver behavior analytics BluOrbit Go provides is unmatched. Our OEM integration was live within a week and the data quality is exceptional.",
    image: "/images/testimonial (5).png",
  },
  {
    name: "Jorik Vael",
    role: "Mobility Strategy Director",
    company: "Aerovante Solutions",
    text: "BluOrbit Go unified our multi-modal operations and gave us end-to-end visibility — the results exceeded our KPIs within the first quarter.",
    image: "/images/testimonial (6).png",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3, ease: "easeIn" } }),
};

const VISIBLE = 3;
const INTERVAL = 3500;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  // Get 3 visible indices
  const visible = Array.from({ length: VISIBLE }, (_, i) => (current + i) % testimonials.length);

  return (
    <section
      className="section-light section-padding overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-marcellus text-3xl md:text-4xl text-gray-900">
            Our Trusted Voices
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={dir}>
              {visible.map((idx) => {
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${idx}-${t.name}`}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={15} className="fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                    <p className="font-play text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-marcellus text-gray-900 text-sm">{t.name}</p>
                        <p className="font-play text-gray-400 text-xs">{t.role}{t.company && ` · ${t.company}`}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  className="transition-all duration-300"
                >
                  <motion.div
                    animate={{ width: i === current ? 24 : 8, backgroundColor: i === current ? "#3B82F6" : "#D1D5DB" }}
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Auto-progress bar */}
          {!paused && (
            <motion.div
              key={current}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: INTERVAL / 1000, ease: "linear" }}
              style={{ originX: 0 }}
              className="absolute -bottom-6 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
