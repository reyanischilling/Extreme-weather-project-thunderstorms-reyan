import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

interface NavigationProps {
  sections: { id: string; label: string }[];
  onNavigate: (id: string) => void;
}

export default function Navigation({ sections, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-chart-3" />
            <span className={`font-display font-bold text-lg ${isScrolled ? "text-foreground" : "text-white"}`}>
              Extreme Weather
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(section.id)}
                data-testid={`button-nav-${section.id}`}
                className={isScrolled ? "text-foreground" : "text-white hover:text-white"}
              >
                {section.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  onNavigate(section.id);
                  setMobileMenuOpen(false);
                }}
                data-testid={`button-mobile-nav-${section.id}`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
