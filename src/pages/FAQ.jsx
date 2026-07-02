import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/conference/SectionHeading";

const faqs = [
  { q: "What is TASS Nigeria 2026?", a: "TASS — Technology, Arts, Science, and Society — is an international multidisciplinary conference at the University of Abuja, Nigeria, bringing together researchers, policymakers, industry leaders, and students." },
  { q: "When and where is the conference?", a: "The conference runs from 09–12 November 2026 at the University of Abuja, FCT, Nigeria." },
  { q: "How can I submit an abstract?", a: "Visit the Themes page to view the sub-themes and submit your abstract through the online portal. Detailed submission guidelines are available on the same page." },
  { q: "Who can participate in the hackathon?", a: "The hackathon is open to undergraduate and postgraduate students at Nigerian universities. Teams of 4–6 members compete over 48 hours." },
  { q: "How do I register for the conference?", a: "Visit the Registration page to register as a delegate, presenter, or exhibitor. Early bird registration closes 30 September 2026." },
  { q: "Is there an exhibition?", a: "Yes, the Innovation Exhibition runs across all four days with standard, premium, and island booth options available." },
  { q: "How can I become a sponsor?", a: "Visit the Sponsorship page to view our sponsorship tiers and benefits. Contact us for custom packages." },
  { q: "What accommodation options are available?", a: "Visit the Accommodation page for information on nearby hotels and lodging options." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about TASS Nigeria 2026."
            align="center"
          />
          <div className="space-y-3 mt-8">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left bg-card hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-heading font-semibold text-sm text-foreground flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
