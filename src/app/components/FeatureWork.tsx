"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";
import { fadeIn, staggerContainer } from "./animations/Motion";

const FEATURE_DATA = [
  {
    img: "/assets/wild.webp",
    head: "AIGA SF WILD",
    decs: "Growing diverse strengths for change",
  },
  {
    img: "/assets/atmcard.webp",
    head: "LEVEL",
    decs: "Making employer benefits as simple as cash",
  },
  {
    img: "/assets/mobile.webp",
    head: "MISCHIEF",
    decs: "Creating a VC fund for founder, created by founders",
  },
  {
    img: "/assets/pregnancyTest.webp",
    head: "MODERN FERTILITY",
    decs: "Demystifying the topic of fertility",
  },
];

const FeatureWork = () => {
  return (
    <div className="w-full pt-28">
      <div className=" px-4 md:px-10">
        <div className="w-full text-[50px] md:text-[130px]  font-bold">
          <p className="w-[50%] font-poly">FEATURE WORK</p>
        </div>

        {FEATURE_DATA.map(({ img, head, decs }, index) => (
          <div key={index}>
            <div className=" relative h-[300px] md:h-[700px] w-full mt-20 md:mt-32  ">
              <Image fill src={img} alt="/" className="image-container " />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className=" mt-4 md:mt-10 cursor-pointer font-poly"
            >
              <motion.div  variants={fadeIn('up', 'tween', 0.2, 1)} className="w-full ">
                <p className="text-[32px] md:text-[48px] font-semibold">
                  {head}
                </p>
                <p className="text-[20px] md:text-[35px] font-normal">{decs}</p>
              </motion.div>
            </motion.div>
          </div>
        ))}
        <div className=" mt-20 md:mt-32 w-full text-center py-4 rounded-full font-poly text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#c4c4c4]">
          <p className="rounded-full">VIEW ALL</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureWork;
