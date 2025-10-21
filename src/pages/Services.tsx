import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Readiness Assessments",
    problem: "Most organisations don't know where to start with AI or how ready they actually are.",
    approach: "We conduct comprehensive assessments of your current capabilities, infrastructure, data maturity, and workforce readiness.",
    outcomes: [
      "Clear understanding of your AI readiness level",
      "Prioritized roadmap for AI adoption",
      "Identification of quick wins and long-term opportunities",
      "Risk assessment and mitigation strategies",
    ],
  },
  {
    number: "02",
    title: "AI Training & Workforce Enablement",
    problem: "Teams lack the skills and confidence to work effectively with AI tools and systems.",
    approach: "We design and deliver tailored training programs that empower your workforce to leverage AI responsibly and effectively.",
    outcomes: [
      "Workforce confident in using AI tools",
      "Reduced resistance to AI adoption",
      "Increased productivity and efficiency",
      "Culture of continuous AI learning",
    ],
  },
  {
    number: "03",
    title: "AI Process Automation",
    problem: "Manual processes drain resources and slow down growth, but automation feels overwhelming.",
    approach: "We identify high-impact processes for automation and implement AI solutions that integrate seamlessly with your existing systems.",
    outcomes: [
      "Significant time and cost savings",
      "Reduced human error in repetitive tasks",
      "Freed-up resources for strategic work",
      "Scalable, maintainable automation systems",
    ],
  },
  {
    number: "04",
    title: "AI Strategy & Advisory",
    problem: "Without a clear AI strategy, initiatives remain fragmented and fail to deliver real value.",
    approach: "We work with leadership to develop comprehensive AI strategies aligned with business objectives.",
    outcomes: [
      "Clear AI vision and strategic direction",
      "Aligned stakeholders and leadership buy-in",
      "Measurable KPIs and success metrics",
      "Sustainable competitive advantage",
    ],
  },
  {
    number: "05",
    title: "Responsible AI & Governance",
    problem: "AI adoption without proper governance creates ethical, legal, and reputational risks.",
    approach: "We establish frameworks for responsible AI use, including ethics guidelines, compliance protocols, and governance structures.",
    outcomes: [
      "Robust AI governance framework",
      "Compliance with regulations and standards",
      "Ethical AI use across the organisation",
      "Protected brand reputation",
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
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 animate-fade-in">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-slide-up">
            We help organisations become AI-ready through strategic enablement, 
            comprehensive training, and responsible implementation. From assessment 
            to execution, we're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className="grid md:grid-cols-12 gap-8 items-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:col-span-2">
                <span className="text-6xl font-display text-muted-foreground/30">
                  {service.number}
                </span>
              </div>
              
              <div className="md:col-span-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  {service.title}
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">
                      The Problem
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {service.problem}
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">
                      Our Approach
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {service.approach}
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
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
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to Transform Your Organisation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a discovery meeting to explore how we can help you become AI-ready.
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

export default Services;
