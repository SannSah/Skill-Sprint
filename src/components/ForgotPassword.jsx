import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import ForgotPasswordPopUp from "./popup/ForgotPasswordPopUp";

const ForgotPassword = () => {
  const { path } = useParams();
  console.log(path);
  const [popUp, setPopUp] = useState(false);
  console.log(popUp)
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
              />
              <button type="button" className="login-button" onClick={() => {setPopUp(true)}}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {popUp && <ForgotPasswordPopUp path={path} setButtonPopup={setPopUp} />}
    </>
  );
};

export default ForgotPassword;
