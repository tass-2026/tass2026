import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/conference/SectionHeading";
import { Trophy, Clock, Users, Zap, Code, Shield, Leaf, Heart, GraduationCap } from "lucide-react";

const HACKATHON_IMG = "https://media.base44.com/images/public/6a359631188c7bfda4ca24b0/57f880cfe_generated_8b9e609f.png";

const hackathonTracks = [
  { icon: Zap, title: "EdTech & Digital Learning", desc: "Solutions for accessible, quality education across Africa.", bg: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-700" },
  { icon: Heart, title: "HealthTech & Telemedicine", desc: "Digital health innovations for underserved communities.", bg: "bg-red-50 border-red-200", iconColor: "text-red-600" },
  { icon: Leaf, title: "AgriTech & Food Security", desc: "Technology for sustainable agriculture and nutrition.", bg: "bg-green-50 border-green-200", iconColor: "text-green-700" },
  { icon: Shield, title: "GovTech & Civic Innovation", desc: "Platforms for transparency, governance, and citizen engagement.", bg: "bg-blue-50 border-blue-200", iconColor: "text-blue-700" },
  { icon: Code, title: "FinTech & Financial Inclusion", desc: "Solutions bridging the financial services gap.", bg: "bg-purple-50 border-purple-200", iconColor: "text-purple-700" },
  { icon: GraduationCap, title: "Open Innovation", desc: "Any technology solution addressing SDGs in Africa.", bg: "bg-orange-50 border-orange-200", iconColor: "text-orange-700" },
];

const prizes = [
  { place: "1st Place", amount: "₦5,000,000", desc: "Grand Prize + Incubation Support" },
  { place: "2nd Place", amount: "₦3,000,000", desc: "Runner-up Prize + Mentorship" },
  { place: "3rd Place", amount: "₦2,000,000", desc: "Bronze Prize + Recognition" },
];

export default function Hackathon() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HACKATHON_IMG} alt="Student hackathon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="48-Hour Competitive Sprint"
            title="Student Hackathon"
            description="Open to undergraduate and postgraduate students at Nigerian universities. Teams work with mentors from industry, academia, and civil society."
            light
          />
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Trophy, text: "₦10M Prize Pool" },
              { icon: Clock, text: "48 Hours" },
              { icon: Users, text: "Mentors from Industry & Academia" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                <item.icon className="w-4 h-4 text-accent" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading label="Hackathon Tracks" title="Build Solutions That Matter" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonTracks.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 ${t.bg}`}
              >
                <t.icon className={`w-6 h-6 mb-4 ${t.iconColor}`} />
                <h3 className="font-heading font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading label="Prize Structure" title="₦10 Million Prize Pool" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {prizes.map((p, i) => (
              <motion.div
                key={p.place}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center rounded-2xl p-8 border ${
                  i === 0
                    ? "bg-accent text-accent-foreground border-accent shadow-xl scale-105"
                    : "bg-card border-border"
                }`}
              >
                <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${i === 0 ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                  {p.place}
                </p>
                <p className="font-display font-extrabold text-3xl mb-1">{p.amount}</p>
                <p className={`text-sm ${i === 0 ? "text-accent-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Teams must include at least one female member to be eligible for awards.
          </p>
        </div>
      </section>
    </div>
  );
}