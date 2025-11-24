import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CornerPeel from "@/components/CornerPeel";
import { lineStagger, staggerContainer, fadeUp } from "@/lib/motion";

const pillars = [
  {
    title: "Strategic Modernization",
    description: "We assess your systems, processes, and readiness—then design a pragmatic roadmap for evolution.",
  },
  {
    title: "Human-Centered Enablement",
    description: "Training and tools that amplify your team's potential, not replace it.",
  },
  {
    title: "Responsible Innovation",
    description: "Ethical frameworks and governance that protect your people, data, and reputation.",
  },
  {
    title: "Tangible Progress",
    description: "Intelligent solutions that deliver measurable value and competitive advantage.",
  },
];

const proofPoints = [
  {
    title: "40% Faster Time-to-Value",
    description: "Organizations accelerate through our readiness programs",
  },
  {
    title: "90%+ Confidence",
    description: "Teams report after completing our enablement training",
  },
  {
    title: "6-12 Month ROI",
    description: "Automation projects consistently deliver within first year",
  },
];

const Index = () => {
  const heroLines = ["Build", "systems.", "Make", "progress."];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <CornerPeel />
      
      {/* Hero Section */}
      <motion.section 
        className="flex-1 flex items-center justify-center px-6 md:px-12 pt-32 pb-24 md:pb-32 border-b-2 border-border"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-0 md:space-y-2">
            {heroLines.map((line, i) => (
              <motion.h1
                key={i}
                variants={lineStagger}
                className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] text-foreground tracking-tighter font-black uppercase"
              >
                {line}
              </motion.h1>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-lg md:text-xl text-muted-foreground max-w-2xl font-mono uppercase tracking-wide"
          >
            We design automations and intelligent systems. No fluff. Real work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <Link to="/contact">
              <Button size="lg" className="mt-16 h-16 px-12 text-lg font-mono uppercase tracking-wider border-2 border-foreground">
                Start
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Pillars */}
      <motion.section 
        className="px-6 md:px-12 py-24 md:py-32 border-t-2 border-b-2 border-border"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            className="mb-16 md:mb-24 border-b-2 border-border pb-8"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground font-black uppercase tracking-tighter">
              Work
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-border">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-background p-10 md:p-14 border-r-2 border-b-2 border-border last:border-r-0 md:nth-child-even:border-r-0 hover:bg-foreground hover:text-background transition-all duration-200 group"
              >
                <div className="text-xs text-muted-foreground font-mono mb-8 uppercase tracking-widest group-hover:text-background">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
                <h3 className="text-2xl md:text-4xl font-display text-foreground mb-6 font-black uppercase tracking-tight group-hover:text-background">
                  {pillar.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-mono group-hover:text-background/80">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Proof Section */}
      <motion.section 
        className="px-6 md:px-12 py-24 md:py-32 border-t-2 border-b-2 border-border"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            className="mb-16 md:mb-24 border-b-2 border-border pb-8"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground font-black uppercase tracking-tighter">
              Results
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border">
            {proofPoints.map((proof, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-background p-10 md:p-12 border-r-2 border-border last:border-r-0 hover:bg-foreground hover:text-background transition-all duration-200 group"
              >
                <div className="text-xs text-muted-foreground font-mono mb-8 uppercase tracking-widest group-hover:text-background">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
                <h3 className="text-3xl md:text-4xl font-display text-foreground mb-6 font-black group-hover:text-background leading-tight">
                  {proof.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-mono group-hover:text-background/80">
                  {proof.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeUp}
            className="mt-16 text-center"
          >
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg font-mono uppercase tracking-wider border-2 border-foreground">
                Case Studies
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-6 md:px-12 py-32 md:py-48 border-t-2 border-border bg-primary text-primary-foreground"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-display mb-12 md:mb-16 leading-none font-black uppercase tracking-tighter"
          >
            Talk.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-2xl mb-16 max-w-2xl font-mono uppercase tracking-wide"
          >
            Book a meeting. Discuss your project. Get started.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-mono uppercase tracking-wider bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
