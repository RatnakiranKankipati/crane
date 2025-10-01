import { Link } from "wouter";
import { Mail, Globe,Linkedin  } from "lucide-react";
import logo from "../../images/cranelogo.png"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12" style={{background:"hsl(220deg 7.16% 13.23%)"}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            
              <img  style={{width:"27%"}} src={logo}/>
              <div>
                <h6 className="text-white transition-colors whitespace-nowrap " style={{fontSize:"16px"}}>solution by FDES Technologies</h6>
                
              </div> 
            </div>
            
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Crane Genie is a specialized engineering design automation solution for the EOT crane industry, proudly developed and supported by the experts at FDES Technologies.
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
              <a
  href="https://www.linkedin.com/company/fdestech" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
  data-testid="link-linkedin"
>
  <Linkedin className="w-6 h-6" />
</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Crane Genie</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-2d">Our Solution</Link></li>
              <li><Link href="/benefits" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-3d">Benefits</Link></li>
              <li><Link href="/process" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-custom">Our Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="https://fdestech.com" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-process">https://fdestech.com</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-foreground transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>+91 40-4528 7403</li>
              <li>sales@fdestech.com</li>
              <li>#6-3-852/2/B/A-1, Plot No.6, 1st Floor Kaza Residency, Aparajitha Housing Colony, Ameerpet, India - 500016</li>
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
