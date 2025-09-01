import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calculator, Box, FileText, Settings, FolderCog, Wrench } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEOHead 
        title="Automation Services | EOT Crane Design Software | FDES Technologies"
        description="Comprehensive EOT crane design automation services including 2D AutoCAD integration, 3D modeling, IS standard calculations, and drawing generation."
        keywords="EOT crane automation services, AutoCAD integration, 3D modeling automation, IS standards calculations, drawing generation software"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">🛠️ Our Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-secondary font-bold">Automation Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Custom-built software tailored to your design standards with comprehensive automation capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="CAD engineering workstation" 
                  className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  data-testid="img-cad-workstation"
                />
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Technical calculations and reports" 
                  className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300 mt-8"
                  data-testid="img-calculations"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Comprehensive <span className="text-primary font-bold">Design Automation</span>
              </h2>
              <div className="space-y-8">
                <div className="modern-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                        alt="Engineering calculations" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Automated IS Standard Calculations</h4>
                      <p className="text-muted-foreground leading-relaxed">Standardized calculations eliminate manual errors and ensure compliance with IS standards for all crane components.</p>
                    </div>
                  </div>
                </div>
                
                <div className="modern-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                        alt="CAD software interface" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">AutoCAD & 3D Integration</h4>
                      <p className="text-muted-foreground leading-relaxed">Seamless integration with AutoCAD (2D) and Autodesk Inventor/Solidworks (3D) for complete design workflow automation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="modern-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                        alt="Technical drawings" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Automated Drawing Generation</h4>
                      <p className="text-muted-foreground leading-relaxed">Generate GA drawings, fabrication drawings, and BOMs automatically based on your company's specific standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="modern-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="feature-icon-gradient w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FolderCog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">2D Automation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>AutoCAD integration</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>3-month development</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>Custom pricing based on requirements</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>Complete drawing automation</span></li>
              </ul>
            </div>
            
            <div className="modern-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">3D Automation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Inventor/Solidworks integration</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>3-4 month development</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Custom pricing based on requirements</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Complete 3D modeling automation</span></li>
              </ul>
            </div>
            
            <div className="modern-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-accent to-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">Full Ownership</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span><span>Complete software ownership</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span><span>No installation restrictions</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span><span>3-month warranty included</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span><span>Multi-workstation deployment</span></li>
              </ul>
            </div>
          </div>

          {/* Custom Quote CTA */}
          <div className="modern-card p-12 rounded-3xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Get Your Custom Quote</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Every project is unique. Our pricing is customized based on your specific requirements, complexity, and desired features. Fill out our detailed inquiry form to receive a personalized quote.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-bold text-primary mb-2">Requirements Analysis</h4>
                <p className="text-sm text-muted-foreground">We review your needs</p>
              </div>
              <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                <h4 className="font-bold text-secondary mb-2">Custom Development Plan</h4>
                <p className="text-sm text-muted-foreground">Tailored solution design</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                <h4 className="font-bold text-accent mb-2">Detailed Quote</h4>
                <p className="text-sm text-muted-foreground">Transparent pricing</p>
              </div>
            </div>
            
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 px-10 py-5 text-xl font-semibold shadow-2xl" data-testid="button-contact-services">
                Fill Inquiry Form for Custom Quote
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              Response within 24 hours with detailed proposal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
