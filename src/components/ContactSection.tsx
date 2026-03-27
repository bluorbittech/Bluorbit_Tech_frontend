import { motion } from "framer-motion";
import { Mail, MessageSquare, Building2, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile } from "@marsidev/react-turnstile";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@bluorbittech.com" },
  { icon: Phone, label: "Contact Us", value: "+1 (863) 358-7493" },
  { icon: MapPin, label: "Visit Us", value: "845 S Windsor Blvd, Los Angeles, CA 90005, USA" },
  { icon: Building2, label: "Enterprise Sales", value: "enterprise@bluorbittech.com" },
  { icon: MessageSquare, label: "Support", value: "support@bluorbittech.com" },
];

const ContactSection = () => (
  <section id="contact" className="section-light section-padding relative">
    <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in <span className="gradient-text-light">Touch</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Whether you're a fleet operator, enterprise team, or individual driver — we're here to connect and support your needs.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {contactInfo.map((item) => (
            <div key={item.label} className="light-card p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                <p className="text-gray-900 font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="light-card p-7 flex flex-col gap-4"
          action="https://formspree.io/f/mnjoqrla"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-500 text-xs">Full Name</label>
              <Input 
                name="full-name" 
                placeholder="Jane Smith" 
                className="bg-gray-50 border-gray-200" 
                required 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-500 text-xs">Email</label>
              <Input 
                name="email" 
                type="email" 
                placeholder="jane@company.com" 
                className="bg-gray-50 border-gray-200" 
                required 
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-500 text-xs">Organization</label>
            <Input 
              name="organization" 
              placeholder="Company or fleet name" 
              className="bg-gray-50 border-gray-200" 
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-500 text-xs">Message</label>
            <Textarea
              name="message"
              placeholder="Tell us about your mobility needs..."
              rows={4}
              className="bg-gray-50 border-gray-200 resize-none"
              required
            />
          </div>
          
          <div className="flex justify-center my-2">
            <Turnstile 
              siteKey="0x4AAAAAACwjdRsCgaf1fi6D" 
              options={{
                theme: 'light',
              }}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            Send Message <Send size={16} />
          </Button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
