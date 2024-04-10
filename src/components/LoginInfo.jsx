import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LoginInfo = () => {
  let [isValid, setValid] = useState(false);
  let [isValidError, setValidError] = useState(true);
  const adminId = useRef("");
  const adminPassword = useRef("");
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   (token !== null || token !== "") && navigate("/admin/ranking", { replace: true })
  // }, []);

  useEffect(() => {
    if (isValid) {
      navigate("/admin/ranking", { replace: true });
    }
  }, [isValid, navigate]);

  async function loginHandler(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/admin/singin", {
        username: adminId.current.value,
        password: adminPassword.current.value,
      })
      .then((response) => {
        setValid(response.data.isValid);
        setValidError(response.data.isValid);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form className="w-full flex flex-col items-center gap-4">
      <h2 className="font-montserrat font-bold text-3xl text-white mt-4">
        Admin Login
      </h2>
      <div className="flex flex-col gap-4 mt-6 w-[80%]">
        <input
          type="text"
          placeholder="Admin Id"
          className="login-input login-input-hover font-montserrat"
          ref={adminId}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input login-input-hover font-montserrat"
          ref={adminPassword}
        />
        <center
          className={`"text-black_punch font-montserrat" ${
            isValidError ? "hidden" : "block"
          }`}
        >
          Sorry, your password was incorrect. Please double-check your password.
        </center>
        <a
          href="#"
          className="text-right text-white text-sm hover:text-base_red font-montserrat"
        >
          Forget Password?
        </a>
        <button onClick={loginHandler} type="submit" className="login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginInfo;
