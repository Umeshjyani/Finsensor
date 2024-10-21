'use client'
import Footer from "@/customComponets/Footer/page";
import  Leaders  from "@/customComponets/Leaders/Leaders";
import Navbar from "@/customComponets/Navbar/page";
import Products from "@/customComponets/Products/page";
import SliderSection from "@/customComponets/slidersection/page";
import Whowe from "@/customComponets/WhoWeAre/Whowe";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, [])

  return (
    <main>
      <Navbar />
      {/* className="h-[calc(100vh_-_4rem)]" */}
      <div >
        <SliderSection />
        <div id="leaders_pagejs" className="flex items-center mst-10 mt-4">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Who We Are</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>
        <Whowe />
        <div className="flex items-center mb-5">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Products</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>
        <Products />
        {/* <div className="flex items-center mb-5">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Over Location</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>
        <MapPage /> */}
        <div id="leaders_pagejs" className="flex items-center mst-10 mt-4">
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-2xl">Team Leaders</div>
          <div className="border-t border-4 border-gray-400 flex-grow"></div>
        </div>
        <Leaders />
        {/* <PricingPage /> */}
        <Footer />
      </div>
    </main>
  );
}
