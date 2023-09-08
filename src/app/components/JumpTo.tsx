import React from "react";

const JumpTo = () => {
  return (
    <div className=" hidden md:block w-full  pt-32">
      <div className=" px-10">
        <div className="w-full text-[130px]   font-bold">
          <p className="w-[50%] font-poly">JUMP TO</p>
        </div>
        <div className=" flex flex-col p-4 items-center justify-center  font-poly space-y-8">
          {/* work */}
          <div className=" w-full text-center py-4 rounded-full flex justify-center items-center text-[60px] text-black bg-white font-normal hover:bg-[#ffb762]">
            <p className=" ">WORK</p>
          </div>

          {/* About */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#c794ff]">
            <p className="rounded-full">ABOUT</p>
          </div>
          {/* Contact */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#f6ff8c]">
            <p className="rounded-full">CONTACT</p>
          </div>

          {/* faq */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#00d57b]">
            <p className="rounded-full">fAQ</p>
          </div>

          {/* wtf */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#c4c4c4]">
            <p className="rounded-full">WTF</p>
          </div>
          {/* instagram */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#ff6c6c]">
            <p className="rounded-full">INSTAGRAM</p>
          </div>

          {/* linkedin */}

          <div className=" w-full text-center py-4 rounded-full text-[60px] text-black bg-white font-normal hover:bg-[#6083ff]">
            <p className="rounded-full">LINKEDIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumpTo;
