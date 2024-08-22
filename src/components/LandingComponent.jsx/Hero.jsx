import React,{useRef} from "react";
import Header from "../../components/LandingComponent.jsx/Header";
import herobg from "../../images/bgheros.png";
import bag from "../../images/bag.svg";
import texture from "../../images/texture.png";
import heroimg from "../../images/heroimg.png";
import onion from "../../images/onion.png";
import corn from "../../images/corn.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

  

  useGSAP(() =>{
    gsap.to('#text',{
      opacity:1,
      duration:2,
      stagger:1
    })

    gsap.fromTo('#onion',{
      x: '-100%',
      opacity:0,
      duration:2
    },
    {
      x:0,
      opacity:1,
      duration:2
    }

   )

   gsap.from('#corn',{
     x:'100%',
     opacity:0,
     duration:2
   },
  //  {
  //   y:0,
  //   opacity:1,
  //   duration:2
  //  }
  ) 

  gsap.from('#heroimg',{
    y:'100%',
    duration:3,
    ease:'power1.in'
  })
    
  },[])
  return (
    <div className="overflow-hidden">
      <div className="px-4">
        <div className="relative">
          <img
            src={corn}
            alt=""
            className="absolute -right-[1rem] top-[21rem] "
            id='corn'
          />
          <img src={onion} alt="" className="absolute top-[23.7rem] left-[4rem] " id='onion' />
          <div className="  bg-[#FFE6AE]   w-full   mt-2 rounded-[15px] ">
            <img
              src={texture}
              alt=""
              className=" rounded-[15px] w-full min-h-[714px]   mix-blend-plus-lighter  object-cover "
            />
          </div>
          <div className="absolute top-2 w-full">
            <div className="flex items-center justify-center  w-full ">
              <Header />
            </div>
            <div className="text-center max-w-[596px] mx-auto flex flex-col gap-y-4 mt-6" >
              <p className="text-[#0F4400] font-semibold text-[64px] font-rubik  opacity-0  " id="text">
                Farm to Table <br /> Freshness.
              </p>
              <p className="text-[#4F584C] font-manrope font-medium text-[18px] opacity-0" id="text">
                From farm-fresh eggs to tender meats and wholesome vegetables,
                we're committed to delivering the highest quality products to
                your table.
              </p>
              <Link to="/" className="bg-[#0F4400]  px-[20px] gap-x-4  py-[12px]  mx-auto  text-white rounded-lg shadow-[0px_2px_12.8px_0px_rgba(0,0,0,0.25)] font-manrope text-[18px] font-semibold flex item items-center">

                <img src={bag} alt="" /> Visit our Store
              </Link>
            </div>
          </div>
          <div className=" sticky -mt-[13rem]   mx-auto  px-[8rem] w-full">
            {" "}
            <img src={heroimg} alt="" className=" mx-auto w-full" id="heroimg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
