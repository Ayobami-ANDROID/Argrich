import React from "react";
import img1 from "../../images/veg/image 1.png";
import img2 from "../../images/veg/image 3.png";
import img3 from "../../images/veg/image 5.png";
import img4 from "../../images/veg/image 8.png";
import img5 from "../../images/veg/image 10.png";
import img6 from "../../images/veg/image 17.png";
import img7 from "../../images/veg/image 11.png";
import img8 from "../../images/veg/image 19.png";
import img9 from "../../images/veg/image 9.png";
import img10 from "../../images/veg/image 2.png";

const Produce = () => {
  return (
    <div className="min-h-[800px] relative  mt-10 w-full ">
      <div className=" px-20  w-full"><div className="border-[1.6px] border-[#C5C5C5] -20 mx-auto "></div></div>
      <div className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <p className="font-manrope font-semibold text-center text-xl xl:text-[34px] text-[#004802] w-full max-w-[992px] mx-auto">
          Our farm also produces an abundance of crops such as maize, yams,
          beans, ginger, and other fresh vegetables.
        </p>
      </div>
      <img src={img1} alt="" className="absolute right-0 mt-10" />
      <img src={img2} alt="" className="absolute right-32 mt-14 mr-20 " />
      <img src={img3} alt="" className="absolute right-[40rem] mt-32" />
      <img src={img4} alt="" className="absolute left-[20rem] mt-32" />
      <img src={img5} alt="" className="absolute left-0 mt-36" />
      <img src={img6} alt="" className="absolute left-[2rem] mt-[30rem]" />
      <img src={img7} alt="" className="absolute left-[20rem] mt-[32rem]" />
      <img src={img8} alt="" className="absolute left-[38rem] mt-[35rem]" />
      <img src={img9} alt="" className="absolute left-[61rem] mt-[34rem]" />
      <img src={img10} alt="" className="absolute right-0 mt-[24rem]" />
    </div>
  );
};

export default Produce;
