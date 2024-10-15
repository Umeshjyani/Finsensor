'use client'
import Footer from "@/customComponets/Footer/page";
import { Leaders } from "@/customComponets/Leaders/page";
import MapPage from "@/customComponets/Map/page";
import Navbar from "@/customComponets/Navbar/page";
import PricingPage from "@/customComponets/PricingPage/page";
import Products from "@/customComponets/Products/page";
import SliderSection from "@/customComponets/slidersection/page";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, [])

  return (
    <main>
      <div className="sticky  top-0 z-50">
        <Navbar />
      </div>
      <div className="h-[calc(100vh_-_4rem)]">
        <SliderSection />
        <div className="flex items-center mb-5">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Products</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>

        <Products />
        <div className="flex items-center mb-5">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Over Location</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>
        <MapPage />
        <div id="leaders_pagejs" className="flex items-center mst-10">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Team Leaders</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>

        <Leaders />
        {/* <PricingPage /> */}
        {/*  */}
        <Footer />
      </div>
    </main>
  );
}
