"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./animations/Motion";

const images = [
  "/assets/illustration_1.svg",
  "/assets/illustration_2.svg",
  "/assets/illustration_3.svg",
  "/assets/illustration_4.svg",
  "/assets/illustration_5.svg",

  // Add more image paths here
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleMouseEnter: any = () => {
    // Mouse enters the image area
    // Start changing images
    setCurrentIndex(0);
    requestAnimationFrame(changeImage);
  };

  const handleMouseMove = () => {
    // Mouse is moving over the image area
    // Continue changing images
    requestAnimationFrame(changeImage);
  };

  const handleMouseLeave = () => {
    // Mouse leaves the image area
    // Stop changing images
    cancelAnimationFrame(changeImage);
  };

  const changeImage: any = () => {
    if (currentIndex < images.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 100);
    } else {
      setTimeout(() => setCurrentIndex(0), 100);
    }
  };

  return (
    <div className="w-full bg-black pt-32">
      <div className="max-w-[100%] mx-auto px-3 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" text-[20px] md:text-[32px] "
        >
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="md:w-[40%] font-poly "
          >
            Hi. We are a small collection of senior creatives and strategists
            with experience in building brands of others, and our own.
          </motion.p>
        </motion.div>

        <div
          className="mt-20 "
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <img src={images[currentIndex]} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
