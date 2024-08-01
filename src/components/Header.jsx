import React, { useState } from "react";
import Logo from "../images/Argrich Logo Full 00.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Profile from "../images/Ellipse 1.png";
import { TfiAlignJustify } from "react-icons/tfi";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <div className="bg-[rgb(255,255,255)] lg:px-12 px-4 py-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex w-full">
          <img src={Logo} className="lg:w-32 w-12 lg:mr-8 mr-2 object-contain"></img>
          {/* <details className="dropdown ">
            <summary
              className="btn bg-[#fff] border-none text-[#000000] hover:bg-white m-1  shadow-none outline-none"
              onClick={() => setClicked(!clicked)}
            >
                <div className="flex">
                    <div className="mr-2"> Categories{" "}</div>
                    <div>
                    {clicked ? (
                <IoIosArrowUp className="text-[12px]" />
              ) : (
                <IoIosArrowDown className="text-[12px]" />
              )}
                    </div>
                </div>
             
             
            </summary>
            <ul className="menu dropdown-content  rounded-box z-[1] lg:w-[30rem] w-[20rem] p-2 grid lg:grid-cols-3 grid-cols-2 gap-4 bg-[#fff]">
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
              <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                <div>
                  {" "}
                  <a>Item 1</a>
                </div>
              </li>
            </ul>
          </details> */}
          <button onClick={() => setClicked(!clicked)} className="relative">
            <div className="flex">
              <div className="mr-2"> Categories </div>
              <div className="flex items-center">
                {clicked ? (
                  <IoIosArrowUp className="text-[12px]" />
                ) : (
                  <IoIosArrowDown className="text-[12px]" />
                )}
                {clicked ? (
                  <div className="absolute top-[100%] left-[10%] z-[100]">
                    <ul className="  rounded-box z-[1] lg:w-[30rem] rounded-[5px] w-[16rem] p-2 grid lg:grid-cols-3 grid-cols-1 gap-4 bg-[#fff]">
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                      <li className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000]">
                        <div>
                          {" "}
                          <a>Item 1</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-x-4 justify-end border-none w-full">
          <div className="flex relative ">
            <input
              placeholder="Search Product"
              type="text "
              className=" outline-none px-4 max-w-[409px]  w-full bg-[#F0F0F0] h-[40px] rounded-[300px]  border-[#E4E4E4] "
            ></input>
            <div className="flex items-center absolute inset-y-4 right-4 cursor-pointer">
              <BiSearch />
            </div>
          </div>
          <div className="lg:flex  hidden items-center text-[#000] mx-2">
            {/* <details className="dropdown open w-full">
              <summary
                className="btn bg-[#fff] border-none text-[#000000] hover:bg-white m-1 shadow-none outline-none  "
                onClick={() => setClicked(!clicked)}
              >
                <div className="flex justify-between">
                <div className="mr-2">
                  {" "}
                  <IoPersonOutline size={'1.5em'} />
                </div>

                <div className="flex items-center">Account</div>
                </div>
              
              </summary>
              <ul className="menu dropdown-content  rounded-box z-[1] w-52 p-2 grid grid-cols-1 gap-2 bg-[#fff]">
                <li className="p-2 rounded-[5px] text-[#000000] ">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
                <li className="p-2  rounded-[5px] text-[#000000]">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
                <li className="p-2  rounded-[5px] text-[#000000]">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
                <li className="p-2  rounded-[5px] text-[#000000]">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
                <li className="p-2  rounded-[5px] text-[#000000]">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
                <li className="p-2  rounded-[5px] text-[#000000]">
                  <div>
                    {" "}
                    <a>Item 1</a>
                  </div>
                </li>
              </ul>
            </details> */}
            <button className="flex relative " onClick={() => setClick(!click)}>
              <IoPersonOutline
                size={"1.5em"}
                className="mr-2"
                
              />
              Account
              
            </button>
          </div>
          <div className="lg:flex items-center text-[#000] hidden mx-2">
            <div className="mr-2">
              <CiShoppingCart size={"1.5em"} />
            </div>
            <div>Cart</div>
          </div>
          <div className="lg:flex items-center ml-2 hidden">
            <div className="rounded-full bg-[#EEEEEE] lg:h-12 lg:w-12  w-8">
              <img src={Profile} className="w-full rounded-full h-full"></img>
            </div>
          </div>
          <div className="flex items-center ml-2 lg:hidden">
          <TfiAlignJustify size={'1.2em'} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
