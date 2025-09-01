import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Start Your Automation Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join the leading EOT crane manufacturers who have transformed their design processes with FDES automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg"
                data-testid="button-proposal"
              >
                Request Custom Proposal
              </Button>
            </Link>
            <a href="mailto:sales@fdestech.com">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
                data-testid="button-email"
              >
                Email Us Directly
              </Button>
            </a>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-primary-foreground/90">
            <div>
              <h4 className="font-bold mb-2" data-testid="cta-feature-1">Quick Response</h4>
              <p className="text-sm">Get detailed proposal within 24 hours</p>
            </div>
            <div>
              <h4 className="font-bold mb-2" data-testid="cta-feature-2">Custom Solutions</h4>
              <p className="text-sm">Tailored to your specific requirements</p>
            </div>
            <div>
              <h4 className="font-bold mb-2" data-testid="cta-feature-3">Proven Results</h4>
              <p className="text-sm">90% time reduction guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
