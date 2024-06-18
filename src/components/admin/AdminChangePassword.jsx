import { useRef, useState } from "react";
import { cuLogo } from "../../images";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChangePasswordPopUp from "../popup/ChangePasswordPopUp";
const AdminChangePassword = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const adminId = useRef("");
  const oldPass = useRef("");
  const newPass = useRef("");
  const confirmNewPass = useRef("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://skill-sprint.onrender.com/admin/valid", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      if (!res.ok) {
        navigate("/adminLogin", { replace: true });
      }
    });
  }, []);
  const handleChangePassword = (event) => {
    event.preventDefault();
    if (
      newPass.current.value === "" ||
      confirmNewPass.current.value === "" ||
      newPass.current.value !== confirmNewPass.current.value
    ) {
      setButtonPopup(true);
    } else {
      fetch(
        "https://skill-sprint.onrender.com/admin/dashboard/changePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            oldPassword: oldPass.current.value,
            newPassword: newPass.current.value,
          }),
        }
      )
        .then((res) => {
          if (!res.ok) {
            navigate("/adminLogin", { replace: true });
          }
          return res.json();
        })
        .then((data) => {
          if (data.passwordChanged) {
            localStorage.removeItem("token");
            navigate("/adminLogin", { replace: true });
          } else {
            console.log("wrong password");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
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
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="login-input login-input-hover font-montserrat"
              ref={newPass}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="login-input login-input-hover font-montserrat"
              ref={confirmNewPass}
              required
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
      {buttonPopup && <ChangePasswordPopUp setButtonPopup={setButtonPopup} />}
    </div>
  );
};

export default AdminChangePassword;
