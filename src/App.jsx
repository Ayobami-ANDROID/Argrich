import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Advert from "./components/Advert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import '@splidejs/splide/dist/css/splide.min.css';

import MainPage from "./Pages/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      
      <Routes>
        <Route path="/*" element={<MainPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
     
    </>
  );
}

export default App;
