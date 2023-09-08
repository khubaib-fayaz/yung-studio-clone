"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setNav(!nav);

    // Toggle the animation for the hamburger icon
    controls.start({ scaleY: nav ? 1 : 0.10 });
  };

  return (
    <div className="fixed w-full z-[999] h-[80px] flex justify-between items-center px-10 bg-black ">
      <div className="font-poly text-[24px] md:text-[30px]  font-extrabold">
        <p>Yung Studio</p>
      </div>

      {/* Hamburger */}
      {/* <div onClick={handleClick}>
        {!nav ? (
          <motion.div

           className="w-full space-y-1">
            {" "}
            <div className="w-14 h-4 rounded-full bg-white"></div>{" "}
            <div className="w-14 h-3 rounded-full bg-white"></div>{" "}
            <div className="w-14 h-2 rounded-full bg-white"></div>{" "}
          </motion.div>
        ) : (
          <div className="">
            <div className="w-14 h-1 my-5  bg-white"></div>
          </div>
        )}
      </div> */}
      <motion.div onClick={handleClick}>
        {!nav ? (
          <motion.div
            className="w-full space-y-1"
            initial={{ opacity: 1 }}
            animate={controls}
          >
            <div className=" h-2 w-10 md:w-14 md:h-4 rounded-full bg-white"></div>
            <div className=" h-2 w-10 md:w-14 md:h-3 rounded-full bg-white"></div>
            <div className=" h-2 w-10 md:w-14 md:h-2 rounded-full bg-white"></div>
          </motion.div>
        ) : (
          <motion.div className="" initial={{ opacity: 1 }} animate={controls}>
            <div className=" w-10 md:w-14 h-10 my-5 bg-white"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: "-2%" }}
        whileInView={{ opacity: 1 }}
        animate={nav ? { y: 0 } : { y: "-2%" }}
        viewport={{ once: false, amount: 0.25 }}
        exit={{ y: "-2%" }}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 mt-20 pt-6    w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <div className="overflow-y-auto w-full pb-24  h-screen no-scrollbar">
          <div className=" flex flex-col p-4 items-center justify-center font-poly space-y-6 md:space-y-8">
            {/* work */}
            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#ffb762]">
              <p className="rounded-full">WORK</p>
            </div>

            {/* About */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#c794ff]">
              <p className="rounded-full">ABOUT</p>
            </div>
            {/* Contact */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#f6ff8c]">
              <p className="rounded-full">CONTACT</p>
            </div>

            {/* faq */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#00d57b]">
              <p className="rounded-full">FAQ</p>
            </div>

            {/* wtf */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#c4c4c4]">
              <p className="rounded-full">WTF</p>
            </div>
            {/* instagram */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#ff6c6c]">
              <p className="rounded-full">INSTAGRAM</p>
            </div>

            {/* linkedin */}

            <div className=" w-full text-center py-4 rounded-full  text-[30px] md:text-[60px] text-black bg-white font-normal hover:bg-[#6083ff]">
              <p className="rounded-full">LINKEDIN</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
