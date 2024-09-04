import React from "react";
import profileImg from "../../images/Ellipse 3.png";
import icon1 from "../../images/icons/icon1.svg";
import icon2 from "../../images/icons/icon2.svg";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../../features/deleteaccountmodal/deleteaccountslice";
const RightSide = () => {
  const dispatch = useDispatch();
  return (
    <div className="border-t  ">
      <h1 className="text-[#000] font-semibold font-manrope text-[25px] leading-[32.78px]  flex items-center  border-b px-4 min-h-[67px]">
        Account & settings
      </h1>

      <div className=" w-full max-w-[788px] pr-4 ml-10 ">
        <div className="flex flex-col col-span-2 p-8 px-0 gap-4 pr-4">
          <h1 className="text-[#000000] leading-[27.32px] font-manrope font-semibold text-[20px]">
            Profile Information
          </h1>
          <div className="flex   relative justify-between mt-8">
            <p className="text-[16px] font-[500] font-manrope">
              Profile Picture
            </p>

            <div className="w-full max-w-[391px] ">
              <div className=" relative rounded-full  h-[100px] w-[100px]">
                <img
                  src={profileImg}
                  className=" object-contain "
                  alt="Profile Img"
                ></img>
                <div className="rounded-full flex absolute bg-white p-1 top-[70%] right-0 shadow-[0_0_10px_-1px_rgba(0,0,0,0.25)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3248 4.90729C15.7151 4.51674 16.3482 4.51647 16.7388 4.9067L19.0922 7.25746C19.4831 7.64784 19.4833 8.28116 19.0928 8.67187L9.13501 18.6352C8.99573 18.7745 8.81838 18.8696 8.62524 18.9085L4.20001 19.8002L5.09326 15.3802C5.13221 15.1875 5.22713 15.0105 5.36614 14.8714L15.3248 4.90729Z"
                      stroke="black"
                      stroke-width="1.6"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   relative justify-between mt-8">
            <p className="text-[16px] font-[500] font-manrope">
              Name and Email
            </p>

            <div className="w-full max-w-[400px]  flex flex-col gap-4">
              <div className="w-full">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="James  Etta"
                  className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
              <div className="w-full">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jamesetta@example.com"
                  className=" font-medium p-4 rounded-[5px] placeholder:font-medium placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
            </div>
          </div>
          <div className="flex   relative justify-between mt-8">
            <p className="text-[16px] font-[500] font-manrope">Password</p>

            <div className="w-full max-w-[400px]  flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px]"
                  >
                    Password
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="••••••••••••"
                    className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none bg-[#F2F2F2] border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>

                <button className="bg-[#005C2D] px-[16px] py-[12px] text-white rounded-[5px] self-end mt-4">
                  Change Password
                </button>
              </div>
            </div>
          </div>
          <div className="flex   relative justify-between mt-8">
            <p className="text-[16px] font-[500] font-manrope">
              Delivery Information
            </p>

            <div className="w-full max-w-[400px]  flex flex-col gap-4">
              <div className="w-full">
                {" "}
                <label
                  htmlFor=""
                  className="font-manrope font-medium text-[14px]"
                >
                  Address
                </label>{" "}
                <input
                  type="text"
                  className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none  border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                />
              </div>
              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px]"
                  >
                    City/Town
                  </label>{" "}
                  <input
                    type="text"
                    className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor=""
                    className="font-manrope font-medium text-[14px]"
                  >
                    Zip Code
                  </label>{" "}
                  <input
                    type="text"
                    className=" rounded-[5px] placeholder:font-medium p-4 placeholder:text-[#6C6C6C] outline-none  border border-[#D0D5DD]  placeholder:text-base font-manrope  max-w-[409px]  w-full  h-[40px] bg-inherit   "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-px bg-[#C6C6C6] w-full mt-4"></div>

        <div className="mt-10 font-manrope text-[16px] font-medium">
          <p className="text-[20px]  font-manrope font-semibold leading-[27.32px]">
            Help Center
          </p>
          <div className="mt-20 flex  justify-between">
            <p className="fo">Contact Support</p>
            <div className="flex flex-col  max-w-[422px] gap-4 w-full">
              <p className="s">To contact customer service</p>
              <div className="flex gap-x-3 items-center">
                <img src={icon1} alt="" />
                <p className="s">+234 803 239 9857</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={icon2} alt="" />
                <p className="s">support@argrichfarms.com</p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex  justify-between">
            <p className="font-medium font-manrope text-[16px] leading-[21.86px]">
              Feedback or Suggestions
            </p>
            <div className="flex flex-col  max-w-[422px] gap-4 w-full">
              <textarea
                name=""
                id=""
                className="max-w-[422px] w-full bg-[#F2F2F2] border border-[#D0D5DD] rounded-[5px] min-h-[177px]"
              ></textarea>
            </div>
          </div>
        </div>

        <div className=" h-px bg-[#C6C6C6] w-full mt-10 mb-10"></div>

        <div className="mt-10 font-manrope  mb-10">
          <p className="text-[20px]  font-manrope font-semibold leading-[27.32px]">
            Other
          </p>
          <div className="mt-20 flex  justify-between">
            <div className="s">
              {" "}
              <p className="text-[16px] font-medium ">Delete Account</p>
              <p className="text-[#6C6C6C] text-[14px] font-medium mt-6">
                Remove all data(includes addresses, billing information,
                cookies, email, history), and delete the account
              </p>
            </div>
            <div className="flex flex-col  max-w-[422px] gap-4 w-full">
              <button
                onClick={() => {
                  dispatch(setIsOpen(true));
                  window.scrollTo({left:0,top:0,behavior:"smooth"})
                }}
                className="px-[16px] py-[12px] bg-[#DF2E07] text-white w-fit self-end  rounded-[5px]  text-[16px]"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
