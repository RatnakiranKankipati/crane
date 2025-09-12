import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Heroimg from "../../images/eotcrane.png"
import eot from "../../images/eot3.png"
import Heroimg2 from "../../images/updated image.png"


export function HeroSection() {
  return (
 <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
          {/* <div className="grid lg:grid-cols-2 items-center" > */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm font-medium">🚀 Transform Your Manufacturing Process</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Automate Your <span className="text-accent font-bold">EOT Crane Design</span> Workflow
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Cut design time by 90% with our intelligent automation software. From IS standard calculations to complete drawing generation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-lg"
                    data-testid="button-quote"
                  >
                    Get Custom Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                    data-testid="button-learn-more"
                  >
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">3-4</div>
                  <div className="text-sm text-gray-300">Months Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">90%</div>
                  <div className="text-sm text-gray-300">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-gray-300">IS Compliance</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500"> */}
              <div className="relative" >
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">

              

                <img

                  src={Heroimg2}

                  alt="EOT crane in modern manufacturing facility"
                  className="rounded-2xl shadow-2xl w-full h-auto border-white/20"
                  data-testid="img-hero"
                />
                
                </div>

              </div>

              {/* <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="stats-gradient w-14 h-14 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground" data-testid="text-time-reduction">90%</p>
                    <p className="text-sm text-muted-foreground font-medium">Time Reduction</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="absolute">
              <div className="flex items-center space-x-4">
               
              <img 
             
                src={Heroimg} 
             
                alt="EOT crane in modern manufacturing facility" 
                className=" h-auto"
                data-testid="img-hero"
              />
              </div>
            </div> */}
              {/* <div className="absolute -bottom-0 -right-0 bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/20">
           
              


                <img 
                src={Heroimg2} 
                style={{width:"350px"}}
                alt="EOT crane in modern manufacturing facility" 
                className="rounded-2xl  shadow-2xl border-white/20"
                data-testid="img-hero"
              />
          
            </div> */}
             <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="stats-gradient w-14 h-14 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground" data-testid="text-time-reduction">90%</p>
                  <p className="text-sm text-muted-foreground font-medium">Time Reduction</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
            </div>
            </div>
             

          </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent"></div>
    </section>
  );
}
