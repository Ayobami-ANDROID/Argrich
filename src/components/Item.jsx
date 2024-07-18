import React, { useState } from "react";
import img1 from "../images/egg.png";
import cart from "../images/cart.svg";
import cart2 from "../images/cart2.svg";
const Item = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white hover:scale-105 hover:duration-500 hover:ease-in-out cursor-pointer p-2 min-h-[391px] w-fit rounded-xl shadow-[0px_1px_7.2px_-2px_rgba(0,_0,_0,_0.25)]">
      <img src={img1} alt="" />
      <div className="space-y-3 py-2">
        {" "}
        <div className="flex items-center justify-between">
          <p className="s">Eggs (1 Crate)</p>
          <p className="s">₦95.00</p>
        </div>
        <p className="text-[#1D2739]">30pcs</p>
        <div
          onMouseEnter={() => setIsHovered((prev) => !prev)}
          onMouseLeave={() => setIsHovered((prev) => !prev)}
          className="rounded-full flex hover:bg-[#318000] text-[#475367] hover:text-white cursor-pointer  border-[#D0D5DD] border  gap-x-2 p-2 px-3 w-fit"
        >
          <img src={isHovered ? cart2 : cart} alt="" />{" "}
          <p className=" font-semibold text-[14px]">Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
