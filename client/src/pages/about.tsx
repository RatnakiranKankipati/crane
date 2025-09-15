import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Users } from "lucide-react";
// new
export default function About() {
  return (
    <>
      <SEOHead 
        title="About FDES Technologies | EOT Crane Automation Specialists"
        description="Learn about FDES Technologies, specialists in engineering design automation for EOT crane manufacturers. Expert team delivering custom software solutions worldwide."
        keywords="FDES Technologies, EOT crane automation company, engineering design automation specialists, crane manufacturing software experts"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">About FDES Technologies</h1>
              <p className="text-xl text-muted-foreground mb-8">
                At FDES Technologies, we specialize in accelerating the EOT crane design process. Our 
                automated solutions reduce the design cycle time, ensure compliance with industry 
                standards, and deliver precise 3D models and 2D drawings, all while minimizing 
                human errors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our solutions are designed to integrate seamlessly into your existing workflows and 
                CAD software, enabling your team to produce detailed 3D models, 2D drawings, GA 
                drawings, and accurate design calculations with ease. We are committed to 
                empowering your design process, helping you stay ahead in the competitive industry.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Engineering Expertise</h4>
                    <p className="text-muted-foreground">Deep understanding of EOT crane design principles with strict compliance to IS 3177, IS 807, and IS 800 standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Custom Solutions</h4>
                    <p className="text-muted-foreground">Every software solution is built from scratch to match your specific design workflows and company standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground">3-month warranty period with guaranteed compatibility for future CAD software versions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern engineering office with CAD workstations" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  data-testid="img-office"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              </div>
              
              {/* Team expertise badge */}
              <div className="absolute -top-4 -left-4 glass-effect p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 feature-icon-gradient rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">F</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Expert Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To transform the EOT crane manufacturing industry by providing intelligent automation solutions 
                that eliminate manual efforts, reduce design time, and ensure compliance with international standards.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the leading provider of engineering design automation solutions for crane manufacturers worldwide, 
                enabling them to achieve unprecedented efficiency and accuracy in their design processes.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-muted p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Technical Excellence</h3>
                <p className="text-muted-foreground">Delivering high-quality, reliable software solutions that meet the highest engineering standards.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Customization</h3>
                <p className="text-muted-foreground">Every solution is tailored to match your specific requirements and workflows perfectly.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Customer Success</h3>
                <p className="text-muted-foreground">Your success is our priority, with ongoing support and guarantee of future compatibility.</p>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="bg-primary p-12 rounded-2xl text-primary-foreground mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Manufacturers Trust Us</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-primary-foreground/90">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <p className="text-primary-foreground/90">Design Time Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <p className="text-primary-foreground/90">Calculation Errors</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24hrs</div>
                <p className="text-primary-foreground/90">Response Time</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-12 rounded-2xl border shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the leading EOT crane manufacturers who have transformed their design processes with our automation solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" data-testid="button-contact-about">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
