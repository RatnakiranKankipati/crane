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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Automation Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom-built software tailored to your design standards with comprehensive automation capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Engineering design process with technical drawings" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-design-process"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Design Automation</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Automated IS Standard Calculations</h4>
                    <p className="text-muted-foreground">Standardized calculations eliminate manual errors and ensure compliance with IS standards for all crane components.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">AutoCAD & 3D Integration</h4>
                    <p className="text-muted-foreground">Seamless integration with AutoCAD (2D) and Autodesk Inventor/Solidworks (3D) for complete design workflow automation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Automated Drawing Generation</h4>
                    <p className="text-muted-foreground">Generate GA drawings, fabrication drawings, and BOMs automatically based on your company's specific standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FolderCog className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">2D Automation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AutoCAD integration</li>
                <li>• 3-month development</li>
                <li>• Rs. 12-15 lakhs investment</li>
                <li>• Complete drawing automation</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Box className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">3D Automation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inventor/Solidworks integration</li>
                <li>• 3-4 month development</li>
                <li>• Rs. 20-25 lakhs investment</li>
                <li>• Complete 3D modeling automation</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Full Ownership</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete software ownership</li>
                <li>• No installation restrictions</li>
                <li>• 3-month warranty included</li>
                <li>• Multi-workstation deployment</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Automate Your Design Process?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a customized solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" data-testid="button-contact-services">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
