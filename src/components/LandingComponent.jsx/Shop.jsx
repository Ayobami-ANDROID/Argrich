import React, { useEffect } from "react";

import LandingPageItem from "./LandingPageItem";


const Shop = () => {
  

  return (
    <div className="my-32 ">
      <div className="mx-auto px-20">
        <div className="text-start flex flex-col items-start gap-10">
          <p className="font-manrope font-semibold text-[38px] text-[#1A420E]">
            Shop our Online Store
          </p>
          <p className="font-manrope font-medium text-[20px] max-w-[574px] leading-[27.32px]">
            From farm-fresh eggs to tender meats and wholesome vegetables, we're committed to delivering the highest quality products to your table.
          </p>
          <button className="text-white font-manrope font-semibold text-base rounded-lg bg-[#0F4400] px-[20px] py-[12px]">
            Visit Store
          </button>
        </div>
        <div className="mt-10 flex overflow-x-scroll no-scrollbar w-full p-4" >
          <div className="flex gap-4">
            {Array(10)
              .fill(4)
              .map((_, i) => (
                <LandingPageItem
                  key={i}
                  image="https://res.cloudinary.com/dpoxdw78e/image/upload/v1/media/products/Egg_jfbp3t"
                  name={"Eggs (1 Crate)"}
                  price={"96"}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
