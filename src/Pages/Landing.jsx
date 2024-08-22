import React from "react";
import Header from "../components/LandingComponent.jsx/Header";
import herobg from "../images/bgheros.png";
import bag from "../images/bag.svg";
import texture from "../images/texture.png";
import heroimg from "../images/heroimg.png";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <div className="relative">
          {" "}
          <div className="  bg-[#FFE6AE] min-h-screen  inline-block w-full  bg-cover  mt-2 rounded-[15px] ">
            <img
              src={texture}
              alt=""
              className=" rounded-[15px]    mix-blend-plus-lighter  object-cotain"
            />
          </div>
          <div className="absolute top-4 w-full">
            <div className="flex items-center justify-center  w-full ">
              <Header />
            </div>
            <div className="text-center max-w-[596px] mx-auto space-y-4">
              <p className="text-[#0F4400] font-semibold text-[64px] font-rubik  mt-6">
                Farm to Table <br /> Freshness.
              </p>
              <p className="text-[#4F584C] font-manrope font-medium text-[18px]">
                From farm-fresh eggs to tender meats and wholesome vegetables,
                we're committed to delivering the highest quality products to
                your table.
              </p>
              <button className="bg-[#0F4400]  px-[20px] gap-x-4  py-[12px]  mx-auto  text-white rounded-lg shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] font-manrope text-[18px] font-semibold flex item items-center">
                <img src={bag} alt="" /> Visit our Store
              </button>
            </div>
          </div>
          <div className="absolute -bottom-72 mx-auto left-1/2  transform  -translate-x-1/2 px-10 w-full">
            {" "}
            <img
              src={heroimg}
              alt=""
              className=" mx-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
