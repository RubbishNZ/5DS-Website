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
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Cases" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b-2 border-border ${
        isScrolled 
          ? "bg-background shadow-lg" 
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-black text-foreground hover:text-accent transition-colors uppercase tracking-tighter">
          AVIORA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-foreground font-mono uppercase tracking-wider text-sm font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-accent transition-colors ${
                location.pathname === link.path ? "text-accent underline underline-offset-4 decoration-2" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex h-12 px-8 font-mono uppercase tracking-wider text-sm border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground">
          <Link to="/contact">Start</Link>
        </Button>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors" aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="border-l-2 border-border">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-mono uppercase tracking-wider hover:text-accent transition-colors ${
                    location.pathname === link.path ? "text-accent font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 h-12 px-8 font-mono uppercase tracking-wider border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground">
                <Link to="/contact">Start</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
