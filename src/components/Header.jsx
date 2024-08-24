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
import { Link, useNavigate } from "react-router-dom";
import { getCategory } from "../features/category/categorySlice";
import { authReset } from "../features/auth/authSlice";
import Skeleton from "react-loading-skeleton";
import { Navigate } from "react-router-dom";

const Header = () => {
  // const [clicked, setClicked] = useState(false);
  // const [click, setClick] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const { category } = useSelector((state) => state.category);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  console.log(user);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await dispatch(getCategory()).unwrap();
      } catch (error) {}
    };

    fetchProduct();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async () => {
    dispatch(authReset());
    navigate("/login");
  };
  return (
    <div className="bg-[rgb(255,255,255)] lg:px-12 px-2 py-4 w-full">
      <div className="flex items-center   w-full">
        <div className="flex w-full">
          <Link to="/landing">
            <img
              src={Logo}
              className="lg:w-32 w-12 lg:mr-8 mr-2 object-contain"
            ></img>
          </Link>

          <div
            className="relative flex flex-col items-center"
            ref={dropdownRef}
          >
            <button
              className="group flex flex-col items-center"
              onClick={toggleDropdown}
            >
              <div className="flex items-center">
                <div className="mr-2"> Categories </div>
                <div className="flex items-center " size={"3em"}>
                  <IoIosArrowDown />
                </div>
              </div>
            </button>

            {isOpen && (
              <div className="absolute top-[100%] left-[10%] z-[100] group-focus:block">
                <ul className="  rounded-box z-[1] lg:w-[30rem] rounded-[5px] w-[16rem] p-2 grid lg:grid-cols-3 grid-cols-1 gap-4 bg-[#fff]">
                  {category.map((item, index) => (
                    <li
                      key={index}
                      className="p-2 bg-[#D9D9D9] rounded-[5px] text-[#000000] cursor-pointer"
                    >
                      <div>
                        {" "}
                        <a>{item.category}</a>
                      </div>
                    </li>
                  ))}
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

          <Link
            to={"/cart"}
            className="flex items-center text-[#000]  mx-2 cursor-pointer"
          >
            <div className="mr-2">
              <CiShoppingCart size={"1.5em"} />
            </div>
            <div>Cart</div>
          </Link>

          {token ? (
            <div className="lg:flex items-center ml-2 hidden relative ">
              <button className="rounded-full bg-[#EEEEEE] lg:h-12 lg:w-12  w-8 group">
                <div className="">
                  {user.profilePicture ? (
                    <img
                      src={Profile}
                      className="w-full rounded-full h-full"
                    ></img>
                  ) : (
                    <div className="w-full rounded-full h-full flex items-center justify-center">
                      <div>
                        <IoPersonOutline className="text-center" />
                      </div>
                    </div>
                  )}

                  <div className="z-10 bg-[#fff] shadow-[8px_8px_12px_8px_rgba(0,_0,_0,_0.25)]  hidden absolute rounded-lg  w-32 group-focus:block top-full right-0 p-4">
                    <ul className="text-[#000]">
                      <li className="font-[500] mb-2 text-[15px] whitespace-nowrap">Welcome!</li>
                      <li className="hover:text-[#008A2F] whitespace-nowrap">My Accounts</li>
                      <li className="hover:text-[#008A2F]  whitespace-nowrap mt-1">My Orders</li>
                      <li
                        className="hover:text-[#008A2F] mt-1 whitespace-nowrap"
                        onClick={() => logout()}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to="/login"
                className="lg:p-3 p-2 bg-[#008A2F] lg:text-[15px] text-[11px] text-white mr-2 rounded-[5px] "
              >
                Login
              </Link>
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
