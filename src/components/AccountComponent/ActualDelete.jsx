import React from "react";
import { useDispatch } from "react-redux";
import {
  setIsOpen1,
  setIsOpen2,
  setIsOpen3,
} from "../../features/deleteaccountmodal/deleteaccountslice";
import close from "../../images/icons/close.svg";
import bullet from "../../images/icons/bullet.svg";
import bin from "../../images/icons/delete2.svg";

const ActualDelete = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setIsOpen2(false));
        }}
        className="fixed h-screen w-full bg-black/25 z-[100] cursor-pointer flex   justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg bg-[#FBFBFB] font-manrope  shadow-[2px_4px_19.4px_-3px_rgba(0,_0,_0,_0.25)] max-w-[461px] w-full px-3 rounded-[20px] h-fit mt-24 py-2 pb-6 pt-1 "
        >
          <div
            className="flex items-center justify-between py-2 h-[52px]
            "
          >
            <p className="text-[16px] font-semibold font-manrope">
              {" "}
              Edit Profile Photo
            </p>
            <button
              onClick={() => {
                dispatch(setIsOpen2(false));
              }}
              className="h-[20px] w-[20px]"
            >
              <img src={close} alt="" />
            </button>
          </div>
          <div className="mt-8 px-4 w-full">
            <p className="font-bold text-[16px] font-manrope">
              Write the full name associated with <br /> this account to Proceed
            </p>
            <input
              type="text"
              placeholder="Full Name"
              className="h-[46px] font-manrope focus:outline-none placeholder:text-[#6C6C6C] px-4 w-full rounded-[5px] mt-2 bg-[#F2F2F2] border border-[#D0D5DD]"
            />

           
            
            <button
              onClick={() => {
                dispatch(setIsOpen2(false));
                dispatch(setIsOpen3(true));
              }}
            className="flex mx-auto mt-16 font-manrope gap-3  w-fit justify-center rounded-lg items-center py-[8px] px-[16px]  bg-[#950202] text-white">
               <img src={bin} alt="" /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActualDelete;
