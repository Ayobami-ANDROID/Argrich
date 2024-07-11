import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import SelectField from "../components/SelectField";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import {signinValidate } from "../../Services";
import Spinner from "../components/Spinner";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import countries from "../../Services/callcode.json";
import Google from "../images/Google.png";
const Login = () => {
  const [isLoading, setisLoading] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [countrycheck, setcountrycheck] = useState("Nigeria");
  const [toggle2, settoggle2] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {    
      email: "",
      password: "",
    
    },
    validationSchema: signinValidate,
    onSubmit: (values) => {
      setisLoading(true);
    },
  });




  const formatDigits = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(\d{3})(\d{0,3})?(\d{0,4})?/, (_, p1, p2, p3) => {
        let parts = [p1];
        if (p2) parts.push(" " + p2);
        if (p3) parts.push(" " + p3);
        return parts.join("");
      });
  };
  return (
    <div className="min-h-screen bg-[#F5F5F5] grid lg:grid-cols-2  p-4">
    <div className="flex   bg-[#D9D9D9]  rounded-[30px] sm:hidden lg:block"></div>
    <div className="flex flex-col items-center py-10">
      <div>
        <div>
          <h1 className="font-bold text-[30px] text-[#000]">Login</h1>
        </div>
        <div className="text-[#8C8C8C] mb-4">
        Enter your Email and Password to access your account.
        </div>
        <form>
        
        
          <InputField
            label={`Email address`}
            name={`email`}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
            placeHolder={`Enter Your E-mail Address`}
          />
          {/* <SelectField
            label={`Country`}
            name="country"
            value={formik.values.country}
            onChange={(e) => {
              formik.handleChange(e);
              const selectedOptionAbout =
                e.target.options[e.target.selectedIndex].getAttribute(
                  "about"
                );

              formik.setFieldValue("callCode", selectedOptionAbout);
            }}
            error={formik.errors.country}
            errorText={formik.errors.country}
            placeHolder={"Nigeria"}
            options={country}
          /> */}
          {/* <div className="flex flex-col">
              <div>
                <label>Phone Number</label>
              </div>
              <div className="grid grid-cols-3 mb-2 gap-x-1">
                <InputField
                  label={``}
                  name={`callCode`}
                  value={formik.values.callCode}
                  onChange={formik.handleChange}
                  error={formik.touched.callCode && formik.errors.callCode}
                  errorText={formik.errors.callCode}
                  placeHolder={`+234`}
                  className={"disabled:bg-white"}
                  disabled={true}
                  onBlur={formik.handleBlur}
                />
                <div className="col-span-2 flex flex-col">
                  <InputField
                    label={``}
                    placeHolder={`802 123 4567`}
                    name={`phoneNumber`}
                    value={formik.values.phoneNumber}
                    onChange={(e) => {
                      const formattedValue = formatDigits(e.target.value);
                      formik.setFieldValue("phoneNumber", formattedValue);
                    }}
                    error={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    errorText={formik.errors.phoneNumber}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div> */}
          <div className="relative">
            <InputField
              label={`Password`}
              name={`password`}
              type={toggle ? "text" : "Password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              errorText={formik.errors.password}
              placeHolder={"••••••••"}
              onBlur={formik.handleBlur}
            />
            <div className="absolute text-[#008A2F] inset-y-[2.2rem] right-3 text-lg ">
              {" "}
              {toggle ? (
                <RiEyeFill
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                />
              ) : (
                <RiEyeOffFill
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                />
              )}
            </div>
            <div className="flex justify-between">
              <div></div>
              <div>
                <p className="text-[#008A2F]">Forgot Password?</p>
              </div>
            </div>
            {/* <div>
              <p className="text-sm text-contentFade">Password must have</p>

              <div className="flex flex-wrap mt-4 gap-3 text-[13px]">
                <p
                  className={`${
                    /^(?=.*[a-z])/.test(formik.values.password)
                      ? "text-[#FFFFFF] bg-[#008A2F]"
                      : "text-fadedBlue bg-[#FFFFFF]"
                  } py-1 px-2 rounded-[20px]`}
                >
                  1 Lowercase
                </p>
                <p
                  className={`${
                    /^(?=.*[A-Z])/.test(formik.values.password)
                      ? "text-[#FFFFFF] bg-[#008A2F]"
                      : "text-fadedBlue bg-[#FFFFFF]"
                  } py-1 px-2 rounded-[20px]`}
                >
                  1 Uppercase
                </p>
                <p
                  className={`${
                    /^.{8,}$/.test(formik.values.password)
                      ? "text-[#FFFFFF] bg-[#008A2F]"
                      : "text-fadedBlue bg-[#FFFFFF]"
                  } py-1 px-2 rounded-[20px]`}
                >
                  At least 8 Characters
                </p>
                <p
                  className={`${
                    /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/.test(
                      formik.values.password
                    )
                      ? "text-[#FFFFFF] bg-[#008A2F]"
                      : "text-fadedBlue bg-[#FFFFFF]"
                  } py-1 px-2 rounded-[20px]`}
                >
                  1 Special Character
                </p>
                <p
                  className={`${
                    /^(?=.*\d)/.test(formik.values.password)
                      ? "text-[#FFFFFF] bg-[#008A2F]"
                      : "text-fadedBlue bg-[#FFFFFF]"
                  } py-1 px-2 rounded-[20px]`}
                >
                  1 Number
                </p>
              </div>
            </div> */}
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-[#008A2F]  shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] w-full p-1 mt-4 text-white rounded-[5px]"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-12">
          <div className="relative border-t-2 border-[#E6E6E6]  w-full my-8 ">
            <div></div>
            <h1 className="text-center  absolute bg-[#F5F5F5] text-[#828282]  w-[1/2] mt-[-17px] left-[30%]">
              or continue with
            </h1>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#DBDBDB]  shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] w-full  text-[#000000] rounded-[5px] flex justify-center p-4"
            >
              <img src={Google} className="mr-2"></img>
              Google
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <p className="text-[12px] text-[#000]">
              Don't have an account?<Link className="text-[#008A2F]">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login