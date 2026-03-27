import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, X } from "lucide-react";

const articles = [
  {
    title: "How AI-Driven Vehicle Telemetry Is Redefining Fleet Safety",
    category: "AI & Mobility",
    readTime: "6 min",
    date: "Mar 20, 2026",
    gradient: "from-blue-600 via-blue-500 to-blue-400",
    image: "/images/blog1.png",
    content: "Discover how advanced AI algorithms and real-time vehicle telemetry are combining to proactively identify risks, optimize driving patterns, and significantly reduce accident rates across modern transportation fleets.",
    fullContent: "The integration of Artificial Intelligence with vehicle telemetry has initiated a new era in fleet management and safety. By analyzing vast amounts of data in real-time, including speed, braking patterns, and situational awareness, AI systems can instantly detect hazardous driving behaviors before they result in accidents.\n\nFurthermore, these systems offer predictive maintenance alerts, ensuring vehicles are always in optimal condition, drastically reducing downtime and lowering insurance premiums while maintaining an impeccable safety record for both drivers and the public.",
    slug: "/blog/ai-driven-vehicle-telemetry",
  },
  {
    title: "Connected Vehicles & Smart Cities: The Road Ahead",
    category: "Smart Mobility",
    readTime: "7 min",
    date: "Mar 15, 2026",
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
    image: "/images/blog (2).png",
    content: "Explore the emerging synergy between connected vehicle infrastructure and smart city development, paving the way for reduced traffic congestion, lower emissions, and seamless urban transit experiences.",
    fullContent: "As urban landscapes evolve, the synergy between connected vehicles (V2X communication) and smart city infrastructure is becoming fundamental to solving modern transit challenges. Intelligent traffic lights, real-time rerouting, and dynamic tolling systems communicate directly with passing vehicles to create a fluid, highly efficient traffic ecosystem.\n\nThis interconnected approach not only mitigates gridlock but also plays a crucial role in lowering urban emissions, making our cities greener, safer, and much more liveable. Fleet managers and city planners alike are working together to standardize data exchange, ensuring a unified standard for the smart cities of tomorrow.",
    slug: "/blog/connected-vehicles-smart-cities",
  },
  {
    title: "Predictive Alerts vs. Reactive Monitoring: Why It Matters for Fleets",
    category: "Fleet Intelligence",
    readTime: "5 min",
    date: "Mar 10, 2026",
    gradient: "from-blue-800 via-blue-600 to-blue-400",
    image: "/images/blog (3).png",
    content: "Learn why transitioning from traditional reactive tracking to predictive, AI-powered alerts can help fleet managers anticipate maintenance needs, prevent breakdowns, and maximize operational efficiency.",
    fullContent: "For decades, fleet managers operated on a reactive basis—waiting for a vehicle to break down or a driver to log a complaint before taking action. Today, predictive intelligence has completely inverted this paradigm. Machine learning models analyze historical and incoming telematics data to predict component failures weeks in advance.\n\nThis shift from reactive to proactive monitoring enables scheduled maintenance during non-peak hours, prevents catastrophic on-road failures, and ensures that the fleet operates at maximum capacity with minimal unpredicted disruptions. Investing in predictive alerts fundamentally shifts fleet administration from cost-containment to active value generation.",
    slug: "/blog/predictive-alerts-vs-reactive-monitoring",
  },
];

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="blog" className="section-light section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Insights</p>
          <h2 className="font-play text-3xl md:text-4xl font-bold text-gray-900">
            Latest from <span className="gradient-text-light">Our Blog</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <div key={a.title} onClick={() => setSelectedArticle(a)} className="block z-0 relative">
              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(59,130,246,0.14), 0 4px 12px rgba(0,0,0,0.08)" }}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer group h-full flex flex-col"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                {/* Image area with zoom */}
                <div className="h-44 overflow-hidden relative">
                  <motion.div
                    className="w-full h-full relative flex items-center justify-center"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} mix-blend-multiply opacity-60`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Overlay pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Category badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.2 }}
                      className="relative z-10 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/30"
                    >
                      {a.category}
                    </motion.span>
                  </motion.div>

                  {/* Hover overlay shimmer */}
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{a.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {a.readTime}
                    </span>
                  </div>

                  <h3 className="font-play font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {a.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {a.content}
                  </p>

                  {/* Animated Read More */}
                  <div className="mt-auto pt-2">
                    <motion.span
                      className="text-blue-600 text-sm flex items-center gap-1 font-medium w-fit cursor-pointer"
                      whileHover="hover"
                      initial="rest"
                    >
                      Read More
                      <motion.span
                        variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={14} />
                      </motion.span>
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="h-64 sm:h-80 relative shrink-0">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedArticle.gradient} mix-blend-multiply opacity-60`} />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-20"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 sm:p-10 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                  <span className="flex items-center gap-1 hidden sm:flex">
                    <Clock size={14} /> {selectedArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-play font-bold text-gray-900 mb-6 leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="prose prose-blue max-w-none text-gray-700">
                  {selectedArticle.fullContent.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-[15px] sm:text-base leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
