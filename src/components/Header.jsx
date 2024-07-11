import React, { useState } from "react";
import Logo from "../images/Argrich Logo Full 00.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Profile from "../images/Ellipse 1.png"

const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="bg-[#fff] p-4">
      <div className="grid grid-cols-2">
        <div className="flex">
          <img src={Logo}></img>
          <details className="dropdown open">
            <summary
              className="btn bg-[#fff] border-none text-[#000000] hover:bg-white m-1 shadow-none outline-none"
              onClick={() => setClicked(!clicked)}
            >
              Categories{" "}
              {clicked ? (
                <IoIosArrowUp className="text-[12px]" />
              ) : (
                <IoIosArrowDown className="text-[12px]" />
              )}
            </summary>
            <ul className="menu dropdown-content  rounded-box z-[1] w-[30rem] p-2 grid grid-cols-3 gap-4 bg-[#fff]">
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
          </details>
        </div>
        <div className="flex border-none">
          <div className="flex bg-[#E4E4E4] rounded-[300px] border-2 border-solid border-[#E4E4E4] w-full p-4">
            <input
              placeholder="Search Product"
              type="text "
              className="bg-[#E4E4E4] outline-none h-full border-none rounded-[300px] w-full"
            ></input>
            <div>
              <BiSearch />
            </div>
          </div>
          <div className="flex items-center text-[#000]">
            <details className="dropdown open w-full">
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
              <ul className="menu dropdown-content  rounded-box z-[1] w-full p-2 grid grid-cols-1 gap-2 bg-[#fff]">
                <li className="p-2 rounded-[5px] text-[#000000]">
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
            </details>
          </div>
          <div className="flex items-center text-[#000]">
            <div className="mr-2">
                <CiShoppingCart size={'1.5em'}/>
            </div>
            <div>Cart</div>
          </div>
          <div className="flex items-center ml-2">
          <div className="rounded-full bg-[#EEEEEE] h-12 w-12 ">
            <img src={Profile} className="w-full rounded-full h-full"></img>

          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
