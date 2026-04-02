"use client"

import Navbar from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import ProductsShowcase from "@/components/products-showcase"
import CompanyStatsSection from "@/components/company-stats-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col items-center">
      <div className="relative flex flex-col items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col items-start min-h-screen">
          {/* Vertical border lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0" />

          <div className="self-stretch pt-[9px] flex flex-col items-center relative z-10">
            <Navbar />
            <HeroSection />
            <div id="products" className="w-full">
              <ProductsShowcase />
            </div>
            <CompanyStatsSection />
            <ContactSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
