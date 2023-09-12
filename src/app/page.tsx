"use client";
import {
  FeatureWork,
  Footer,
  Hero,
  JumpTo,
  Navigation,
  OurService,
} from "./components";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll"; // locomotive-scroll package import karein
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotive = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, // Smooth scrolling enable karein
        // Aur agar aur configurations chahiye to unhe yahan set karein
      });
    }
  }, []);
  return (
    <div className="bg-black text-white w-full h-full  ">
      <Navigation />
      <SmoothScroll>
        <Hero />
        <FeatureWork />
        <OurService />
        <JumpTo />
      </SmoothScroll>

      <Footer />
    </div>
  );
}
