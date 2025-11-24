import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Clock, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", organisation: "", message: "" });
    setIsSubmitting(false);
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
      <section className="pt-32 pb-20 px-6 border-b-2 border-border">
        <div className="container mx-auto max-w-5xl">
          <AnimatedText className="text-7xl md:text-9xl font-display font-black mb-12 uppercase tracking-tighter">
            Contact
          </AnimatedText>
          <AnimatedText delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-mono uppercase tracking-wide">
            Book a meeting. Send a message. We respond in 24 hours.
          </AnimatedText>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-spacing px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card transition-all duration-300 focus:border-accent focus:shadow-lift"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    className="bg-card transition-all duration-300 focus:border-accent focus:shadow-lift"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-card transition-all duration-300 focus:border-accent focus:shadow-lift"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    required
                    rows={6}
                    className="bg-card transition-all duration-300 focus:border-accent focus:shadow-lift"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </AnimatedSection>

            {/* Contact Info & Meeting Booking */}
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-display font-bold mb-8">
                  Book a Discovery Meeting
                </h2>
                <div className="bg-accent/5 border border-accent/20 p-8 rounded-lg mb-6 transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                  <p className="text-lg mb-6 text-muted-foreground">
                    Book a 30-minute call. Discuss your needs. No obligation.
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
                  {[
                    { icon: Clock, title: "Response Time", value: "Within 24 hours" },
                    { icon: Mail, title: "Email", value: "hello@aviora.ai", link: "mailto:hello@aviora.ai" },
                    { icon: MapPin, title: "Location", value: "Remote-first, serving clients globally" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1 transition-transform duration-400 group-hover:scale-110" />
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {item.link ? (
                            <a 
                              href={item.link}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection delay={0.4}>
                <div className="bg-card border border-border p-8 rounded-lg transition-all duration-400 hover:shadow-lift hover:-translate-y-1">
                  <h3 className="text-xl font-display font-bold mb-4">
                    Quick Questions
                  </h3>
                  <div className="space-y-4 text-sm">
                    {[
                      { q: "How long is a typical engagement?", a: "3-6 months for most projects, with flexibility based on scope." },
                      { q: "Do you work with small organisations?", a: "Yes! We tailor our approach to organisations of all sizes." },
                      { q: "Is the discovery meeting free?", a: "Absolutely. No cost, no commitment — just a conversation." }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <p className="font-semibold mb-1">{faq.q}</p>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
