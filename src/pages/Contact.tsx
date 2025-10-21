import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would send to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", organisation: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 animate-fade-in">
            Let's Talk
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-slide-up">
            Ready to transform your organisation with AI? Book a discovery meeting 
            or send us a message. We'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your AI enablement needs..."
                    required
                    rows={6}
                    className="bg-card"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Meeting Booking */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">
                  Book a Discovery Meeting
                </h2>
                <div className="bg-accent/5 border border-accent/20 p-8 rounded-lg mb-6">
                  <p className="text-lg mb-6 text-muted-foreground">
                    Schedule a 30-minute discovery call to discuss your AI enablement needs. 
                    No commitment required — just an open conversation about your challenges 
                    and opportunities.
                  </p>
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <a 
                      href="https://calendly.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2" />
                      Schedule on Calendly
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:hello@aviora.ai" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@aviora.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Remote-first, serving clients globally
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-card border border-border p-8 rounded-lg">
                <h3 className="text-xl font-display font-bold mb-4">
                  Quick Questions
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">How long is a typical engagement?</p>
                    <p className="text-muted-foreground">
                      3-6 months for most projects, with flexibility based on scope.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Do you work with small organisations?</p>
                    <p className="text-muted-foreground">
                      Yes! We tailor our approach to organisations of all sizes.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Is the discovery meeting free?</p>
                    <p className="text-muted-foreground">
                      Absolutely. No cost, no commitment — just a conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
