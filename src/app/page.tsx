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
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  // const scrollRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Function to handle smooth scrolling
  //   const handleScroll = (e: WheelEvent) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const currentScroll = scrollRef.current!.scrollTop;

  //     // Adjust the scrolling speed by multiplying deltaY with a factor
  //     const scrollSpeed = 8; // You can adjust this value to increase/decrease speed
  //     const newScroll = currentScroll + deltaY * scrollSpeed;

  //     // Perform smooth scrolling
  //     scrollRef.current!.scrollTo({
  //       top: newScroll,
  //       behavior: "smooth",
  //     });
  //   };

  //   const scrollRefCurrent = scrollRef.current; // Capture the current value

  //   // Attach the scroll event listener to the scrollable container
  //   scrollRefCurrent!.addEventListener("wheel", handleScroll, {
  //     passive: false,
  //   });

  //   return () => {
  //     // Remove the scroll event listener when the component unmounts
  //     scrollRefCurrent!.removeEventListener("wheel", handleScroll);
  //   };
  // }, [scrollRef]); // Added scrollRef as a dependency

  return (
    <div
    
      // ref={scrollRef}
      // style={{
      //   height: "100vh",
      //   overflowY: "scroll",
      //   scrollBehavior: "smooth",
      // }}
      className="bg-black text-white w-full h-full  "
    >
      <Navigation />
      <Hero />
      <FeatureWork />
      <OurService />
      <JumpTo />

      <Footer />
    </div>
  );
}
