import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Heart, Shield, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

const values = [
  {
    icon: Target,
    title: "Lean & Pragmatic",
    description: "We believe in practical solutions over theoretical frameworks. Every recommendation is grounded in real-world applicability and measurable outcomes.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "AI should empower people, not replace them. We design solutions that enhance human capabilities and create better working environments.",
  },
  {
    icon: Shield,
    title: "Ethical & Transparent",
    description: "We champion responsible AI practices. Our approach prioritizes ethics, compliance, and transparency at every stage of implementation.",
  },
  {
    icon: Sparkles,
    title: "Outcome-Focused",
    description: "We measure success by the tangible value we create. Our engagements are designed to deliver clear, demonstrable results.",
  },
];

const principles = [
  "Discovery before implementation — we invest time understanding your unique context",
  "Pilot before scale — we validate approaches with small, controlled experiments",
  "Enable, don't do for — we build internal capability rather than creating dependency",
  "Transparent communication — no jargon, no false promises, just clear guidance",
  "Continuous learning — we stay current and share knowledge freely",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedText className="text-6xl md:text-8xl font-display font-bold mb-8">
            About Aviora
          </AnimatedText>
          <AnimatedText delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            We exist to help organisations navigate the AI transformation with 
            confidence, clarity, and ethical integrity.
          </AnimatedText>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="bg-card border border-border p-12 rounded-lg shadow-subtle transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
              <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Most organisations know AI is important, but struggle with where to start, 
                how to build internal capability, and how to implement responsibly. We bridge 
                that gap.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Aviora provides strategic AI enablement — helping you assess readiness, train 
                your workforce, implement practical solutions, and establish governance frameworks 
                that ensure sustainable, ethical AI adoption.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
              Our Values
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.15}>
                  <div className="bg-card border border-border p-8 rounded-lg transition-all duration-400 hover:border-accent hover:shadow-lift hover:-translate-y-1 h-full group">
                    <Icon className="w-12 h-12 text-accent mb-4 transition-transform duration-400 group-hover:scale-110" />
                    <h3 className="text-2xl font-display font-bold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
              How We Work
            </h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-4 items-start group">
                  <span className="text-accent text-2xl font-display font-bold flex-shrink-0 transition-transform duration-400 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg text-muted-foreground pt-1">
                    {principle}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Discovery", description: "Understand your context, challenges, and opportunities through comprehensive assessment." },
              { title: "Pilot", description: "Validate approaches with controlled experiments that prove value before scaling." },
              { title: "Scale", description: "Roll out proven solutions with proper governance, training, and internal capability building." }
            ].map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <div className="bg-card border border-border p-8 rounded-lg text-center transition-all duration-400 hover:shadow-lift hover:-translate-y-1 hover:border-accent group h-full">
                  <div className="text-5xl font-display font-bold text-accent mb-2 transition-transform duration-400 group-hover:scale-110">
                    {step.title}
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to start your AI transformation journey? Book a discovery meeting 
              to explore how we can help.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Book a Discovery Meeting</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
