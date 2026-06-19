import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Atom, Users, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../conference/SectionHeading";

const tracks = [
  { icon: Atom, title: "STEM & Applied Science", desc: "Natural sciences, engineering, technology, and applied research frontiers." },
  { icon: Users, title: "Social Sciences", desc: "Sociology, economics, political science, and public policy research." },
  { icon: BookOpen, title: "Humanities", desc: "Arts, culture, languages, philosophy, and historical research." },
  { icon: Briefcase, title: "Management Sciences", desc: "Business, entrepreneurship, innovation management, and organizational studies." },
];

export default function ThemesPreview() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            label="17 Thematic Tracks"
            title="Conference Sub-Themes"
            description="Spanning natural sciences, engineering, social sciences, humanities, and policy studies."
          />
          <Link
            to="/themes"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            View all tracks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to="/themes"
                className="group block bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <track.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}