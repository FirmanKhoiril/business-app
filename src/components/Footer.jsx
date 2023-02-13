import React from "react";
import { AiFillSetting, AiOutlineTeam } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const link = [{ name: "about" }, { name: "product" }, { name: "testimonial" }];
const links = [
  { name: "Teams", icon: <AiOutlineTeam className="" /> },
  { name: "Setting", icon: <AiFillSetting className="" /> },
  { name: "Support", icon: <BiSupport className="" /> },
];

const Footer = () => {
  return (
    <div id="contact" className="sm:px-[82px] xs:px-[48px] px-[40px] md:px-10 py-10 text-white bg-black/[0.95] w-full flex justify-evenly md:flex-row flex-col items-start lg:items-center">
      <h2 className="mb-4 text-white/80">@CopyRight By @Lorem,ipsum.</h2>
      <div className="flex flex-col items-baseline text-secondary space-y-4 mb-2 px-2">
        {link.map((item) => (
          <ul key={item.name}>
            <li>
              <a className="hover:text-orange-500 transition duration-300 cursor-pointer" href={`#${item.name}`}>
                {item.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-col text-secondary items-stretch my-2 space-y-4">
        <h2 className="text-orange-500 text-xl">Service</h2>
        {links.map((item) => (
          <div className="flex items-center space-x-2" key={item.name}>
            <span>{item.icon}</span>
            <p className="hover:text-orange-500 transition duration-300 cursor-pointer">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="py-3 md:py-1 my-1 ">
        <form className="flex text-white space-y-2 flex-col justify-between">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Your Name</label>
            <input type="text" pattern="[A-Za-z ]*" className="h-10 invalid:animate-bounce w-52 xs:w-80 px-2 bg-transparent border-b border-b-white outline-none focus:border-orange-500 text-white" placeholder="Name" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email Address</label>
            <input
              type="text"
              pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
              className="invalid:animate-bounce h-10 w-52 xs:w-80 px-2 bg-transparent border-b border-b-white outline-none focus:border-orange-500 text-white"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Message</label>
            <textarea type="text" className="h-12 w-52 xs:w-80 py-1 pb-10 px-2 bg-transparent border-b border-b-white outline-none focus:border-orange-500 text-white" placeholder="Message"></textarea>
          </div>
          <div className="flex items-center">
            <button type="reset" className="py-2 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition duration-150">
              Submit
            </button>
            <p className="text-[12px] text-gray-400 space-x-4 ml-3">If bounced,because invalid email/name</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
