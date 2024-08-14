import React, { useState, useEffect, useRef } from "react";
import Logo from "../images/Argrich Logo Full 00.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Profile from "../images/Ellipse 1.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // const [clicked, setClicked] = useState(false);
  // const [click, setClick] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="bg-[rgb(255,255,255)] lg:px-12 px-2 py-4 w-full">
      <div className="flex items-center   w-full">
        <div className="flex w-full">
        <Link to="/">
        <img src={Logo} className="lg:w-32 w-12 lg:mr-8 mr-2 object-contain"></img>
        </Link>  
          
          <div className="relative flex flex-col items-center" ref={dropdownRef}>
            <button className="group" onClick={toggleDropdown}>
              <div className="flex items-center">
                <div className="mr-2"> Categories </div>
                <div className="flex items-center"><IoIosArrowDown /></div>
              </div>
            </button>


            {isOpen && (
              <div className="absolute top-[100%] left-[10%] z-[100] group-focus:block">
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
            )}

            


          </div>

        </div>
        <div className="flex items-center gap-x-4 justify-end border-none w-full ">
          <div className="flex  bg-[#F0F0F0] rounded-[300px] border-[#E4E4E4] ">
            <div>
            <input
              placeholder="Search Product"
              type="text "
              className=" outline-none px-4 max-w-[409px]  w-full  h-[40px] bg-inherit   "
            ></input>
            </div>
          
            <div className="flex items-center    cursor-pointer">
              <BiSearch />
            </div>
          </div>

          <Link className="flex items-center text-[#000]  mx-2 cursor-pointer">
            <div className="mr-2">
              <CiShoppingCart size={"1.5em"} />
            </div>
            <div>Cart</div>
          </Link>

          {token ? (<div className="lg:flex items-center ml-2 hidden relative ">
            <button className="rounded-full bg-[#EEEEEE] lg:h-12 lg:w-12  w-8 group">
              <div>
                <img src={Profile} className="w-full rounded-full h-full"></img>
                <div className="z-10 bg-[#fff] shadow-[8px_8px_12px_8px_rgba(0,_0,_0,_0.25)]  hidden absolute rounded-lg  w-32 group-focus:block top-full right-0 p-4">
                  <ul className="text-[#000]">
                    <li className="font-[500] mb-2 text-[15px]">Welcome!</li>
                    <li>Logout</li>
                  </ul>
                </div>
              </div>

            </button>
          </div>):(
            <div className="flex items-center">
                <Link to="/login" className="lg:p-3 p-2 bg-[#008A2F] lg:text-[15px] text-[11px] text-white mr-2 rounded-[5px] ">Login</Link>
           
            </div>
          )}
          
          {/* <div className="flex items-center ml-2 lg:hidden">
            <TfiAlignJustify size={'1.2em'} className="cursor-pointer" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
