import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Aviora</h3>
            <p className="text-muted-foreground max-w-md">
              Empowering organisations to become AI-ready through strategic enablement, 
              comprehensive training, and responsible implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                Home
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                What We Do
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link 
                to="/case-studies" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                Proof
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                About
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
            <li>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                Get in Touch
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group inline-block"
              >
                Book a Meeting
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aviora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-all duration-300 relative group">
              Privacy Policy
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="hover:text-accent transition-all duration-300 relative group">
              Terms of Service
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
