// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "How does the software help reduce design time?",
//       answer: "By automating repetitive tasks such as calculations and drawing generation, our software can reduce the total design time by up to 50%, allowing your engineers to focus on more value-added tasks and speeding up the time-to-market for your products."
//     },
//     {
//       question: "What design standards does the software comply with?",
//       answer: "Built to comply with IS 3177, IS 807, and IS 800, our software guarantees that every design meets the required safety and legal standards, ensuring smooth approvals and reducing the risk of costly errors during manufacturing."
//     },
//     {
//       question: "Can the software generate both 3D models and 2D drawings?",
//       answer: "Yes, our software is capable of generating detailed 3D models and 2D drawings. It automates the process, allowing for quick and accurate creation of both types of design outputs, which can be used for manufacturing and documentation."
//     },
//     {
//       question: "How does the software handle design calculations?",
//       answer: "The software automates design calculations based on input parameters and the relevant Indian standards. This ensures that all calculations are precise and aligned with industry requirements, significantly reducing the risk of manual errors."
//     },
//     {
//       question: "Is the software customizable to our specific design needs?",
//       answer: "Absolutely! Our software is highly customizable. We work closely with your team to tailor the automation tools to fit your specific design processes, ensuring seamless integration with your existing workflows."
//     },
//     {
//       question: "What types of drawings can the software produce?",
//       answer: "The software can produce a variety of drawings including General Arrangement (GA) drawings, fabrication drawings, and detailed part drawings. These outputs are crucial for different stages of the manufacturing process."
//     }
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-background to-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6">
//             <span className="text-sm font-medium text-accent">❓ FAQ</span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
//             Frequently Asked <span className="text-accent font-bold">Questions</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Common questions about our EOT crane design automation solutions
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto space-y-6">
//           {faqs.map((faq, index) => (
//             <div key={index} className="modern-card p-8 rounded-2xl">
//               <button 
//                 className="w-full text-left flex items-center justify-between group"
//                 onClick={() => toggleFAQ(index)}
//                 data-testid={`faq-button-${index}`}
//               >
//                 <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">{faq.question}</h3>
//                 <ChevronDown 
//                   className={`w-6 h-6 text-primary transition-all duration-300 ${
//                     openIndex === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
//                   }`} 
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6" data-testid={`faq-answer-${index}`}>
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

          {/* FAQ 1 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(0)}
              data-testid="faq-button-0"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                How is your solution tailored to our company's specific workflows and needs?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 0 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {openIndex === 0 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-0"
              >
                Our entire approach is built around partnership, not a one-size-fits-all product. The process begins with a deep-dive discovery phase where our experts work with your team to map out your existing design, engineering, and quoting workflows. We then configure and customize the automation platform to match your unique processes, your component library, and your operational requirements, ensuring the final solution is a perfect fit for your business.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(1)}
              data-testid="faq-button-1"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                How does the platform handle different international and internal design standards?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 1 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {openIndex === 1 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-1"
              >
                The platform is engineered as a "standard-agnostic" framework. Instead of a rigid, pre-built library, we work with you to implement the specific rules and logic for any design standard you use—from international codes like IS, Eurocode, and ASME to your own proprietary internal criteria. This unique flexibility ensures every output is 100% compliant with your exact engineering requirements and allows you to adapt to new markets with ease.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(2)}
              data-testid="faq-button-2"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                What are the key outputs we will receive from the automated solution?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 2 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {/* {openIndex === 2 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                The solution is designed to generate a complete manufacturing-ready package from a single set of inputs. The typical outputs include:
              </div>
              
            )} */}
            {openIndex === 2 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                <p>
                  The solution is designed to generate a complete manufacturing-ready
                  package from a single set of inputs. The typical outputs include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>3D CAD Models</strong> for visualization and integration.</li>
                  <li><strong>General Arrangement (GA) Drawings</strong>.</li>
                  <li><strong>Detailed Fabrication and Part Drawings</strong>.</li>
                  <li><strong>Comprehensive Bills of Material (BOMs)</strong>.</li>
                  <li><strong>Full Calculation Reports</strong> for validation and compliance.</li>
                </ul>
              </div>
            )}

          </div>

          {/* FAQ 4 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(3)}
              data-testid="faq-button-3"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                What does "Full Source Code Ownership" actually mean for our business?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 3 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {/* {openIndex === 3 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-3"
              >
                The software automates design calculations based on input parameters and the relevant Indian standards. This ensures that all calculations are precise and aligned with industry requirements, significantly reducing the risk of manual errors.
              </div>
            )} */}
            {openIndex === 3 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                <p>
                  It means the solution becomes your permanent, valuable digital asset. Upon project completion, we deliver the full source code, giving you:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li className="pl-6 -indent-6"><strong>Complete Freedom:</strong> You are never locked into a relationship with us.</li>
                  <li className="pl-6 -indent-6"><strong>No Recurring License Fees:</strong> The system is yours forever after the initial investment.</li>
                  <li className="pl-6 -indent-6"><strong>Ultimate Flexibility: </strong> Your internal team or any other developer can maintain, modify, or extend the solution as your business evolves.</li>
                </ul>
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(4)}
              data-testid="faq-button-4"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                Is this a one-time investment or a recurring subscription?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 4 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {openIndex === 4 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-4"
              >
                Our custom automation solution is a one-time capital investment. You are purchasing a perpetual asset for your company, not renting software. This model provides long-term value and a clear return on investment without the ongoing operational costs associated with SaaS subscriptions.
              </div>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(5)}
              data-testid="faq-button-5"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                Can your solution integrate with our existing CAD software?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 5 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {openIndex === 5 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-5"
              >
                Absolutely. We understand that your team has trusted tools. Our platform is designed for seamless integration with industry-standard CAD software, including AutoCAD, Autodesk Inventor, and Solidworks. This ensures the solution fits directly into your existing engineering workflow without disruption.
              </div>
            )}
          </div>

           {/* FAQ 7 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(6)}
              data-testid="faq-button-2"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                What does the implementation process look like from start to finish?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 2 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {/* {openIndex === 2 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                The solution is designed to generate a complete manufacturing-ready package from a single set of inputs. The typical outputs include:
              </div>
              
            )} */}
            {openIndex === 6 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                <p>
                  Our process is collaborative and transparent, typically following these key stages:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li className="pl-6 -indent-6"><strong>Discovery & Scoping:</strong> We work with you to define the project goals and requirements.</li>
                  <li className="pl-6 -indent-6"><strong>Development & Configuration:</strong>Our team builds and customizes the core automation engine.</li>
                  <li className="pl-6 -indent-6"><strong>Testing & Validation:</strong>We conduct rigorous testing to ensure every output is accurate.</li>
                  <li className="pl-6 -indent-6"><strong>Training & Handover:</strong>We provide comprehensive training to ensure your team can use the new solution effectively.</li>
                  <li className="pl-6 -indent-6"><strong>Delivery:</strong> We deliver the full solution and source code.</li>
                </ul>
              </div>
            )}

          </div>

           {/* FAQ 8 */}
          <div className="modern-card p-8 rounded-2xl">
            <button
              className="w-full text-left flex items-center justify-between group"
              onClick={() => toggleFAQ(7)}
              data-testid="faq-button-2"
            >
              <h3 className="text-xl font-bold text-foreground pr-4 group-hover:text-primary transition-colors">
                What kind of training and support do you provide after delivery?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-all duration-300 ${openIndex === 2 ? "rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
              />
            </button>
            {openIndex === 7 && (
              <div
                className="mt-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-6"
                data-testid="faq-answer-2"
              >
                We are committed to your success. The project includes comprehensive training sessions for your engineering team to ensure quick adoption. After the handover, we offer optional annual support and maintenance contracts to provide ongoing peace of mind, technical assistance, and potential future enhancements.
              </div>
              
            )}
            

          </div>

        </div>
      </div>
    </section>
  );
}
