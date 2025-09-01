import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What crane types are supported by your automation software?",
      answer: "Our software supports all types of EOT (Electric Overhead Traveling) cranes including single girder, double girder, and gantry cranes with various lifting capacities and spans."
    },
    {
      question: "How does the customization process work?",
      answer: "We begin with detailed requirement gathering to understand your calculation methods, drawing standards, and company-specific workflows. The software is then built from scratch to match your exact specifications."
    },
    {
      question: "What support is provided after deployment?",
      answer: "We provide a 3-month warranty period for issue resolution and ensure compatibility with at least three future versions of your CAD software."
    },
    {
      question: "Can the software be deployed across multiple workstations?",
      answer: "Yes, since you own the software completely, there are no restrictions on installations or usage across your organization's workstations."
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
