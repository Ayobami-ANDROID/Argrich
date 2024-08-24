import React from "react";
import img1 from "../../images/services/img1.png";
import img2 from "../../images/services/img2.png";
import img3 from "../../images/services/img3.png";
import img4 from "../../images/services/img4.png";
import img5 from "../../images/services/img5.png";

const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <div className="flex gap-x-4 items-center w-full justify-center">
        <div className="bg-[#FF951F] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[679px]">
          <div className="max-w-[581px] w-full">
            <p className="text-white font-bold font-manrope text-[28px]">
              Farm-to-Fork Freshness
            </p>{" "}
            <p className="text-white font-medium font-manrope text-base leading-[21.86px] text-start">
              Savor the pure taste of nature with our handpicked, seasonal
              produce. Cultivated with care on our farm, our vegetables are
              bursting with flavor and essential nutrients.
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className="absolute -bottom-[2.1rem]   translate-x-1/2 right-1/2"
          />
          <img
            src={img2}
            alt=""
            className="absolute  object-contain w-[16rem] -bottom-[4.2rem]  -right-[2.8rem]"
          />
        </div>
        <div className="bg-[#4E070B]  min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[300px]">
          <p className="text-white font-manrope font-bold text-[28px] max-w-[255px]">
            Excellent Eggs to start your day
          </p>
          <img src={img3} alt="" className="absolute  -right-10" />
        </div>
      </div>
      <div className="flex gap-x-4 items-center w-full justify-center mt-6">
        <div className="bg-[#6CDE40] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[300px] ">
          <p className="font-manrope font-bold text-[28px] text-white ">
            Fast Delivery, Fresh Flavor
          </p>
          <img src={img4} alt="" className="absolute -right-8 -bottom-7" />
        </div>
        <div className="bg-[#005C2D] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[679px]">
          <div className="max-w-[639px] w-full">
            <p className="text-white font-bold text-[28px] leading-[38.25px] font-manrope">
              Prime Cuts, Perfect Taste
            </p>{" "}
            <p className="text-[#F2F2F2] text-base  font-medium font-manrope">
              Raised in open pastures and nourished with natural feed, our
              livestock produces tender and juicy cuts.{" "}
            </p>
            <img src={img5} alt="" className="absolute -right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
