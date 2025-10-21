import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display text-ink mb-4">
              Aviora.
            </h3>
            <p className="text-ink/70 max-w-md">
              Empowering organisations to become AI-ready through strategic enablement, 
              comprehensive training, and responsible implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ink mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ink/70 hover:text-accent transition-colors link-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ink/70 hover:text-accent transition-colors link-underline">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-ink/70 hover:text-accent transition-colors link-underline">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink/70 hover:text-accent transition-colors link-underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ink mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-ink/70 hover:text-accent transition-colors link-underline">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-ink/10 pt-8">
          <p className="text-center text-sm text-ink/70">
            © {currentYear} Aviora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
