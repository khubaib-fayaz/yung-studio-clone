"use client"
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./animations/Motion";

const SERVICES_DATA = [
  {
    text: "POSITIONING",
  },
  {
    text: "IDENTITY SYSTEM ",
  },
  {
    text: "2D/3D GRAPHICS ",
  },
  {
    text: "ART DIRECTION ",
  },
  {
    text: "PACKAGING",
  },
  {
    text: "WEBSITE ",
  },
  {
    text: "UX/UI ",
  },
  {
    text: "SOCIAL",
  },
  {
    text: "COLLATERAL    ",
  },
  {
    text: "BAY AREA RECOS ",
  },
  {
    text: "NICHE DESIGN JOKES ",
  },
];

const OurService = () => {
  return (
    <div className="w-full pt-20 md:pt-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={fadeIn('up', 'tween', 0.1, 1)} className=" px-4 md:px-10">
          <div className="w-full text-[50px] md:text-[130px]  font-bold">
            <p className="w-[50%] font-poly">OUR SERVICES</p>
          </div>

          <div className="flex flex-col mt-16 md:mt-0 ">
            {SERVICES_DATA.map(({ text }, index) => (
              <div
                key={index}
                className="flex items-center space-x-5 py-2 md:py-4  w-full  "
              >
                <div className="w-10 h-10  md:w-14 md:h-14 rounded-full bg-white" />
                <p className="text-[24px] md:text-[40px] font-bold font-poly ">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurService;
