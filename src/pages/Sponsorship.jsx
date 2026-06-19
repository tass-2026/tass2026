import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/conference/SectionHeading";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Bronze",
    price: "₦2,000,000",
    features: [
      "Logo on conference materials",
      "2 complimentary delegate passes",
      "Standard exhibition booth",
      "Social media mentions",
      "Certificate of sponsorship",
    ]
  },
  {
    name: "Silver",
    price: "₦5,000,000",
    features: [
      "Everything in Bronze",
      "Premium logo placement",
      "5 complimentary delegate passes",
      "Premium exhibition booth",
      "Programme insert",
      "Speaking opportunity (panel)",
    ]
  },
  {
    name: "Gold",
    price: "₦10,000,000",
    featured: true,
    features: [
      "Everything in Silver",
      "Top-tier logo placement",
      "10 complimentary delegate passes",
      "Island exhibition booth",
      "Keynote speaking slot",
      "Branded networking session",
      "VIP dinner invitation",
    ]
  },
  {
    name: "Platinum",
    price: "₦20,000,000",
    features: [
      "Everything in Gold",
      "Title sponsor recognition",
      "15 complimentary delegate passes",
      "Exclusive branding rights",
      "Co-branded conference materials",
      "Dedicated product launch session",
      "VIP lounge naming rights",
    ]
  },
  {
    name: "Diamond",
    price: "₦50,000,000",
    features: [
      "Everything in Platinum",
      "Conference naming rights",
      "Unlimited delegate passes",
      "Exclusive main stage branding",
      "Keynote address slot",
      "Full media coverage package",
      "Year-round brand partnership",
      "Post-conference report branding",
    ]
  },
];

const specialOpps = [
  "Hackathon Title Sponsor",
  "Gala Dinner Sponsor",
  "Delegate Bag Sponsor",
  "Wi-Fi & Digital Infrastructure Sponsor",
  "Transport & Logistics Sponsor",
  "Award Ceremony Sponsor",
];

export default function Sponsorship() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="Partnership Opportunities"
            title="Sponsorship Tiers"
            description="Access Nigeria's most concentrated gathering of researchers, policymakers, industry leaders, and innovators. All prices are exclusive of VAT."
            align="center"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-6 border flex flex-col ${
                  tier.featured
                    ? "bg-accent text-accent-foreground border-accent shadow-xl ring-2 ring-accent/20"
                    : "bg-card border-border"
                }`}
              >
                <h3 className="font-heading font-bold text-lg mb-1">{tier.name}</h3>
                <p className="font-display font-extrabold text-2xl mb-5">{tier.price}</p>
                <ul className="space-y-2 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`text-xs flex items-start gap-2 ${tier.featured ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${tier.featured ? "text-accent-foreground" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-full text-sm transition-all ${
                    tier.featured
                      ? "bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  Enquire
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Opportunities */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="Bespoke Packages"
            title="Special Sponsorship Opportunities"
            description="Tailor-made packages for maximum brand visibility and engagement."
            light
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {specialOpps.map((opp, i) => (
              <motion.div
                key={opp}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-4 text-sm font-medium text-primary-foreground/80"
              >
                {opp}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-all text-sm"
            >
              Discuss Sponsorship <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}