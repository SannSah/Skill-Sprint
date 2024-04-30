import { useParams } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import ForgotPasswordPopUp from "./popup/ForgotPasswordPopUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const { path } = useParams();
  console.log(path);
  let userId = useRef("");
  const [popUp, setPopUp] = useState(false);
  console.log(popUp)
  const handlePasswordUpdate = () => {
    if(userId.current.value != ""){
      setPopUp(true);
    }
    else{
      toast.error(`Enter Correct ${path} ID`, {position:"top-center", theme: "dark"})
    }
  }
  return (
    <>
      <Header />
      <div className="flex flex-col justify-start items-center gap-5">
        <div className="w-[500px] pb-6 bg-highlight rounded-lg shadow-neo">
          <form className="w-full flex flex-col items-center gap-4">
            <h2 className="font-montserrat font-bold text-3xl text-white mt-4">
              Enter your {path} ID
            </h2>
            <div className="flex flex-col gap-4 mt-6 w-[80%]">
              <input
                type="text"
                placeholder={path + " Id"}
                className="login-input login-input-hover font-montserrat"
                ref={userId}
              />
              <button type="button" className="login-button" onClick={handlePasswordUpdate}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      {popUp && <ForgotPasswordPopUp path={path} setButtonPopup={setPopUp} />}
    </>
  );
};

export default ForgotPassword;
