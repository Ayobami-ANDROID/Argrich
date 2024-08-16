import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import GetProduct from "../components/GetProduct";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const { token } = useSelector((state) => state.auth);

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <div className="flex flex-col min-h-screen">
      <Advert />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/view/:id" element={<GetProduct/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPage;
