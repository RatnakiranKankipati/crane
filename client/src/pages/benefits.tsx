import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { DollarSign, CheckCircle, TrendingUp, AlertCircle } from "lucide-react";
import timeandcosting from '../images/timecost.png'
import errorreduction from '../images/error.png'
import scalebility from '../images/de-risk.png'


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
            <h1 className="text-5xl font-bold text-foreground mb-6">A Strategic Investment in Your Company's Future</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our automation solutions deliver more than just efficiency; they create a direct and lasting impact on your profitability, growth, and operational stability.
            </p>
          </div>
          
          
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={timeandcosting} 
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Increase Your Profitability</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Move beyond simple time savings to fundamentally improve your bottom line. By eliminating manual errors, you drastically reduce costly rework and material waste. Our solution ensures designs are optimized for manufacturing, lowering production costs and directly increasing the profitability of every crane you build. We provide a clear return on investment, often measurable within the first few projects.</p>
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 rounded-xl border border-accent/20">
                  <p className="text-sm font-semibold text-accent">Results vary based on project complexity</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={errorreduction} 
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Accelerate Your Business Growth</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">The ability to generate accurate sales proposals and quotes in minutes, not days, is a powerful competitive advantage. It allows your sales team to respond to more tenders and capture more market share. Our platform's flexible, standard-agnostic framework makes it effortless to adapt designs for international markets, unlocking new export opportunities and accelerating your global expansion.</p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/20">
                  <p className="text-sm font-semibold text-primary">Zero calculation errors guaranteed</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-0 rounded-2xl overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={scalebility} 
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
                <h3 className="text-2xl font-bold text-foreground mb-4">De-Risk and Scale Your Operations</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Automation is the key to sustainable growth. By standardizing your design process, you guarantee quality and consistency across every project and every engineer. This frees your most valuable talent from repetitive tasks to focus on innovation and R&D. Our solution makes it easier to onboard new team members and ensures your high standards are maintained as your operations scale.</p>
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-xl border border-secondary/20">
                  <p className="text-sm font-semibold text-secondary">Unlimited workstation deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solution Benefits */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-12 rounded-2xl text-white mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">A Strategic Investment in Your Company's Future</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Our automation solutions deliver more than just efficiency; they create a direct and lasting impact on your profitability, growth, and operational stability.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">Custom</div>
                  <p className="text-gray-300">Calculation Logic</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">Tailored</div>
                  <p className="text-gray-300">Drawing Standards</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">Complete</div>
                  <p className="text-gray-300">Software Ownership</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to See These Benefits in Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's have a strategic conversation. Our experts can help you build a custom proposal with a clear ROI analysis.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" data-testid="button-contact-benefits">
                Request a Custom Proposal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
