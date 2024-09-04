import React from "react";
import { useSelector } from "react-redux";
import Advert from "../components/Advert";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/AccountComponent/Sidebar";
import RightSide from "../components/AccountComponent/RightSide";
import DeleteAccountModal from "../components/AccountComponent/DeleteAccountModal";
import Proceed from "../components/AccountComponent/Proceed";
import ActualDelete from "../components/AccountComponent/ActualDelete";
import DeleteSuccess from "../components/AccountComponent/DeleteSuccess";

const Account = () => {
  const { isOpen,isOpen1,isOpen2, isOpen3 } = useSelector((state) => state.deleteAccount);

  return (
    <div className="flex flex-col min-h-screen">
      {isOpen && <DeleteAccountModal />}
      {isOpen1 && <Proceed />}
      {isOpen2 && <ActualDelete />}
      {isOpen3 && <DeleteSuccess />}
      {/* {isOpen && <DeleteAccountModal />} */}
      <Advert />
      <Header />

      <div className=""> {isOpen}</div>

      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow">
          <RightSide />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
