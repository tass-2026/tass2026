import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ThemesPreview from "@/components/home/ThemesPreview";
import HackathonPreview from "@/components/home/HackathonPreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ThemesPreview />
      <HackathonPreview />
      <CTABanner />
    </>
  );
}