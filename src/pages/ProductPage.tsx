import { motion } from "framer-motion";
import { ArrowRight, Server, Zap, Shield, BarChart3, Cpu, Network, Cloud, Code, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import SectionDivider from "@/components/SectionDivider";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundOrbs />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="section-dark relative min-h-screen flex items-center px-4 md:px-8 pt-40 pb-0 mt-12 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />

          <div className="container mx-auto relative z-10 pl-4 md:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 max-w-3xl"
            >
              <div className="font-inter inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full w-fit text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Next-Generation Mobility Intelligence
              </div>

              <h1 className="font-play text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
                BluOrbit<br />
                <span className="gradient-text">Go</span>
              </h1>

              <p className="font-inter text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Enterprise-grade AI-powered mobility intelligence engine that unifies vehicle telemetry, driver behavior analytics, and real-time road intelligence. Enabling fleets and individuals to make data-driven decisions that reduce emissions, prevent incidents, and optimize every journey.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <Button size="lg" asChild className="font-play font-bold bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 shadow-[0_0_20px_hsl(var(--primary)/0.3)] cursor-pointer">
                  <a href="https://app.bluorbittech.com" target="_blank" rel="noopener noreferrer">
                    Launch App <ArrowRight size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="font-inter gap-2 border-border text-foreground hover:bg-secondary cursor-pointer">
                  <a href="#technical-specs">View Technical Specs</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
                <motion.div whileHover={{ x: 4 }} className="flex flex-col gap-2">
                  <span className="text-blue-400 font-play font-bold text-xl">Real-Time</span>
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Data Processing</span>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex flex-col gap-2">
                  <span className="text-blue-400 font-play font-bold text-xl">99.9%</span>
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Uptime SLA</span>
                </motion.div>
                <motion.div whileHover={{ x: 4 }} className="flex flex-col gap-2">
                  <span className="text-blue-400 font-play font-bold text-xl">10K+</span>
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Vehicles Live</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider from="dark" />

        {/* Technical Architecture */}
        <section id="technical-specs" className="section-light section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Technical Architecture</p>
              <h2 className="font-play text-3xl md:text-4xl font-bold text-gray-900">
                Engineered for <span className="gradient-text-light">Performance & Scale</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Cpu,
                  title: "AI/ML Processing Engine",
                  desc: "Advanced machine learning models that process vehicle telematics in real-time, identifying patterns in driver behavior, vehicle health, and road conditions.",
                  features: ["Real-time anomaly detection", "Predictive modeling", "Pattern recognition"]
                },
                {
                  icon: Cloud,
                  title: "Cloud-Native Infrastructure",
                  desc: "Scalable microservices architecture deployed on cloud with auto-scaling, multi-region redundancy, and global CDN for low-latency access.",
                  features: ["99.9% uptime SLA", "Multi-region deployment", "Auto-scaling capability"]
                },
                {
                  icon: Network,
                  title: "Real-Time Data Ingestion",
                  desc: "High-throughput data pipeline processing millions of data points per second from OBD-II ports, GPS, and telematics systems.",
                  features: ["1M+ events/sec", "Sub-100ms latency", "Distributed processing"]
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "Military-grade encryption, role-based access control, GDPR compliance, and audit logging for complete data protection.",
                  features: ["AES-256 encryption", "SOC2 Type II", "GDPR compliant"]
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics Engine",
                  desc: "Comprehensive dashboard with customizable metrics, predictive alerts, and business intelligence tools for data-driven decisions.",
                  features: ["Custom dashboards", "API access", "Real-time alerts"]
                },
                {
                  icon: Network,
                  title: "Integration Hub",
                  desc: "Seamless integration with vehicle fleets, telematics providers, CRM systems, and third-party logistics platforms.",
                  features: ["REST & GraphQL APIs", "Webhook support", "Third-party integrations"]
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 h-full cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
                  />
                  <div className="relative z-10">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                      <item.icon size={24} />
                    </motion.div>
                    <h3 className="font-play font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="font-play text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-1">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold text-xs mt-1">✓</span>
                          <span className="font-play text-gray-500 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider from="light" />

        {/* Key Capabilities */}
        <section className="section-dark section-padding relative overflow-hidden">
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
              <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Core Capabilities</p>
              <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
                Comprehensive Intelligence <span className="gradient-text">Stack</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Real-Time Alerts", desc: "Instant notifications for safety events, maintenance issues, and anomalies" },
                { icon: BarChart3, title: "Fleet Analytics", desc: "Comprehensive KPI dashboards with predictive maintenance insights" },
                { icon: Code, title: "Developer APIs", desc: "RESTful and GraphQL APIs for seamless integrations" },
                { icon: GitBranch, title: "Version Control", desc: "Track changes, rollback, and manage configurations effortlessly" },
                { icon: Server, title: "Edge Computing", desc: "Process data at the edge for reduced latency" },
                { icon: Shield, title: "Data Privacy", desc: "GDPR-compliant with field-level encryption" },
                { icon: Cloud, title: "Cloud & On-Prem", desc: "Deploy in cloud or on-premise infrastructure" },
                { icon: Network, title: "Global Coverage", desc: "Multi-region deployment with 99.9% SLA" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 flex flex-col gap-3 relative overflow-hidden cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
                  />
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/25 to-blue-400/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-play font-bold text-white text-sm">{item.title}</h3>
                    <p className="font-play text-white/45 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider from="dark" />

        {/* Tech Stack */}
        <section className="section-light section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Technology Stack</p>
              <h2 className="font-play text-3xl md:text-4xl font-bold text-gray-900">
                Built with Industry-Leading <span className="gradient-text-light">Technologies</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Backend",
                  techs: ["Python", "Node.js", "Go", "Kafka", "PostgreSQL"]
                },
                {
                  category: "ML/AI",
                  techs: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "LSTM Networks"]
                },
                {
                  category: "Infrastructure",
                  techs: ["Kubernetes", "Docker", "AWS/GCP", "Redis", "Elasticsearch"]
                },
                {
                  category: "Data Processing",
                  techs: ["Apache Spark", "Flink", "Airflow", "Presto", "Snowflake"]
                },
                {
                  category: "Frontend",
                  techs: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Chart.js"]
                },
                {
                  category: "Security",
                  techs: ["OAuth 2.0", "JWT", "mTLS", "HashiCorp Vault", "Falco"]
                },
              ].map((stack, i) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-gray-200 bg-white p-6 cursor-default"
                >
                  <h3 className="font-play font-bold text-gray-900 text-lg mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span key={tech} className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-play font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider from="light" />

        {/* Enterprise Features */}
        <section className="section-dark section-padding relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="font-play text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Enterprise Features</p>
              <h2 className="font-play text-3xl md:text-4xl font-bold text-white">
                Enterprise-Ready <span className="gradient-text">Platform</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Multi-tenancy", desc: "Secure data isolation with complete organization separation and granular permission controls" },
                { title: "Custom Branding", desc: "Fully customizable UI, white-labeling, and branded mobile applications" },
                { title: "Compliance & Audit", desc: "GDPR, SOC2, ISO 27001 certified with comprehensive audit trails and reporting" },
                { title: "Advanced Integrations", desc: "Pre-built connectors for SAP, Salesforce, Oracle, and 100+ third-party platforms" },
                { title: "24/7 Enterprise Support", desc: "Dedicated support team, SLA guarantees, and priority incident response" },
                { title: "Scalable Architecture", desc: "Auto-scaling infrastructure supporting millions of connected devices globally" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-8 flex gap-6 relative overflow-hidden cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
                  />
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/25 to-blue-400/10 border border-blue-500/20 flex-shrink-0 flex items-center justify-center text-blue-400">
                    <span className="font-play font-bold">{i + 1}</span>
                  </div>
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="font-play font-bold text-white text-lg">{feature.title}</h3>
                    <p className="font-play text-white/45 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider from="dark" />

        {/* NVIDIA Technical Stack */}
        <section className="section-light section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="font-play text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Advanced Technical Stack</p>
              <h2 className="font-play text-3xl md:text-4xl font-bold text-gray-900">
                Powered by <span className="gradient-text-light">NVIDIA's AI Frameworks</span>
              </h2>
              <p className="font-play text-gray-600 mt-4 text-sm max-w-2xl mx-auto leading-relaxed">
                BluOrbit Go leverages cutting-edge NVIDIA SDKs to deliver real-time AI intelligence, advanced analytics, and edge computing capabilities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "NVIDIA Morpheus",
                  subtitle: "Real-Time Telemetry & Predictive Safety Alerts",
                  desc: "The always-on nervous system of BluOrbit Go. Morpheus ingests high-volume, live streams of vehicle data at GPU speed, using AI models to immediately spot anomalies, harsh braking, vehicle faults, and safety risks in real-time.",
                  features: [
                    "Purpose-built for streaming IoT data",
                    "Real-time anomaly detection",
                    "Instant safety alerts",
                    "GPU-accelerated processing",
                    "Continuous baseline learning"
                  ],
                  icon: Zap
                },
                {
                  title: "NVIDIA RAPIDS",
                  subtitle: "Analytics, Driver Behavior, Vehicle Health & Routing",
                  desc: "The analytical core that powers all intelligence behind real-time alerts and dashboards. RAPIDS enables high-speed training of ML models and powers routing optimization through GPU-accelerated graph processing.",
                  features: [
                    "cuML: Driver behavior scoring & risk classification",
                    "cuDF: Fast fleet analytics dashboards",
                    "cuGraph: Global real-time routing optimization",
                    "Predictive diagnostics & maintenance forecasting",
                    "High-speed data processing at scale"
                  ],
                  icon: BarChart3
                },
                {
                  title: "NVIDIA Metropolis",
                  subtitle: "Advanced Fatigue Detection (Vision AI)",
                  desc: "State-of-the-art driver monitoring through driver-facing cameras. Uses the TAO Toolkit for custom model training and DeepStream for edge deployment, enabling instant fatigue alerts directly on vehicle devices.",
                  features: [
                    "TAO Toolkit: Custom fatigue model training",
                    "Eye closure & yawning detection",
                    "Head pose estimation",
                    "DeepStream edge deployment",
                    "Local processing without cloud connection"
                  ],
                  icon: Shield
                },
                {
                  title: "NVIDIA Triton & TensorRT",
                  subtitle: "Production Deployment & Optimization",
                  desc: "Unified deployment infrastructure that hosts all AI models (Morpheus pipelines, RAPIDS analytics, Metropolis vision models). TensorRT optimizes all models for lowest latency and highest throughput in production.",
                  features: [
                    "Triton Inference Server unified hosting",
                    "Multi-model deployment support",
                    "TensorRT model optimization",
                    "Ultra-low latency inference",
                    "Enterprise scalability"
                  ],
                  icon: Cloud
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-play font-bold text-gray-900 text-lg">{item.title}</h3>
                        <p className="font-play text-blue-600 text-sm font-semibold mt-1">{item.subtitle}</p>
                      </div>
                      <motion.div whileHover={{ scale: 1.15 }} className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <item.icon size={20} />
                      </motion.div>
                    </div>
                    <p className="font-play text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold text-xs mt-1 flex-shrink-0">✓</span>
                          <span className="font-play text-gray-600 text-xs leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-50/50 p-8"
            >
              <h3 className="font-play font-bold text-gray-900 text-lg mb-4">Why NVIDIA?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">→</span>
                  <div>
                    <p className="font-play font-semibold text-gray-900 text-sm mb-1">GPU-Accelerated Performance</p>
                    <p className="font-play text-gray-600 text-sm">Process millions of data points per second with massive parallelism</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">→</span>
                  <div>
                    <p className="font-play font-semibold text-gray-900 text-sm mb-1">Unified AI Infrastructure</p>
                    <p className="font-play text-gray-600 text-sm">Deploy multiple AI workloads (streaming, analytics, vision) through one platform</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">→</span>
                  <div>
                    <p className="font-play font-semibold text-gray-900 text-sm mb-1">Edge to Cloud Scalability</p>
                    <p className="font-play text-gray-600 text-sm">Deploy on vehicle edge devices or cloud infrastructure seamlessly</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl flex-shrink-0">→</span>
                  <div>
                    <p className="font-play font-semibold text-gray-900 text-sm mb-1">Enterprise-Ready Stack</p>
                    <p className="font-play text-gray-600 text-sm">Production-grade tools with proven scalability and reliability</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider from="light" />

        {/* CTA Section */}
        <section className="section-light section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 md:p-16 text-center"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]" />
              <div className="relative z-10">
                <h2 className="font-play text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Mobility?</h2>
                <p className="font-inter text-blue-100 max-w-xl mx-auto mb-8">Start your journey with BluOrbit Go today. Get real-time intelligence, reduce incidents, and optimize every journey.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="font-play font-bold bg-white text-blue-600 hover:bg-blue-50 gap-2 cursor-pointer">
                    <a href="https://app.bluorbittech.com" target="_blank" rel="noopener noreferrer">
                      Launch Platform <ArrowRight size={18} />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="font-inter border-white text-white hover:bg-white/10 cursor-pointer">
                    <a href="#contact">Schedule Demo</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
