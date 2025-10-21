import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    industry: "Financial Services",
    context: "Large regional bank with 2,000+ employees",
    challenge: "Legacy systems, fragmented data, workforce resistant to change, no AI strategy.",
    solution: "6-month comprehensive AI readiness program including assessment, strategy development, training workshops, and pilot automation project.",
    result: "AI readiness score improved from 2.1 to 7.8/10. Successfully automated loan processing, reducing approval time from 5 days to 4 hours. 85% of staff completed AI training with 92% confidence rating.",
    visual: "Assessment report → Training program → Automated workflow diagram",
  },
  {
    number: "02",
    industry: "Healthcare Provider",
    context: "Regional hospital network serving 500,000 patients annually",
    challenge: "Manual patient scheduling, overwhelmed administrative staff, compliance concerns around AI use.",
    solution: "Implemented AI-powered scheduling system with responsible AI governance framework. Conducted compliance review and staff training.",
    result: "Administrative workload reduced by 40%. Patient wait times decreased by 30%. Zero compliance incidents. Staff satisfaction increased 65%.",
    visual: "Before/after workflow comparison → Governance framework → Impact metrics",
  },
  {
    number: "03",
    industry: "Manufacturing",
    context: "Mid-sized manufacturing company, 500 employees, 3 production facilities",
    challenge: "Quality control inconsistencies, high defect rates, limited technical expertise for AI implementation.",
    solution: "Deployed computer vision system for real-time quality inspection. Trained in-house team for ongoing maintenance and optimization.",
    result: "Defect rates dropped from 8% to 0.9%. ROI achieved in 7 months. Team now manages system independently and exploring additional AI use cases.",
    visual: "Quality control workflow → Computer vision system → Before/after defect rate graph",
  },
  {
    number: "04",
    industry: "Professional Services",
    context: "Mid-sized consulting firm, 150+ consultants, document-heavy workflows",
    challenge: "Consultants spending 60% of time on document review and research rather than client-facing work.",
    solution: "Implemented AI document analysis and research assistant. Conducted training and change management program.",
    result: "Research time reduced by 70%. Consultants reallocated 40% more time to client engagement. Client satisfaction scores increased 28%.",
    visual: "Time allocation analysis → AI assistant interface → Productivity gains",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 animate-fade-in">
            Proof
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-slide-up">
            Real outcomes from real organisations. These anonymised case patterns 
            demonstrate how we've helped clients transform their operations through 
            strategic AI enablement.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          {caseStudies.map((study, index) => (
            <div 
              key={study.number}
              className="grid md:grid-cols-12 gap-12"
            >
              <div className="md:col-span-2">
                <span className="text-7xl font-display text-muted-foreground/20">
                  {study.number}
                </span>
              </div>
              
              <div className="md:col-span-10 space-y-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {study.context}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border p-8 rounded-lg">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                      Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="bg-card border border-border p-8 rounded-lg">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                      Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 p-8 rounded-lg">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                    Results
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {study.result}
                  </p>
                </div>

                <div className="bg-secondary/50 border border-border p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold">Deliverables: </span>
                    {study.visual}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your organisation achieve similar results.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Book a Discovery Meeting <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
