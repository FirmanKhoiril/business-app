import React from "react";
import { AiFillSetting, AiOutlineTeam } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const buttonLink = [
  { name: "Teams", icon: <AiOutlineTeam className="text-[60px] mt-3 pb-1  mx-4 border-b border-white" /> },
  { name: "Setting", icon: <AiFillSetting className="text-[60px] mt-3 pb-1  mx-4 border-b border-white" /> },
  { name: "Support", icon: <BiSupport className="text-[60px] mt-3 pb-1  mx-4 border-b border-white" /> },
];

const CardNavbar = () => {
  return (
    <div className="flex md:-mt-[90px] sticky z-40 justify-around items-center md:py-0 md:space-x-8  py-9 md:flex-row flex-col w-full h-auto md:px-52 px-6 sm:px-20 ">
      {buttonLink.map((item, idx) => (
        <div key={idx} className="rounded-xl bg-orange-500  space-x-2 px-12 m-2 text-white flex flex-col  items-center py-5 space-y-4">
          {item.icon}
          <div className="mx-3 mt-2">
            <h2 className="text-center">{item.name}</h2>
            <p className=" text-sm my-2 text-center mx-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, repudiandae!</p>
          </div>
          <button type="button" className="py-2 text-secondary font-semibold px-3 rounded-md transition-all duration-500 hover:bg-orange-500 hover:text-white hover:border-white border bg-white text-orange-500">
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardNavbar;
