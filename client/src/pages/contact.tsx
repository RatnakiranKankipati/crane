import { useState } from "react";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Globe, Clock, CheckCircle } from "lucide-react";
import { ContactForm } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
        });
        setFormData({});
      } else {
        // throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEOHead 
        title="Contact FDES Technologies | EOT Crane Automation Quote | Get Started"
        description="Contact FDES Technologies for custom EOT crane design automation solutions. Get your project quote and transform your manufacturing process today."
        keywords="contact FDES Technologies, EOT crane automation quote, custom engineering software, project inquiry, design automation consultation"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Ready to Transform Your Design Process?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us for a customized solution tailored to your EOT crane manufacturing requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="modern-card p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get Your <span className="text-accent font-bold">Custom Quote</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2">First Name</Label>
                    <Input 
                      type="text" 
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName || ''}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      required
                      data-testid="input-firstName"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2">Last Name</Label>
                    <Input 
                      type="text" 
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName || ''}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      required
                      data-testid="input-lastName"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email"
                    placeholder="your.email@company.com"
                    value={formData.email || ''}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2">Company Name</Label>
                  <Input 
                    type="text" 
                    id="company"
                    placeholder="Your crane manufacturing company"
                    value={formData.company || ''}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    required
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone || ''}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="text-sm font-medium text-foreground mb-2">Project Type</Label>
                  <Select onValueChange={(value) => updateFormData('projectType', value as ContactForm['projectType'])} required>
                    <SelectTrigger data-testid="select-projectType">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2d-automation">2D AutoCAD Automation</SelectItem>
                      <SelectItem value="3d-automation">3D Modeling Automation</SelectItem>
                      <SelectItem value="both">Both 2D & 3D Solutions</SelectItem>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="requirements" className="text-sm font-medium text-foreground mb-2">Project Requirements</Label>
                  <Textarea 
                    id="requirements"
                    rows={4}
                    placeholder="Describe your current design process, specific requirements, and any existing standards..."
                    value={formData.requirements || ''}
                    onChange={(e) => updateFormData('requirements', e.target.value)}
                    required
                    data-testid="input-requirements"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 hover:scale-105 transition-all duration-300 py-5 px-6 text-lg font-semibold shadow-lg"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Project Inquiry"}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours with a detailed proposal tailored to your needs.
                </p>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="modern-card p-10 rounded-3xl">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Get in <span className="text-primary font-bold">Touch</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">sales@fdestech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Website</h4>
                      <p className="text-muted-foreground">www.fdestech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div className="modern-card p-10 rounded-3xl">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Why Choose <span className="text-secondary font-bold">FDES?</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Specialized in EOT crane automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Complete software ownership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">3-month warranty included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Future version compatibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
