import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/conference/SectionHeading";
import { Globe, Award, Lightbulb, Users, BookOpen, Handshake } from "lucide-react";

const SCHOLARS_IMG = "https://media.base44.com/images/public/6a359631188c7bfda4ca24b0/c5692d51c_generated_0a16fbea.png";

const features = [
  { icon: Globe, title: "International Platform", desc: "Bringing together leading researchers, innovators, and policymakers from across Africa and around the world." },
  { icon: Award, title: "Peer-Reviewed Research", desc: "Rigorous academic paper presentations across 17 thematic tracks with structured roundtables." },
  { icon: Lightbulb, title: "Innovation Exhibition", desc: "A curated technology and innovation exhibition showcasing cutting-edge solutions." },
  { icon: Users, title: "Policy Dialogue Forum", desc: "A dedicated forum where scientific advancements are examined within broader societal and policy contexts." },
  { icon: BookOpen, title: "Cross-Disciplinary", desc: "Sessions structured to foster interaction between technical research, social inquiry, and ethical reflection." },
  { icon: Handshake, title: "Industry Partnerships", desc: "Creating a dynamic environment for knowledge exchange between academia and industry." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-muted/50">
        <div className="absolute top-0 left-[10%] w-px h-full bg-border/50" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-border/50" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="About TASS Nigeria 2026"
                title="Technology. Arts. Science. Society."
                description="TASS — Technology, Arts, Science, and Society — is an international multidisciplinary platform established to promote excellence in research, innovation, entrepreneurship, knowledge exchange, and sustainable development."
              />
              <p className="text-muted-foreground leading-relaxed">
                The conference programme integrates rigorous peer-reviewed academic research with practical industry applications. In addition to scholarly paper presentations, the event features a competitive student hackathon, a dedicated policy dialogue forum, and a curated innovation and technology exhibition.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img src={SCHOLARS_IMG} alt="Scholars in discussion" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="Why TASS 2026"
            title="What Makes This Conference Unique"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEMRI & UniAbuja */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeading
            label="Organizers"
            title="Centre for Migration Research & Interdisciplinary Studies"
            description="CEMRI, University of Abuja, is the host institution for ICMRISD Nigeria 2026. The Centre brings together cross-disciplinary expertise to examine migration, integration, and sustainable development across Africa."
            light
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { val: "17", label: "Thematic Tracks" },
              { val: "₦10M+", label: "Total Prize Pool" },
              { val: "4 Days", label: "Of Programming" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-extrabold text-5xl text-accent mb-2">{stat.val}</p>
                <p className="text-primary-foreground/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}