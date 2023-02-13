import React from "react";
import { Jam, Kacamata, Headset1, Headset2, Jam2, Headset } from "../assets";

// styles section card and image
const imageTL = "w-[280px] shadow-lg lg:w-[320px] h-[320px] rounded-lg";
const card = "absolute rounded-b-lg text-center bottom-0 bg-black/20 text-white w-full h-20";

const ProductCard = () => {
  return (
    <>
      <div className="relative hover:scale-105 duration-500 transition lg:my-4">
        <img src={Jam} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Watch
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
      <div className="relative hover:scale-105 duration-500 transition">
        <img src={Headset} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Headphone
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
      <div className="relative hover:scale-105 duration-500 transition">
        <img src={Kacamata} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Glasses
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
      <div className="relative hover:scale-105 duration-500 transition">
        <img src={Jam2} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Watch
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
      <div className="relative hover:scale-105 duration-500 transition">
        <img src={Headset2} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Headphone
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
      <div className="relative hover:scale-105 duration-500 transition">
        <img src={Headset1} loading="lazy" className={`${imageTL}`} alt="" />
        <h2 className={`${card}`}>
          Headphone
          <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
        </h2>
      </div>
    </>
  );
};

export default ProductCard;
