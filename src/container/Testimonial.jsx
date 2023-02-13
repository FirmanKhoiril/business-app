import React from "react";

import { TestimonialCard } from "../components";

const Testimonial = () => {
  return (
    <div id="testimonial" className=" background h-full w-full text-white">
      <h2 className="text-white text-center py-16">
        <span className="tracking-wider px-4 text-2xl text-secondary font-extrabold">Testimonials</span>
      </h2>
      <div className="flex justify-evenly items-center flex-col lg:flex-row py-12 px-20 space-y-16 lg:space-y-0">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
