"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FaqSection from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";
import ServicesSection from "@/components/ServicesSection";
// import PortfolioSection from "@/components/PortfolioSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#222222]">
      <div className="relative bg-[url(/banner.jpg)] bg-cover bg-right bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Contenido por encima del overlay */}
        <div className="relative z-10">
          {/* Navigation */}
          <Header />

          {/* Hero Section */}
          <HeroSection />
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      {/* Contact Section */}
      <FooterSection />

      {/* WhatsApp Contact Button */}
      <div>
        <Link
          href="https://wa.me/5493517730127"
          target="_blank"
          className="fixed bottom-5 right-5 rounded-full p-2 z-50 bg-[#29A71A]"
        >
          <Image
            src="/whatsapp.png"
            alt="Contact Icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
