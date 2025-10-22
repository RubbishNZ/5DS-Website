import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Brain, Users, Shield, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CornerPeel from "@/components/CornerPeel";
import { lineStagger, staggerContainer, fadeUp } from "@/lib/motion";

const valuePillars = [
  {
    icon: Brain,
    title: "Strategic Modernization",
    description: "We assess your systems, processes, and readiness—then design a pragmatic roadmap for evolution.",
  },
  {
    icon: Users,
    title: "Human-Centered Enablement",
    description: "Training and tools that amplify your team's potential, not replace it.",
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    description: "Ethical frameworks and governance that protect your people, data, and reputation.",
  },
  {
    icon: Zap,
    title: "Tangible Progress",
    description: "Intelligent solutions that deliver measurable value and competitive advantage.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We assess your current state, identify opportunities, and understand your unique challenges and goals.",
  },
  {
    number: "02",
    title: "Pilot",
    description: "We validate approaches with controlled experiments, proving value before committing to full-scale implementation.",
  },
  {
    number: "03",
    title: "Scale",
    description: "We roll out proven solutions with proper training, governance, and internal capability building for sustainable success.",
  },
];

const proofPoints = [
  "Organizations see 40% faster time-to-value through our readiness programs",
  "Teams report 90%+ confidence after completing our enablement training",
  "Automation projects consistently deliver ROI within 6-12 months",
  "Zero compliance incidents across our governance implementations",
];

const Index = () => {
  const reduce = useReducedMotion();
  
  const heroLines = [
    "We help businesses",
    "evolve.",
    "Systems, automation, and intelligence—",
    "designed to simplify progress."
  ];

  return (
    <div className="min-h-screen bg-white">
      <CornerPeel />
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-section md:pb-section">
        <div>
          {heroLines.map((line, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="show"
              variants={reduce ? { hidden: {opacity: 0}, show: {opacity: 1} } : lineStagger}
              transition={{ delay: i * 0.08 }}
              className="font-display text-5xl md:text-6xl leading-tight text-ink"
            >
              {line}
            </motion.h1>
          ))}
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg md:text-xl text-ink/70 max-w-2xl"
          >
            Aviora designs systems, automations, and intelligent tools that make change simple—enabling organizations to work smarter, faster, and more human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <Button asChild className="mt-8 h-12 px-7 rounded-xl bg-accent text-white hover:brightness-110">
              <Link to="/contact">Book a Discovery Meeting</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-sectionSm md:py-section">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
        >
          <motion.h2 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl font-display text-ink text-center mb-16"
          >
            How We Enable Change
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={pillar.title} 
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card className="rounded-2xl bg-white shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl text-ink">{pillar.title}</CardTitle>
                      <CardDescription className="text-ink/70">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Proof Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-sectionSm md:py-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-ink mb-6">
              Impact That Matters
            </h2>
            <p className="text-lg md:text-xl text-ink/70 mb-8">
              Our clients achieve measurable outcomes through practical, 
              human-centered transformation—powered by intelligent systems.
            </p>
            <Button asChild className="h-12 px-7 rounded-xl bg-accent text-white hover:brightness-110">
              <Link to="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="space-y-4"
          >
            {proofPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="rounded-2xl bg-white shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <p className="text-ink/70">{point}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-sectionSm md:py-section">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
        >
          <motion.h2 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl font-display text-ink text-center mb-16"
          >
            How We Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number} 
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="rounded-2xl bg-white shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200 h-full">
                  <CardHeader className="space-y-4">
                    <div className="text-sm text-ink/50 tracking-wide">{step.number}</div>
                    <CardTitle className="text-2xl text-ink">{step.title}</CardTitle>
                    <CardDescription className="text-ink/70 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-sectionSm md:py-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display text-ink mb-6">
            Let's Build What's Next
          </h2>
          <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-2xl mx-auto">
            Every great transformation starts with a conversation. Book a free discovery meeting to explore what's possible.
          </p>
          <Button asChild className="h-12 px-7 rounded-xl bg-accent text-white hover:brightness-110">
            <Link to="/contact">Book a Discovery Meeting</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
