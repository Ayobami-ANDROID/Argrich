import React from "react";
import Logo from "../../images/Argrich Logo Full 00.png";
import { Link } from "react-router-dom";
import link from "../../images/icons/accordion.svg";

const SmallHeader = () => {
  return (
    <div className="px-4 mt-8 mb-5 md:hidden">
      {" "}
      <div className="flex w-full justify-between items-center ">
        <Link to="/" className="">
          <img src={Logo} className="w-32 object-contain" />
        </Link>
        <div className="flex gap-4 items-center">
          <img src={link} alt="" className="object-contain w-8" />
          <p className="text-[#0F4400] font-manrope font-semibold text-sm ">Menu</p>
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
