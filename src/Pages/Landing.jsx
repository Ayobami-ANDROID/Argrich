import React from "react";
import Hero from "../components/LandingComponent.jsx/Hero";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col mt-10 mb-10 gap-y-7
      ">
        {" "}
        <p className="text-center text-[#0F4400] font-semibold font-manrope text-[34px]">
          Our farm is a thriving five-hectare oasis <br /> located in Kuje, Abuja.
        </p>
        <button className="mx-auto px-[20px] py-[12px] shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] bg-[#0F4400] rounded-lg text-white font-manrope  font-semibold text-base">
          Direction
        </button>
      </div>
    </div>
  );
};

export default Landing;
