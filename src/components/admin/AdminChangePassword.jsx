import { useRef } from "react";
import { cuLogo } from "../../images";
const AdminChangePassword = () => {
  const adminId = useRef("");
  const oldPass = useRef("");
  const newPass = useRef("");
  const confirmNewPass = useRef("");
  const handleChangePassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col justify-start items-center gap-5">
      <img src={cuLogo} className="mt-10" width={230} />
      <div className="w-[500px] min-h-[400px] bg-highlight rounded-lg shadow-neo">
        <form className="w-full flex flex-col items-center gap-4 my-8">
          <h2 className="font-montserrat font-bold text-3xl text-white">
            Change Password
          </h2>
          <div className="flex flex-col gap-4 mt-6 w-[80%]">
            <input
              type="text"
              placeholder="Admin Id"
              className="h-12 rounded-lg bg-[#8b8b8b47] text-white px-4 outline-none font-montserrat"
              value={adminId.current}
              readOnly
            />
            <input
              type="password"
              placeholder="Old Password"
              className="login-input login-input-hover font-montserrat"
              ref={oldPass}
            />
            <input
              type="password"
              placeholder="New Password"
              className="login-input login-input-hover font-montserrat"
              ref={newPass}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="login-input login-input-hover font-montserrat"
              ref={confirmNewPass}
            />
            <button
              type="submit"
              className="login-button mt-8"
              onClick={(event) => handleChangePassword(event)}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminChangePassword;
