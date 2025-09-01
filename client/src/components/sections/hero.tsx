import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-accent">EOT Crane Design</span> Process
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Reduce design time from days to hours with our custom automation software. 
              Streamline calculations, 2D/3D modeling, and drawing generation for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
                  data-testid="button-quote"
                >
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Industrial automation software interface" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="stats-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground" data-testid="text-time-reduction">90%</p>
                  <p className="text-sm text-muted-foreground">Time Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
