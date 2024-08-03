import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Route, Routes,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Advert from "./components/Advert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@splidejs/splide/dist/css/splide.min.css";
import 'react-toastify/dist/ReactToastify.css'; 
import MainPage from "./Pages/MainPage";
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [count, setCount] = useState(0);
  const { isAuthenticated, name, removeSession } = useAuthContext();

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
