import React from "react";
import People from "../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg";

const About = () => {
  return (
    <div id="about" className="bg-black/[0.95] text-white h-full py-12 px-20 w-full">
      <div className="w-40 py-2 m-auto">
        <h1 className="text-center text-secondary text-lg  border-b hover:text-orange-500 hover:border-orange-500 transition duration-300  font-semibold ">About Us</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div>
          <img src={People} alt="" className="h-72 w-72 my-8 md:my-2 md:w-80 image" />
        </div>
        <div className="flex my-10 w-auto md:w-[50%] flex-col">
          <h1 className="text-orange-400 text-xl my-2">People</h1>
          <h2 className=" text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias officiis, iure cupiditate quasi error voluptatibus. Consequatur sit, eos vero quos dolor fuga deserunt sunt explicabo labore adipisci accusantium id omnis commodi
            quis, consectetur ut libero? Optio obcaecati atque perspiciatis id.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
