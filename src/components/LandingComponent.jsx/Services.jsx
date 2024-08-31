import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../images/services/img1.png";
import img2 from "../../images/services/img2.png";
import img3 from "../../images/services/img3.png";
import img4 from "../../images/services/img4.png";
import img5 from "../../images/services/img5.png";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray('.service-section');
    
    sections.forEach((section, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        }
      });

      tl.from(section, {
        x: `${100 * direction}%`,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Animate the text separately
      tl.from(section.querySelectorAll('.animate-text'), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5");

      // Animate the images
      tl.from(section.querySelectorAll('img'), {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.2
      }, "-=0.5");
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-20 overflow-hidden" id="content">
      <div className="flex gap-x-4 items-center w-full justify-center">
        <div className="service-section bg-[#FF951F] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[679px]">
          <div className="max-w-[581px] w-full">
            <p className="animate-text text-white font-bold font-manrope text-[28px]">
              Farm-to-Fork Freshness
            </p>
            <p className="animate-text text-white font-medium font-manrope text-base leading-[21.86px] text-start">
              Savor the pure taste of nature with our handpicked, seasonal
              produce. Cultivated with care on our farm, our vegetables are
              bursting with flavor and essential nutrients.
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className="absolute -bottom-[2.1rem] translate-x-1/2 right-1/2"
          />
          <img
            src={img2}
            alt=""
            className="absolute object-contain w-[16rem] -bottom-[4.2rem] -right-[2.8rem]"
          />
        </div>
        <div className="service-section bg-[#4E070B] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[300px]">
          <p className="animate-text text-white font-manrope font-bold text-[28px] max-w-[255px]">
            Excellent Eggs to start your day
          </p>
          <img src={img3} alt="" className="absolute -right-10" />
        </div>
      </div>
      <div className="flex gap-x-4 items-center w-full justify-center mt-6">
        <div className="service-section bg-[#6CDE40] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[300px]">
          <p className="animate-text font-manrope font-bold text-[28px] text-white">
            Fast Delivery, Fresh Flavor
          </p>
          <img src={img4} alt="" className="absolute -right-8 -bottom-7" />
        </div>
        <div className="service-section bg-[#005C2D] min-h-[300px] py-[12px] px-[20px] rounded-lg relative w-full max-w-[679px]">
          <div className="max-w-[639px] w-full">
            <p className="animate-text text-white font-bold text-[28px] leading-[38.25px] font-manrope">
              Prime Cuts, Perfect Taste
            </p>
            <p className="animate-text text-[#F2F2F2] text-base font-medium font-manrope">
              Raised in open pastures and nourished with natural feed, our
              livestock produces tender and juicy cuts.
            </p>
            <img src={img5} alt="" className="absolute -right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;