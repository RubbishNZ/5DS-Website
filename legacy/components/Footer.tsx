import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-display font-black text-foreground mb-6 uppercase tracking-tighter">
              AVIORA
            </h3>
            <p className="text-muted-foreground max-w-md font-mono leading-relaxed">
              Systems. Automation. Training. Real work that delivers results.
            </p>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-6 uppercase tracking-wider font-mono text-xs">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors font-mono uppercase text-sm tracking-wide">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors font-mono uppercase text-sm tracking-wide">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-accent transition-colors font-mono uppercase text-sm tracking-wide">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors font-mono uppercase text-sm tracking-wide">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-6 uppercase tracking-wider font-mono text-xs">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors font-mono uppercase text-sm tracking-wide">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t-2 border-border pt-8">
          <p className="text-center text-sm text-muted-foreground font-mono uppercase tracking-widest">
            © {currentYear} AVIORA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
