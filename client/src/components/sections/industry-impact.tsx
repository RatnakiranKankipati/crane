import { Zap, TrendingUp, Shield } from "lucide-react";

export function IndustryImpactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">🏢 Industry Impact</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transforming the <span className="text-gradient">Crane Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how our automation solutions are revolutionizing EOT crane manufacturing workflows across the industry
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
            <div className="modern-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 feature-icon-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground" data-testid="impact-title-1">Design Efficiency</h4>
                  <p className="text-muted-foreground leading-relaxed">Optimize design workflows and reduce manual efforts significantly</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground" data-testid="impact-title-2">Enhanced Productivity</h4>
                  <p className="text-muted-foreground leading-relaxed">Deliver projects faster with automated calculation and drawing generation</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground" data-testid="impact-title-3">Quality Assurance</h4>
                  <p className="text-muted-foreground leading-relaxed">Ensure consistent quality and compliance with industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
