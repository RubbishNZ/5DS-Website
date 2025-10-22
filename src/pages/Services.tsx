import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import CountUp from "@/components/CountUp";

const services = [
  {
    number: 1,
    title: "Transformation Readiness",
    problem: "Most organizations don't know where to start or how ready they are for modern systems and intelligent automation.",
    approach: "We conduct comprehensive assessments of your current capabilities, infrastructure, data maturity, and workforce readiness—mapping a clear path forward.",
    outcomes: [
      "Clear understanding of your modernization baseline",
      "Prioritized roadmap for transformation",
      "Identification of quick wins and strategic opportunities",
      "Risk assessment and mitigation strategies",
    ],
  },
  {
    number: 2,
    title: "Workforce Enablement",
    problem: "Teams lack the skills and confidence to work effectively with emerging tools and intelligent systems.",
    approach: "We design and deliver tailored enablement programs that empower your workforce to leverage modern technology responsibly and effectively.",
    outcomes: [
      "Workforce confident in using next-generation tools",
      "Reduced resistance to change",
      "Increased productivity and efficiency",
      "Culture of continuous learning and adaptation",
    ],
  },
  {
    number: 3,
    title: "Intelligent Automation",
    problem: "Manual processes drain resources and slow growth, but automation feels overwhelming or disconnected from reality.",
    approach: "We identify high-impact processes for automation and implement intelligent solutions that integrate seamlessly with your existing systems.",
    outcomes: [
      "Significant time and cost savings",
      "Reduced human error in repetitive tasks",
      "Freed-up resources for strategic, creative work",
      "Scalable, maintainable automation systems",
    ],
  },
  {
    number: 4,
    title: "Strategic Modernization",
    problem: "Without a clear modernization strategy, initiatives remain fragmented and fail to deliver real value.",
    approach: "We work with leadership to develop comprehensive transformation strategies aligned with business objectives—leveraging automation, intelligence, and emerging technology as enablers.",
    outcomes: [
      "Clear vision and strategic direction",
      "Aligned stakeholders and leadership buy-in",
      "Measurable KPIs and success metrics",
      "Sustainable competitive advantage",
    ],
  },
  {
    number: 5,
    title: "Responsible Innovation & Governance",
    problem: "Technology adoption without proper governance creates ethical, legal, and reputational risks.",
    approach: "We establish frameworks for responsible innovation—including ethics guidelines, compliance protocols, and governance structures that protect your people and reputation.",
    outcomes: [
      "Robust governance framework",
      "Compliance with regulations and standards",
      "Ethical technology use across the organization",
      "Protected brand reputation and trust",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedText className="text-6xl md:text-8xl font-display font-bold mb-8">
            What We Do
          </AnimatedText>
          <AnimatedText delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            We help organizations modernize through strategic enablement, 
            workforce training, and intelligent automation. From assessment 
            to execution, we're with you every step of the way.
          </AnimatedText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {services.map((service, index) => (
            <AnimatedSection key={service.number} delay={index * 0.1}>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <CountUp
                    value={service.number}
                    className="text-6xl font-display text-muted-foreground/30"
                  />
                </div>
                
                <div className="md:col-span-10 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-display font-bold">
                    {service.title}
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-lg border border-border transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">
                        The Problem
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {service.problem}
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg border border-border transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">
                        Our Approach
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {service.approach}
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg border border-border transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                        Tangible Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button asChild variant="hero" size="lg" className="mt-6">
                    <Link to="/contact">
                      Discuss This Service <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Evolve Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a discovery meeting to explore how we can help you modernize and thrive.
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

export default Services;
