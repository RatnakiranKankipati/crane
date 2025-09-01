import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the software help reduce design time?",
      answer: "By automating repetitive tasks such as calculations and drawing generation, our software can reduce the total design time by up to 50%, allowing your engineers to focus on more value-added tasks and speeding up the time-to-market for your products."
    },
    {
      question: "What design standards does the software comply with?",
      answer: "Built to comply with IS 3177, IS 807, and IS 800, our software guarantees that every design meets the required safety and legal standards, ensuring smooth approvals and reducing the risk of costly errors during manufacturing."
    },
    {
      question: "Can the software generate both 3D models and 2D drawings?",
      answer: "Yes, our software is capable of generating detailed 3D models and 2D drawings. It automates the process, allowing for quick and accurate creation of both types of design outputs, which can be used for manufacturing and documentation."
    },
    {
      question: "How does the software handle design calculations?",
      answer: "The software automates design calculations based on input parameters and the relevant Indian standards. This ensures that all calculations are precise and aligned with industry requirements, significantly reducing the risk of manual errors."
    },
    {
      question: "Is the software customizable to our specific design needs?",
      answer: "Absolutely! Our software is highly customizable. We work closely with your team to tailor the automation tools to fit your specific design processes, ensuring seamless integration with your existing workflows."
    },
    {
      question: "What types of drawings can the software produce?",
      answer: "The software can produce a variety of drawings including General Arrangement (GA) drawings, fabrication drawings, and detailed part drawings. These outputs are crucial for different stages of the manufacturing process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">❓ FAQ</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-accent font-bold">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Common questions about our EOT crane design automation solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="modern-card p-8 rounded-2xl">
              <button 
                className="w-full text-left flex items-center justify-between group"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-button-${index}`}
              >
                <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
