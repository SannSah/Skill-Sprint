import { useEffect, useRef, useState } from "react";
import { cuLogo } from "../../images";
import { useNavigate } from 'react-router-dom';
const StudentChangePassword = () => {
  const navigate=useNavigate();
  // const [isPasswordChanged,setPasswordChanged]=useState(false);
  const studentRoll = useRef("");
  const oldPass = useRef("");
  const newPass = useRef("");
  const confirmNewPass = useRef("");
  useEffect(() => {
    fetch("http://localhost:8000/student/validUser", {
      headers: {
        'authorization': localStorage.getItem("Student_Token")
      }
    }).then((res) => {
      if(!res.ok){
        navigate("/studentLogin", { replace: true })
      }
    })
  }, [])
  const handleChangePassword = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/student/changepassword", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        authorization:localStorage.getItem("Student_Token")
      },
      body: JSON.stringify({
        oldPassword: oldPass.current.value,
        newPassword: newPass.current.value,
      }),
    })
      .then((res) => {
        if(!res.ok){
          navigate("/studentLogin", { replace: true })
        }
        return res.json()})
      .then((data) => {
        // setPasswordChanged(data.passwordChanged);
        if(data.passwordChanged){
          localStorage.removeItem('Student_Token');
          navigate("/studentLogin",{replace:true});
        }else{
          console.log("wrong password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              placeholder="Student Roll Number"
              className="h-12 rounded-lg bg-[#8b8b8b47] text-white px-4 outline-none font-montserrat"
              value={studentRoll.current}
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

export default StudentChangePassword;
