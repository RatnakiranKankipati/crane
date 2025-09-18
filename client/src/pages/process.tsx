import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import process from "../images/softwareprcess.png"


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
                  src={process} 
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
                  {/* <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div> */}
                  <div className="bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{width:"50px",height:"35px",borderRadius:"50%"}}>1

                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Requirement Gathering</h4>
                    <p className="text-muted-foreground">We analyze your calculation reports, drawing standards, and specific company requirements to understand your workflow.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  {/* <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div> */}
                  <div className="bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{width:"45px",height:"35px",borderRadius:"50%"}}>2

                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Custom Development</h4>
                    <p className="text-muted-foreground">Our team develops tailored logic and templates that match your exact design standards and calculation methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  {/* <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div> */}
                  <div className="bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{width:"45px",height:"35px",borderRadius:"50%"}}>3

                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Testing & Validation</h4>
                    <p className="text-muted-foreground">Comprehensive testing ensures accuracy and reliability before final deployment to your engineering teams.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  {/* <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div> */}
                  <div className="bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{width:"45px",height:"35px",borderRadius:"50%"}}>4

                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Deployment & Support</h4>
                    <p className="text-muted-foreground">Full software ownership with 3-month warranty and compatibility with future CAD software versions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Custom Solution Overview */}
          <div className="bg-card rounded-2xl shadow-xl border p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Completely Customized Solutions</h2>
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Every project is unique, and so is our solution. We build automation software tailored specifically to your company's calculation methods, drawing standards, and workflow requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">2D AutoCAD Automation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Development Duration</span>
                    <span className="text-primary font-bold">3-4 months</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Investment</span>
                    <span className="text-accent font-bold">Custom Quote</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Platform</span>
                    <span className="text-primary font-bold">AutoCAD Integration</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">3D Modeling Automation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Development Duration</span>
                    <span className="text-primary font-bold">4-5 months</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Investment</span>
                    <span className="text-accent font-bold">Custom Quote</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-semibold text-foreground">Platform</span>
                    <span className="text-primary font-bold">Inventor/Solidworks</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border border-accent/20">
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-2">Get Your Custom Quote</h4>
                <p className="text-muted-foreground mb-4">Project cost depends on your specific requirements, complexity, and customization needs.</p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-6 py-3" data-testid="button-quote-process">
                    Request Detailed Quote
                  </Button>
                </Link>
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
