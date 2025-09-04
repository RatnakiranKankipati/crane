import { Link } from "wouter";
import { Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12" style={{background:"hsl(220deg 7.16% 13.23%)"}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FDES Technologies</h3>
                <p className="text-sm text-secondary-foreground/70">Private Limited</p>
              </div> */}
              <img  style={{width:"20%"}} src={"https://fdestech.com/wp-content/uploads/2018/06/footerlogo_white.png"}/>
              <div>
                <h6 className="text-xl font-bold" style={{fontSize:"16px"}}>Technologies Private Limited</h6>
                {/* <h5 className="text-xl font-bold">Private Limited</h5> */}

                {/* <p className="text-sm text-secondary-foreground/70">Private Limited</p> */}
              </div> 
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Specialized in engineering design automation for EOT crane manufacturers. 
              Transforming traditional design workflows with intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:sales@fdestech.com" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.fdestech.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                data-testid="link-website"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-2d">2D Automation</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-3d">3D Automation</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-custom">Custom Development</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-cad">CAD Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/process" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-process">Our Process</Link></li>
              <li><Link href="/benefits" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-benefits">Benefits</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © {new Date().getFullYear()} FDES Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
