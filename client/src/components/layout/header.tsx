import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Benefits", href: "/benefits" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FDES Technologies</h1>
              <p className="text-xs text-muted-foreground">EOT Crane Design Automation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors ${
                  isActive(item.href) ? "text-primary font-medium" : ""
                }`}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-contact">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg text-foreground hover:text-primary transition-colors ${
                      isActive(item.href) ? "text-primary font-medium" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" data-testid="mobile-button-contact">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
