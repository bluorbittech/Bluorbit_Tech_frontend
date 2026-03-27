import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-blue-500/30 font-inter">
      <BackgroundOrbs />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="font-play text-4xl md:text-5xl font-bold text-white mb-4">
              Terms and <span className="gradient-text">Conditions</span>
            </h1>
            <p className="font-play text-white/40 text-sm">Last updated: March 26, 2026</p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-8 text-white/70 leading-relaxed border-white/5 text-sm md:text-base text-balance">
            <section className="space-y-4">
              <p>Please read these terms and conditions carefully before using Our Service.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                Interpretation and Definitions
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90 underline decoration-blue-500/30 underline-offset-4">Interpretation</h3>
                <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h3 className="text-xl font-semibold text-white/90 underline decoration-blue-500/30 underline-offset-4">Definitions</h3>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul className="list-disc pl-6 space-y-4 marker:text-blue-500">
                  <li><p><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</p></li>
                  <li><p><strong className="text-white">Country</strong> refers to: California, United States.</p></li>
                  <li><p><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to BluOrbit Tech, 845 S Windsor Blvd, Los Angeles, CA 90005 United States.</p></li>
                  <li><p><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p></li>
                  <li><p><strong className="text-white">Service</strong> refers to the Website.</p></li>
                  <li><p><strong className="text-white">Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p></li>
                  <li><p><strong className="text-white">Website</strong> refers to BluOrbitTech, accessible from BluOrbitTech.com.</p></li>
                  <li><p><strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                Acknowledgment
              </h2>
              <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                Limitation of Liability
              </h2>
              <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
              <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                Governing Law
              </h2>
              <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                Contact Us
              </h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                <li>By email: <a href="mailto:hello@bluorbittech.com" className="text-blue-400 hover:text-blue-300 transition-colors">hello@bluorbittech.com</a></li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
