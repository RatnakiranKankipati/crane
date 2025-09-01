import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Process() {
  return (
    <>
      <SEOHead 
        title="Development Process | EOT Crane Automation | FDES Technologies"
        description="Learn about our proven development process for EOT crane design automation: requirement gathering, custom development, testing, and deployment."
        keywords="EOT crane development process, automation software development, custom engineering software, project timeline, software deployment"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Development Process</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology to deliver customized automation solutions tailored to your specific requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Manufacturing facility with engineers collaborating" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  data-testid="img-manufacturing"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              </div>
              
              {/* Floating process badges */}
              <div className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Live Process</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3-4</div>
                  <div className="text-xs text-muted-foreground">Months Timeline</div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Requirement Gathering</h4>
                    <p className="text-muted-foreground">We analyze your calculation reports, drawing standards, and specific company requirements to understand your workflow.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Custom Development</h4>
                    <p className="text-muted-foreground">Our team develops tailored logic and templates that match your exact design standards and calculation methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Testing & Validation</h4>
                    <p className="text-muted-foreground">Comprehensive testing ensures accuracy and reliability before final deployment to your engineering teams.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Deployment & Support</h4>
                    <p className="text-muted-foreground">Full software ownership with 3-month warranty and compatibility with future CAD software versions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline Visualization */}
          <div className="bg-card rounded-2xl shadow-xl border p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Project Timeline</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">2D Software Development</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Development Duration</span>
                    <span className="text-primary font-bold">~3 months</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Investment Range</span>
                    <span className="text-primary font-bold">Rs. 12-15 lakhs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Platform</span>
                    <span className="text-primary font-bold">AutoCAD Integration</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">3D Software Development</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Development Duration</span>
                    <span className="text-primary font-bold">~3-4 months</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Investment Range</span>
                    <span className="text-primary font-bold">Rs. 20-25 lakhs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Platform</span>
                    <span className="text-primary font-bold">Inventor/Solidworks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Process */}
          <div className="bg-muted p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">How We Customize for You</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Analysis</h3>
                <p className="text-muted-foreground">Deep dive into your calculation reports, drawings, and standards</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Development</h3>
                <p className="text-muted-foreground">Build software with tailored logic and templates</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Deployment</h3>
                <p className="text-muted-foreground">Testing, validation, and final deployment</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary p-12 rounded-2xl text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized automation solution for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg" data-testid="button-contact-process">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
