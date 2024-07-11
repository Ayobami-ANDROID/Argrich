import React from "react";
import Logo from "../images/Mask group.png";

const Footer = () => {
  return (
    <div className="bg-[#005C2D] p-8 text-[#FFEEDC]">
      <div className="grid grid-cols-2 gap-16 p-8">
        <div className="flex flex-col">
          <img src={Logo} className="w-32 mb-4"></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h1  className="text-[#7CD032] font-bold mb-2">Categories</h1>

            <ul>
              <li>Cereals</li>
              <li>Fresh Farm Products</li>
              <li>Beverages</li>
              <li>Wines and Juices</li>
              <li>Food Seasoning</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#7CD032] font-bold mb-2">About Us</h1>

            <ul>
              <li>About Argrich</li>
              <li>New & Blogs</li>
              <li>Careers</li>
              <li>Delivery Coverages</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#7CD032] font-bold mb-2">Help</h1>

            <ul>
              <li>Feedback</li>
              <li>Return Policy</li>
              <li>Track Orders</li>
              <li>Delivery Coverage</li>
              <li>Contact Us</li>
              <li>Security and Fraud</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-white border-solid flex justify-between px-20 py-2">
        <div>Terms of use</div>
        <div>Privacy Policy</div>
        <div>All Rights Reserved by Argrich | 2024</div>
      </div>
    </div>
  );
};

export default Footer;
