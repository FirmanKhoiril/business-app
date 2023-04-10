import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/save-removebg-preview.png";

const link = [
  {
    name: "about",
  },
  { name: "product" },
  { name: "testimonial" },
];
const links = [
  { icon: <AiOutlineLinkedin className="text-2xl transition duration-300 cursor-pointer hover:text-sky-500" /> },
  {
    icon: <AiOutlineFacebook className="text-2xl transition duration-300 cursor-pointer hover:text-blue-600" />,
  },
  {
    icon: <AiOutlineInstagram className="text-2xl transition duration-300 cursor-pointer hover:text-pink-500" />,
  },
];

const linkHover = "hover:text-orange-500 transition-all ease-in duration-300";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="py-3 px-4 bg-black z-50 text-white w-full sticky top-0">
      <div className="flex justify-around items-center">
        <div className="font-bold cursor-pointer text-lg flex items-center">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
          <h2 className="text-secondary">Mifuta Studio</h2>
        </div>

        <div className=" hidden text-[16px] md:flex items-center space-x-6">
          <a href="#home" className={`${linkHover} border-b hover:border-orange-500`}>
            Home
          </a>
          {link.map((item) => (
            <a className={`${linkHover} capitalize`} href={`#${item.name}`} key={item.name}>
              {item.name}
            </a>
          ))}
          <div>
            <input type="text" placeholder="Search Products" className="p-2 outline-none bg-white/10 rounded-md" />
          </div>
        </div>
        <div className="md:flex hidden justify-between space-x-4">
          {links.map((item, idx) => (
            <div key={idx}>{item.icon}</div>
          ))}
        </div>

        {/*  mobile version */}
        <div className="flex relative items-center md:hidden w-9 h-9">
          {!mobileOpen ? <AiOutlineMenu onClick={() => setMobileOpen((prev) => !prev)} className="text-xl text-white" /> : <AiOutlineClose onClick={() => setMobileOpen((prev) => !prev)} className="text-xl text-white " />}

          {mobileOpen && (
            <div className="w-full h-screen mt-[67px] bg-black/80 top-0 right-0 py-2  fixed flex items-start flex-col">
              <div className="flex mt-4 flex-col absolute top-0 items-center space-y-6">
                <div>
                  <input type="text" placeholder="Search Products" className="p-2 w-56 ml-16 outline-none bg-white/20 rounded-md" />
                </div>
                <a href="#home" className={`${linkHover} border-b hover:border-orange-500 `}>
                  Home
                </a>
                {link.map((item) => (
                  <a className={`${linkHover} capitalize`} href={`#${item.name}`} key={item.name}>
                    {item.name}
                  </a>
                ))}

                <div className="flex space-x-2 items-center justify-between">
                  {links.map((item) => (
                    <div className="">{item.icon}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
