import { motion } from "framer-motion";
import { Orbit, Activity, Brain, ShieldCheck, Car, User, Radio, Gauge, Bell, Route, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const vehicleMetrics = [
  { label: "Engine Status", value: "Optimal", color: "text-green-400" },
  { label: "Speed", value: "72 km/h", color: "text-foreground" },
  { label: "Fuel Level", value: "68%", color: "text-foreground" },
  { label: "GPS Signal", value: "Strong", color: "text-green-400" },
];

const driverMetrics = [
  { label: "Behavior Score", value: "94 / 100", color: "text-green-400" },
  { label: "Fatigue Level", value: "Low", color: "text-green-400" },
  { label: "Harsh Braking", value: "0 events", color: "text-foreground" },
  { label: "Trip Duration", value: "1h 24m", color: "text-foreground" },
];

const aiNodes = [
  { icon: Car, label: "Vehicle Telemetry" },
  { icon: User, label: "Driver Behavior" },
  { icon: Radio, label: "Road Sensors" },
];

const monitoringAlerts = [
  { icon: ShieldCheck, label: "No active risk zones detected", type: "ok" },
  { icon: Route, label: "Optimal route active — ETA 18 min", type: "ok" },
  { icon: Bell, label: "Scheduled maintenance due in 320 km", type: "warn" },
  { icon: Gauge, label: "Driver performance: Excellent", type: "ok" },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <div className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 text-foreground font-bold text-xl">
          <Orbit className="text-primary" size={28} />
          <span>Blu<span className="text-primary">Orbit</span></span>
        </Link>
        <span className="text-muted-foreground text-sm hidden md:block">AI Mobility Command Center</span>
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back to Site
          </Button>
        </Link>
      </div>
    </div>

    <div className="container mx-auto pt-28 pb-16 px-4 flex flex-col gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Live Session</p>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Mobility Intelligence Dashboard</h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Widget A — Vehicle & Driver Data Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card hover-glow p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Activity size={20} />
            </div>
            <div>
              <h2 className="text-foreground font-semibold text-sm">Widget A</h2>
              <p className="text-muted-foreground text-xs">Vehicle & Driver Data Input</p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Live
            </span>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Vehicle Telemetry</p>
            <div className="grid grid-cols-2 gap-3">
              {vehicleMetrics.map((m) => (
                <div key={m.label} className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs mb-1">{m.label}</p>
                  <p className={`font-semibold text-sm ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Driver Telemetry</p>
            <div className="grid grid-cols-2 gap-3">
              {driverMetrics.map((m) => (
                <div key={m.label} className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs mb-1">{m.label}</p>
                  <p className={`font-semibold text-sm ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Widget B — AI Engine Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card glow-border-highlight animate-pulse-glow p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-primary">
              <Brain size={20} />
            </div>
            <div>
              <h2 className="text-foreground font-semibold text-sm">Widget B</h2>
              <p className="text-muted-foreground text-xs">Powered by BluOrbit AI Mobility Engine</p>
            </div>
          </div>

          {/* Data flow visualizer */}
          <div className="flex flex-col items-center gap-4 flex-1 justify-center py-4">
            <div className="flex gap-3 justify-center">
              {aiNodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <node.icon size={20} />
                  </div>
                  <p className="text-muted-foreground text-xs text-center leading-tight w-16">{node.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Animated flow lines */}
            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </div>

            <div className="w-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-xl p-5 flex flex-col items-center gap-2">
              <Brain size={28} className="text-primary" />
              <p className="text-foreground font-bold text-sm">AI Mobility Engine</p>
              <p className="text-muted-foreground text-xs text-center">Processing traffic flows · Predicting risks · Generating insights</p>
              <motion.div
                animate={{ width: ["20%", "100%", "20%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 w-full text-xs text-center">
              <div className="bg-secondary/40 rounded-lg p-2 text-muted-foreground">Risk Score: <span className="text-green-400 font-semibold">Low</span></div>
              <div className="bg-secondary/40 rounded-lg p-2 text-muted-foreground">Confidence: <span className="text-primary font-semibold">97%</span></div>
            </div>
          </div>
        </motion.div>

        {/* Widget C — Mobility & Safety Monitoring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card hover-glow p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-foreground font-semibold text-sm">Widget C</h2>
              <p className="text-muted-foreground text-xs">Mobility & Safety Monitoring</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {monitoringAlerts.map((alert, i) => (
              <motion.div
                key={alert.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3 bg-secondary/40 rounded-lg p-3"
              >
                <alert.icon
                  size={16}
                  className={`flex-shrink-0 mt-0.5 ${alert.type === "warn" ? "text-yellow-400" : "text-green-400"}`}
                />
                <p className="text-foreground/80 text-sm leading-snug">{alert.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Real-Time Mobility Status</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Traffic Conditions", value: "Clear" },
                { label: "Route Status", value: "Optimized" },
                { label: "Fleet Vehicles", value: "12 Active" },
                { label: "Alerts Today", value: "3 Minor" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-muted-foreground text-xs mb-1">{s.label}</p>
                  <p className="text-foreground font-semibold text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Dashboard;
