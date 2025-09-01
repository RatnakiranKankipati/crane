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
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Time & Cost Savings</h3>
              <p className="text-muted-foreground mb-4">Reduce design time from days to hours while minimizing engineering effort through intelligent automation.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground">ROI: 300-500% within first year</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Error Reduction</h3>
              <p className="text-muted-foreground mb-4">Standardized calculations eliminate manual errors and ensure 100% compliance with IS standards.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground">Zero calculation errors guaranteed</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Scalability</h3>
              <p className="text-muted-foreground mb-4">User-friendly interface enables quick adoption across multiple workstations and engineering teams.</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground">Unlimited workstation deployment</p>
              </div>
            </div>
          </div>

          {/* ROI Calculation */}
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-primary-foreground mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Calculate Your Return on Investment</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <p className="text-primary-foreground/90">Design Time Reduction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">60%</div>
                  <p className="text-primary-foreground/90">Faster Project Delivery</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-primary-foreground/90">Error Elimination</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Design Process?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start saving time and reducing costs with our proven automation solutions.
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
