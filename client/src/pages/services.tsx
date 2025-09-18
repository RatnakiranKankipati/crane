import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calculator, Box, FileText, Settings, FolderCog, Wrench } from "lucide-react";
import { TbHexagon3D } from "react-icons/tb";
import { SiAutocad } from "react-icons/si";
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/eotcraneresize.jpg"
import service4 from "../images/image (5).jpg"


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
                <div>
                  <img
                    src={service1}
                    alt="CAD engineering workstation"
                    className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    data-testid="img-cad-workstation"
                  />
                  <img
                    src={service4}
                    alt="Technical calculations and reports"
                    className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300 mt-4"
                    data-testid="img-calculations"
                  />
                </div>
                <div>
                  <img
                    src={service3}
                    alt="CAD engineering workstation"
                    className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    data-testid="img-cad-workstation"
                  />
                  <img
                    src={service2}
                    alt="Technical calculations and reports"
                    className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300 mt-4"
                    data-testid="img-calculations"
                  />
                </div>

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
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Calculator className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Automated IS Standard Calculations</h4>
                      <p className="text-muted-foreground leading-relaxed">Standardized calculations eliminate manual errors and ensure compliance with IS standards for all crane components.</p>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <Box className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">AutoCAD & 3D Integration</h4>
                      <p className="text-muted-foreground leading-relaxed">Seamless integration with AutoCAD (2D) and Autodesk Inventor/Solidworks (3D) for complete design workflow automation.</p>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
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
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FolderCog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">2D Automation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>AutoCAD integration</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>Tailored development timeline</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>Custom pricing based on requirements</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span>Complete drawing automation</span></li>
              </ul>
            </div>

            <div className="modern-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">3D Automation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Inventor/Solidworks integration</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Customized development schedule</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Custom pricing based on requirements</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span><span>Complete 3D modeling automation</span></li>
              </ul>
            </div>

            <div className="modern-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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

          {/* CAD Software Integration */}
          <div className="bg-slate-50 p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Supported CAD Software</h2>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Our software is designed to integrate seamlessly with the following CAD applications
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center justify-center gap-5 mb-2" >
                  <SiAutocad size={38} color="#0c7ae9" />
                  <h3 className="text-2xl font-bold text-primary mb-0 text-center">2D Application</h3>
                </div>
                <div className="text-center">
                  {/* <div className="text-4xl font-secondary text-bold mb-2">AutoCAD</div> */}
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">AutoCAD</div>
                  </div>
                  {/* <p className="text-muted-foreground">Complete 2D drawing automation</p> */}
                  <p className="text-muted-foreground">Complete 2D drawing automation.
                    Boost productivity with smart drafting tools.
                    Seamless integration for faster project delivery. </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center justify-center gap-5" >
                  <TbHexagon3D size={50} color="#0c7ae9" />
                  <h3 className="text-2xl font-bold text-primary mb-0 text-center">3D Applications</h3>
                </div>
                <div className="text-center" >
                  {/* <div className="flex items-center justify-center" > */}
                  {/* <TbHexagon3D size={50} color="#0c7ae9" /> */}
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">SolidWorks , Inventor</div>
                  </div>
                  {/* </div> */}

                  {/* <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">Autodesk Inventor</div>
                  </div> */}
                  <p className="text-muted-foreground">Advanced 3D design and modeling.
                    Streamline product development with precision tools.
                    Enhance collaboration from concept to production. </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Optional Add-Ons</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Advanced Customization</h3>
                <p className="text-muted-foreground leading-relaxed">Development of custom design modules or features that are specific to your company's unique requirements (e.g., special crane calculations or machinery arrangements).</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <FolderCog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">ERP/PLM Integration</h3>
                <p className="text-muted-foreground leading-relaxed">Integration of the software with your existing ERP or PLM systems to streamline the ordering process and data management workflows.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Other CAD Tools</h3>
                <p className="text-muted-foreground leading-relaxed">If your company uses additional CAD tools (other than our standard supported software), we can integrate the solution to ensure smooth data exchange and workflow between systems.</p>
              </div>
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
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-10 py-5 text-xl font-semibold shadow-2xl" data-testid="button-contact-services">
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
