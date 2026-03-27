import { motion } from "framer-motion";
import { ArrowRight, Play, Car, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="section-dark relative min-h-screen flex items-center px-4 md:px-8 pt-40 pb-0 mt-12 overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url("/images/hero\\ (2).png")',
        backgroundSize: 'contain',
        backgroundPosition: 'left calc(50% + 10px)',
        backgroundRepeat: 'no-repeat',
      }}
    />
    {/* Overlays for dark mode readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent z-0" />

    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" />

    <div className="container mx-auto relative z-10 pl-4 md:pl-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <div className="font-inter inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full w-fit text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Powered by BluOrbit Go AI Mobility Engine
        </div>

        <h1 className="font-play text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
          The Smart Driving Platform That{" "}
          <span className="gradient-text">Connects Vehicles, Drivers, and Roads</span>{" "}
          in Real-Time.
        </h1>

        <p className="font-inter text-base text-muted-foreground max-w-lg leading-relaxed">
          BluOrbit Go is an AI-powered mobility intelligence <br />
          engine that unifies vehicle telemetry, driver behavior, <br />
          and road data — delivering real-time insights, <br />
          predictive alerts, and optimized mobility <br />
          for fleets and individuals.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <Button size="lg" asChild className="font-play font-bold bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6 shadow-[0_0_20px_hsl(var(--primary)/0.3)] cursor-pointer">
            <a href="#contact">Get Started <ArrowRight size={18} /></a>
          </Button>
          <Button size="lg" variant="outline" asChild className="font-inter gap-2 border-border text-foreground hover:bg-secondary cursor-pointer">
            <a href="#contact"><Play size={16} /> Request Demo</a>
          </Button>
        </div>

        <div className="flex flex-row flex-nowrap items-center gap-x-8 mt-16">
          <div className="flex items-center gap-3">
            <div className="text-blue-400">
              <Car size={18} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-foreground font-play font-bold text-base whitespace-nowrap">10K+</span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">Vehicles Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-blue-400">
              <Activity size={18} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-foreground font-play font-bold text-base whitespace-nowrap">Real-Time</span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">Road Intelligence</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-blue-400">
              <Zap size={18} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-foreground font-play font-bold text-base whitespace-nowrap">AI-Driven</span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">Predictive Alerts</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
