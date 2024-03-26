import { useRef, useState } from "react";
import { cuLogo } from "../constants";

const StudentLogin = () => {
  const studentId = useRef("");
  const studentPassword = useRef("");
  const [validateUser, setValidateUser] = useState(true);

  const authenticateStudent = () => {
    if (
      studentId.current.value === "mld" &&
      studentPassword.current.value === "123"
    ) {
      console.log("Verefied");
      setValidateUser(true);
    } else {
      setValidateUser(false);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center gap-5 h-screen">
      <img src={cuLogo} className="mt-10" width={230} />
      <div className="w-[500px] min-h-[400px] bg-highlight rounded-lg shadow-neo">
        <form
          className="w-full flex flex-col items-center gap-4"
          onSubmit={authenticateStudent}
        >
          <h2 className="font-montserrat font-bold text-3xl text-white mt-4">
            Student Login
          </h2>
          <div className="flex flex-col gap-4 mt-6 w-[80%]">
            <input
              type="text"
              placeholder="Student Id"
              className="login-input login-input-hover font-montserrat"
              ref={studentId}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input login-input-hover font-montserrat"
              ref={studentPassword}
            />
            <center
              className={`"text-black_punch font-montserrat" ${
                validateUser ? "hidden" : "block"
              }`}
            >
              Sorry, your password was incorrect. Please double-check your
              password.
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
      </div>
    </div>
  );
};

export default StudentLogin;
