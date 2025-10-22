import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Lean & Pragmatic",
    description: "We believe in practical solutions over theoretical frameworks. Every recommendation is grounded in real-world applicability and measurable outcomes.",
  },
  {
    title: "Human-Centered Innovation",
    description: "Technology should amplify people, not replace them. We design solutions that enhance human capabilities and create better working environments.",
  },
  {
    title: "Ethical & Transparent",
    description: "We champion responsible implementation. Our approach prioritizes ethics, compliance, and transparency at every stage.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="px-6 md:px-12 pt-40 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none text-foreground mb-12">
              ABOUT
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              In this space you will find who we are
            </p>
          </div>
        </AnimatedSection>

        {/* Info Table Section */}
        <AnimatedSection className="px-6 md:px-12 py-16 md:py-24 border-t border-border" delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
                <div className="p-6 border-r border-border bg-muted/30">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Founded</div>
                </div>
                <div className="p-6 border-r border-border bg-muted/30">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Expertise</div>
                </div>
                <div className="p-6 border-r border-border bg-muted/30">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Approach</div>
                </div>
                <div className="p-6 bg-muted/30">
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">Remote</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="p-6 border-r border-border">
                  <div className="text-base md:text-lg text-foreground">2024</div>
                </div>
                <div className="p-6 border-r border-border">
                  <div className="text-base md:text-lg text-foreground">Transformation</div>
                </div>
                <div className="p-6 border-r border-border">
                  <div className="text-base md:text-lg text-foreground">Human-Centered</div>
                </div>
                <div className="p-6">
                  <div className="text-base md:text-lg text-foreground">Global</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="px-6 md:px-12 py-24 md:py-32 border-t border-border" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-2xl md:text-3xl text-foreground leading-relaxed font-light">
              <p>
                Business enablement and transformation partner leveraging intelligent systems, automation, 
                and emerging technology to amplify human potential.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="px-6 md:px-12 py-24 md:py-32 border-t border-border" delay={0.4}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-20">
              Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {values.map((value, index) => (
                <div key={index} className="bg-background p-8 md:p-10 hover:bg-muted/30 transition-colors duration-300">
                  <div className="text-sm text-muted-foreground font-mono mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="px-6 md:px-12 py-32 md:py-48 border-t border-border bg-primary text-primary-foreground" delay={0.5}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display mb-8 leading-none">
              Let's Build Together
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-80">
              Interested in partnering with us? We'd love to hear about your challenges and explore how we can help.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default About;
