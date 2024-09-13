import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backicon from "../images/icons/back.svg";
import lock from "../images/icons/lock.svg";
import password1 from "../images/icons/password1.svg";

const NewPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[448px] px-4 lg:px-0 mx-auto w-full mt-16">
      <div className="bg-white  rounded-[12px] w-full p-5 mt-2 shadow-[4px_4px_13.4px_0px_rgba(152,_152,_152,_0.25)]">
        <div className="p-[10px] bg-[#E0FFE5] flex items-center justify-center w-fit">
          <img src={password1} alt="" />
        </div>
        <p className="font-manrope font-semibold text-[24px] mt-2">
          Create new Password
        </p>
        <p className="font-manrope font-medium text-[16px] text-[#8C8C8C]">
          Must be at least 8 characters
        </p>

        <div className="flex flex-col mt-7 ">
          <div className="flex flex-col">
            <label htmlFor="" className="font-manrope text-[14px]  font-medium">
              New Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border px-4 focus:outline-none font-manrope   border-[#D0D5DD] rounded-[5px] min-h-[38px]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="font-manrope text-[14px]  font-medium">
            Confirm Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border px-4 focus:outline-none font-manrope   border-[#D0D5DD] rounded-[5px] min-h-[38px]"
            />
          </div>
          <button
            onClick={() => navigate("/changepassword/success")}
            className="min-h-[46px] bg-[#008A2F] rounded-lg mt-8 font-manrope font-semibold text-[16px] text-white"
          >
           Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
