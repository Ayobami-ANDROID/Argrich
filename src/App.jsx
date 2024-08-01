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
import '@splidejs/splide/dist/css/splide.min.css';
import MainPage from "./Pages/MainPage";
import { useAuthContext } from "./context/useAuthContext";

function App() {
  const [count, setCount] = useState(0);
  const { isAuthenticated, name, removeSession } = useAuthContext();

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Routes>
        <Route path="/" element={isAuthenticated === false ? <Navigate to="/auth/login" replace/> : <Navigate to="/product/" replace/>} />
        <Route path="/product/*" element={<MainPage/>}/>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="*" element={<Navigate to="/auth/login" replace/>} />
      </Routes>
     
    </>
  );
}

export default App;
