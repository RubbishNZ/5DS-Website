import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import CountUp from "@/components/CountUp";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CaseStudy {
  id: string;
  number: number;
  industry: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  visual: string;
}

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('number', { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load case studies',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b-2 border-border">
        <div className="container mx-auto max-w-5xl">
          <AnimatedText className="text-7xl md:text-9xl font-display font-black mb-12 uppercase tracking-tighter">
            Cases
          </AnimatedText>
          <AnimatedText delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-mono uppercase tracking-wide">
            Real projects. Real outcomes. Anonymized for client privacy.
          </AnimatedText>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No case studies available yet.</p>
            </div>
          ) : (
            <div className="space-y-32">
              {caseStudies.map((study, index) => (
            <AnimatedSection key={study.number} delay={index * 0.1}>
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-2">
                  <CountUp
                    value={study.number}
                    className="text-7xl font-display text-muted-foreground/20"
                  />
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
                    <div className="bg-card border border-border p-8 rounded-lg transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                        Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-lg transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
                        Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 p-8 rounded-lg transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
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
            </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-primary text-primary-foreground border-t-2 border-border">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter">
              Start
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-mono uppercase tracking-wide max-w-2xl">
              Discuss your project. Get results.
            </p>
            <Button asChild variant="hero" size="lg" className="h-16 px-12 text-lg font-mono uppercase tracking-wider border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Contact <ArrowRight className="ml-3" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
