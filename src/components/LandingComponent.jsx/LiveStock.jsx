import React from "react";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


import "@splidejs/splide/dist/css/splide.min.css";
import img1 from "../../images/livestock/1.png";
import img2 from "../../images/livestock/2.png";
import img3 from "../../images/livestock/3.png";
import img4 from "../../images/livestock/4.png";
import img5 from "../../images/livestock/5.png";
import img6 from "../../images/livestock/6.png";
import img7 from "../../images/livestock/7.png";
import img8 from "../../images/livestock/8.png";

const LiveStock = () => {
  return ( 
    <div className=" mt-10">
    {" "}
    <div className="flex pl-20 font-manrope font-semibold text-[#004802] text-[34px] w-full ">
      <span> We raise a variety of livestock</span>
    </div>

    <Splide
      className="mt-10 flex items-center "
      options={{
        type: "loop",
        drag: "free",
        gap: "100px",
        pagination: false,
        arrows: false,
        perPage: 4,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: true,
          speed: -0.5,
        },
      }}
      extensions={{ AutoScroll }}
      aria-label="My Favorite Images"
    >
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img
          src={img1}
          alt=" Chicks and Chickens"
          className="object-contain"
        />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Chicks & <br /> Chickens
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img2} alt=" Turkeys" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Turkeys
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img3} alt="Guinea Fowls" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Guinea Fowls
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img4} alt=" Ducks" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Ducks
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img5} alt="Cows" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Cows
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img6} alt=" Goats" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Goats
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img7} alt="Geese" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Geese
        </div>
      </SplideSlide>
      <SplideSlide className="flex flex-col w-full  gap-4 ">
        <img src={img8} alt="Sheep" className="object-contain" />
        <div className="font-manrope w-full  text-start text-[28px] font-semibold text-[#0F4400]">
          Sheep
        </div>
      </SplideSlide>
    </Splide>
    <div className="w-full mx-auto px-20 mt-20">
      <button className="shadow-[9px_0px_12.8px_rgba(0,_0,_0,_0.25)] text-white rounded-lg bg-[#0F4400] px-[20px] py-[12px]">
        Argrich Store
      </button>
    </div>
  </div>
  );
};

export default LiveStock;
