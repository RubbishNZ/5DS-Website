import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Shield, Zap } from "lucide-react";

const valuePillars = [
  {
    icon: Brain,
    title: "AI Readiness",
    description: "Comprehensive assessments that reveal where you are and map the path forward.",
  },
  {
    icon: Users,
    title: "Workforce Enablement",
    description: "Training programs that build confidence and capability across your organisation.",
  },
  {
    icon: Shield,
    title: "Responsible Implementation",
    description: "Governance frameworks ensuring ethical, compliant, and sustainable AI adoption.",
  },
  {
    icon: Zap,
    title: "Measurable Outcomes",
    description: "Practical solutions delivering tangible value and competitive advantage.",
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
  "AI readiness scores improved by 5+ points on average",
  "Training programs with 90%+ participant confidence ratings",
  "Automation projects delivering ROI within 6-12 months",
  "Zero compliance incidents across governance implementations",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight text-balance">
              Transform Your Organisation with{" "}
              <span className="text-accent">AI Enablement</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We help organisations become AI-ready through strategic guidance, 
              comprehensive training, and responsible implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Book a Discovery Meeting <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Why Aviora?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="text-center space-y-4 p-6 hover:bg-accent/5 rounded-lg transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our clients achieve measurable outcomes through our practical, 
                human-centered approach to AI enablement.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/case-studies">
                  View Case Studies <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {proofPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border p-6 rounded-lg flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            How We Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card border border-border p-8 rounded-lg hover:border-accent transition-colors h-full">
                  <span className="text-5xl font-display text-accent mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery meeting. No commitment required — 
            just an open conversation about your AI enablement journey.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Book a Discovery Meeting</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
