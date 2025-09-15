import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../../images/fdeslogo-removebg-preview.png"
import logo1 from "../../images/fdes 1.png"




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
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group" >
            {/* <div className="w-15 h-12 feature-icon-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-2xl">F</span>
              <img style={{width:"120px",height:"90px"}} src={logo} />
              <img className="feature-icon-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{width:"70px",height:"70px"}} src={logo}/>
            </div> */}
              {/* <div className="w-15 h-12 feature-icon-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"> */}
              {/* <span className="text-white font-bold text-2xl">F</span> */}
              {/* <img style={{width:"120px",height:"90px"}} src={logo} /> */}
              <img style={{width:"13.5%"}} src={logo}/>
              <h5 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors" style={{fontSize:"16px"}}>Technologies Private Limited</h5>
              {/* <p className="text-xs text-muted-foreground font-medium" style={{color:"#FAA52E"}}>Technologies Private Limited</p> */}
            {/* </div> */}
            {/* <div>
              <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">EOT Crane Design Automation</h1>
              <p className="text-xs text-muted-foreground font-medium">EOT Crane Design Automation</p>
            </div> */}
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
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg" data-testid="button-contact">
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
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg" data-testid="mobile-button-contact">
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
