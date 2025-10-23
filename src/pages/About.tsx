import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Lean & Pragmatic",
    description: "Practical solutions. Real-world applicability. Measurable outcomes.",
  },
  {
    title: "Human-Centered Innovation",
    description: "Technology amplifies people. Better work environments.",
  },
  {
    title: "Ethical & Transparent",
    description: "Responsible implementation. Ethics and compliance first.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="px-6 md:px-12 pt-40 pb-24 md:pb-32 border-b-2 border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-display text-8xl md:text-[12rem] font-black mb-16 tracking-tighter uppercase">
              ABOUT
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed font-mono uppercase tracking-wide">
              We build systems that work. Strategy, automation, intelligence.
            </p>
          </div>
        </AnimatedSection>

        {/* Info Table Section */}
        <AnimatedSection className="px-6 md:px-12 py-16 md:py-24 border-b-2 border-border" delay={0.2}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-2 border-border">
              <div className="bg-background p-10 border-r-2 border-b-2 border-border md:border-b-0">
                <div className="text-xs text-muted-foreground font-mono mb-6 uppercase tracking-widest">[01] Founded</div>
                <div className="text-4xl font-display font-black uppercase">2024</div>
              </div>
              <div className="bg-background p-10 border-r-2 border-b-2 border-border md:border-b-0">
                <div className="text-xs text-muted-foreground font-mono mb-6 uppercase tracking-widest">[02] Location</div>
                <div className="text-4xl font-display font-black uppercase">Global</div>
              </div>
              <div className="bg-background p-10 border-r-2 border-b-2 border-border md:border-b-0">
                <div className="text-xs text-muted-foreground font-mono mb-6 uppercase tracking-widest">[03] Focus</div>
                <div className="text-4xl font-display font-black uppercase">Systems</div>
              </div>
              <div className="bg-background p-10 border-b-2 border-border md:border-b-0 md:border-r-0">
                <div className="text-xs text-muted-foreground font-mono mb-6 uppercase tracking-widest">[04] Method</div>
                <div className="text-4xl font-display font-black uppercase">Direct</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="px-6 md:px-12 py-24 md:py-32 border-b-2 border-border" delay={0.3}>
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-black mb-12 uppercase tracking-tighter">
                Mission
              </h2>
              <p className="text-2xl md:text-3xl text-foreground leading-tight font-light">
                Build systems that enable organizations to work better. No complexity. No waste.
              </p>
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-mono border-l-4 border-border pl-8">
              <p>
                Most organizations are stuck. Outdated processes. Manual workflows. No clear path forward.
              </p>
              <p>
                We design automation and intelligence infrastructure. We train teams. We execute projects that deliver measurable outcomes.
              </p>
              <p>
                No jargon. No fluff. Real work that moves the business forward.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="px-6 md:px-12 py-24 md:py-32 border-b-2 border-border" delay={0.4}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-20 uppercase tracking-tighter">
              Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-border">
              {[
                {
                  title: "Outcomes First",
                  description: "Measure success by results. Not effort."
                },
                {
                  title: "Direct Communication",
                  description: "Clear language. No corporate speak."
                },
                {
                  title: "Human Systems",
                  description: "Technology serves people. Not the reverse."
                },
                {
                  title: "Real Partnership",
                  description: "We work with you. Not for you."
                }
              ].map((value, index) => (
                <div key={index} className="bg-background p-12 border-r-2 border-b-2 border-border last:border-r-0 md:nth-child-even:border-r-0 hover:bg-foreground hover:text-background transition-all duration-200 group">
                  <div className="text-xs text-muted-foreground font-mono mb-8 uppercase tracking-widest group-hover:text-background">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-6 uppercase tracking-tight group-hover:text-background">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-mono group-hover:text-background/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="px-6 md:px-12 py-32 md:py-48 bg-primary text-primary-foreground" delay={0.5}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-display font-black mb-12 uppercase tracking-tighter">
              Start Here
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-mono uppercase tracking-wide max-w-2xl">
              Book a meeting. Discuss your needs. Get a plan.
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-16 px-12 text-lg font-mono uppercase tracking-wider border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                Contact
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
