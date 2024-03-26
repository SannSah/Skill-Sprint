import { useRef, useState } from "react";
import Dashboard from "./admin/dashboard/Dashboard";

const LoginInfo = () => {
  const adminId = useRef("");
  const adminPassword = useRef("");
  const [validateUser, setValidateUser] = useState(true);

  const authenticateAdmin = () => {
    if (
      adminId.current.value === "mld" &&
      adminPassword.current.value === "123"
    ) {
      <Dashboard />
      console.log("Verefied")
      setValidateUser(true);
    }
    else{
      setValidateUser(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={authenticateAdmin}
    >
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
        <center className={`"text-black_punch font-montserrat" ${validateUser ? "hidden" : "block"}`}>
          Sorry, your password was incorrect. Please double-check your password.
        </center>
        <a
          href="#"
          className="text-right text-white text-sm hover:text-base_red font-montserrat"
        >
          Forget Password?
        </a>
        <button type="submit" className="login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginInfo;
