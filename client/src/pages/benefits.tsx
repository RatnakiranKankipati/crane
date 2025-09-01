import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DollarSign, CheckCircle, TrendingUp, AlertCircle } from "lucide-react";

export default function Benefits() {
  return (
    <>
      <SEOHead 
        title="Benefits of EOT Crane Automation | Time & Cost Savings | FDES Technologies"
        description="Discover the benefits of EOT crane design automation: 90% time reduction, zero calculation errors, enhanced productivity, and significant cost savings."
        keywords="EOT crane automation benefits, design time reduction, cost savings automation, engineering efficiency, crane manufacturing benefits"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Why Choose FDES Automation?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience dramatic improvements in efficiency, accuracy, and scalability
            </p>
          </div>
          
          {/* Before/After Comparison */}
          <div className="bg-card rounded-2xl shadow-xl border p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Traditional vs Automated Process</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Before */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                    <AlertCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Traditional Method</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Manual calculations taking days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Error-prone design process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Repetitive drawing creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Inconsistent documentation</span>
                  </div>
                </div>
              </div>
              
              {/* After */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">FDES Automation</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Calculations completed in hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Zero calculation errors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Automated drawing generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Standardized documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Financial calculations and cost savings" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Time & Cost Savings</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Reduce design time from days to hours while minimizing engineering effort through intelligent automation.</p>
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 rounded-xl border border-accent/20">
                  <p className="text-sm font-semibold text-accent">Results vary based on project complexity</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Quality control and engineering precision" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Error Reduction</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Standardized calculations eliminate manual errors and ensure 100% compliance with IS standards.</p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/20">
                  <p className="text-sm font-semibold text-primary">Zero calculation errors guaranteed</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Scalable manufacturing operations" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Scalability</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">User-friendly interface enables quick adoption across multiple workstations and engineering teams.</p>
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-xl border border-secondary/20">
                  <p className="text-sm font-semibold text-secondary">Unlimited workstation deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solution Benefits */}
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-primary-foreground mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Custom Solutions for Maximum Impact</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Every automation solution is built specifically for your company's needs, ensuring optimal results and maximum return on investment.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-primary-foreground/90">Calculation Logic</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Tailored</div>
                  <p className="text-primary-foreground/90">Drawing Standards</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Complete</div>
                  <p className="text-primary-foreground/90">Software Ownership</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Design Process?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each solution is priced based on your specific requirements and complexity. Contact us for a detailed consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" data-testid="button-contact-benefits">
                Get Your Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
