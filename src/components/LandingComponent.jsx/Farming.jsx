import React from "react";
import img from "../../images/potted_plant.svg";
const Farming = () => {
  return (
    <div>
      <div className="max-w-[847px] mx-auto flex flex-col items-center justify-center gap-4 mt-20">
        <div className="bg-[#E9FFD5] rounded-full h-16 w-16 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <p className="font-manrope font-bold text-[32px] text-[#1A420E] mt-2">
          We're committed to sustainable farming.{" "}
        </p>
        <p className="text-[#6C6C6C] text-center font-medium text-[20px] ">
          Our operations adhere to the strictest international standards to
          ensure that our products are not only of the highest quality but also
          produced in harmony with nature. We believe in nurturing the land
          while providing exceptional products.{" "}
        </p>
      </div>
    </div>
  );
};

export default Farming;
