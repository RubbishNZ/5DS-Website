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
  const heroLines = ["We help", "businesses", "evolve."];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <CornerPeel />
      
      {/* Hero Section */}
      <motion.section 
        className="flex-1 flex items-center justify-center px-6 md:px-12 pt-32 pb-24 md:pb-32"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-2 md:space-y-4">
            {heroLines.map((line, i) => (
              <motion.h1
                key={i}
                variants={lineStagger}
                className="font-display text-6xl md:text-8xl lg:text-9xl leading-none text-foreground tracking-tight"
              >
                {line}
              </motion.h1>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Aviora designs systems, automations, and intelligent tools that make change simple — 
            enabling organizations to work smarter, faster, and more human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <Link to="/contact">
              <Button size="lg" className="mt-12 h-14 px-10 text-base">
                Let's Build What's Next
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Pillars */}
      <motion.section 
        className="px-6 md:px-12 py-24 md:py-32 border-t border-border"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            className="mb-20 md:mb-32"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Four pillars of transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-background p-8 md:p-12 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="text-sm text-muted-foreground font-mono mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Proof Section */}
      <motion.section 
        className="px-6 md:px-12 py-24 md:py-32 border-t border-border"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            className="mb-20 md:mb-32 text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground mb-6">
              Selected Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real transformation, measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {proofPoints.map((proof, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-background p-8 md:p-10 hover:bg-muted/30 transition-colors duration-300 group"
              >
                <div className="text-sm text-muted-foreground font-mono mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl md:text-2xl font-display text-foreground mb-4 group-hover:text-accent transition-colors">
                  {proof.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {proof.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeUp}
            className="mt-20 text-center"
          >
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="h-14 px-10 text-base">
                View All Case Studies
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-6 md:px-12 py-32 md:py-48 border-t border-border bg-primary text-primary-foreground"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 md:mb-12 leading-none"
          >
            Ready to Evolve?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl mb-12 max-w-2xl opacity-80"
          >
            Every great transformation starts with a conversation. Let's discuss how we can help 
            your organization embrace change and build intelligent systems for tomorrow.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start the Conversation
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
