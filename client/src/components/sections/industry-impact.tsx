import { Zap, TrendingUp, Shield } from "lucide-react";

export function IndustryImpactSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Transforming the Crane Industry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our automation solutions are revolutionizing EOT crane manufacturing workflows
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="EOT crane manufacturing facility with overhead cranes" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-facility"
            />
          </div>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground" data-testid="impact-title-1">Design Efficiency</h4>
                  <p className="text-muted-foreground">Optimize design workflows and reduce manual efforts significantly</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground" data-testid="impact-title-2">Enhanced Productivity</h4>
                  <p className="text-muted-foreground">Deliver projects faster with automated calculation and drawing generation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground" data-testid="impact-title-3">Quality Assurance</h4>
                  <p className="text-muted-foreground">Ensure consistent quality and compliance with industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
