import React from "react";
import { CardNavbar } from "../components";
import { About, Product, Testimonial } from "./";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div id="home" className="header h-screen md:h-[70vh] bg-cover bg-no-repeat bg-center md:-mt-16 relative">
        <div className="bg-black/40 h-screen text-white z-40 w-full absolute md:h-[70vh] items-center justify-evenly flex-col px-2 pt-5 md:pt-20 flex ">
          <div className="flex flex-col  text-secondary ">
            <h1 className=" text-center text-xl md:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
            <p className="text-center text-slate-200 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi repellendus asperiores vero est, voluptates excepturi odio veritatis molestiae ipsum fugit!</p>
          </div>

          <a href="#contact" className=" rounded-sm px-3 flex items-center py-2 space-x-2 hover:bg-orange-600 transition duration-300 bg-orange-500 ">
            <p>Contact Now</p>
            <AiOutlineArrowRight className="text-xl" />
          </a>
        </div>
      </div>
      <div className="h-auto md:my-[14px]">
        <CardNavbar />
      </div>

      <About />
      <Product />
      <Testimonial />
    </>
  );
};

export default Header;
