import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trophy, UserCog, Puzzle,TrendingUp,Users,Share2  } from "lucide-react";
export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
            <span className="text-lg font-medium text-white">🚀 Ready to Transform?</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Start Your <span className="text-accent">Automation Journey</span> Today
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
            Join the leading EOT crane manufacturers who have transformed their design processes with FDES automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 px-10 py-5 text-xl font-semibold shadow-2xl"
                data-testid="button-proposal"
              >
                Request Custom Proposal
              </Button>
            </Link>
            <a href="mailto:sales@fdestech.com">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-slate-800 hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-5 text-xl font-semibold shadow-lg border-2 border-white"
                data-testid="button-email"
              >
                Email Us Directly
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center",gap:"10px" }}>
                <UserCog className="w-6 h-6 text-accent mb-3" />
                <h4 className="text-xl font-bold mb-3" data-testid="cta-feature-1"> Expert Consultation</h4>
              </div>

              <p className="text-base leading-relaxed">Your first step is a no-obligation strategy call with one of our automation experts, not a salesperson.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",gap:"10px" }}>
                <Share2  className="w-6 h-6 text-accent mb-3" />
                <h4 className="text-xl font-bold mb-3" data-testid="cta-feature-2"> Collaborative Scoping</h4>
                </div>
              
              <p className="text-base leading-relaxed">We work with you to understand your unique challenges and goals before we even start building your proposal.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
<div style={{ display: "flex", justifyContent: "center", alignItems: "center",gap:"10px" }}>
                <TrendingUp className="w-6 h-6 text-accent mb-3" />
                <h4 className="text-xl font-bold mb-3" data-testid="cta-feature-2">Clear ROI Roadmap</h4>
                </div>
              <p className="text-base leading-relaxed">Your custom proposal will include a clear analysis of the projected time savings, cost reductions, and return on investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
