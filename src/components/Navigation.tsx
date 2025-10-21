import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "What We Do" },
    { path: "/case-studies", label: "Proof" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-soft" 
          : "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl text-ink hover:text-accent transition-colors">
          Aviora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-ink/70">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-ink transition-colors ${
                location.pathname === link.path ? "text-ink font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex bg-accent text-white hover:brightness-110">
          <Link to="/contact">Book a Discovery</Link>
        </Button>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2" aria-label="Toggle menu">
              <Menu size={24} className="text-ink" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg hover:text-accent transition-colors ${
                    location.pathname === link.path ? "text-accent font-medium" : "text-ink/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-accent text-white">
                <Link to="/contact">Book a Discovery</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
