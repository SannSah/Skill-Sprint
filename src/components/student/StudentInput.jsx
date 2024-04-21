import { useContext, useEffect, useRef, useState } from "react";
import PersonalInfoInput from "./input/PersonalInfoInput";
import CodingInfoInput from "./input/CodingInfoInput";
import AcademicsInfoInput from "./input/AcademicsInfoInput";
import { StudentInputInfo } from "../../store/student-store/student-input";
import { useNavigate } from "react-router-dom";
import ChangePasswordPopUp from "../popup/ChangePasswordPopUp"
import Loading from "../Loading";

const StudentInput = () => {
  const { isLoading, isCorrectLeetcodeId, handleStudentResetData, handleStudentSubmitData } = useContext(StudentInputInfo);
  const [user,setUser]=useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/student/validUser", {
      headers: {
        'authorization': localStorage.getItem("Student_Token")
      }
    }).then((res) => {
      if(!res.ok){
        navigate("/studentLogin", { replace: true })
      }
      return res.json()}).then((data) => {
      if (data.inValidToken) {
        navigate("/studentLogin", { replace: true });
      }else{
        setUser(data.UserInfo);
        
      }
    })
  }, [])
  return (
    <>
      {!isLoading && <form
        className="w-[80%] bg-primary shadow-neo rounded-lg input-3 mt-6 pb-2 mx-auto"
        onSubmit={(event) => handleStudentSubmitData(event)}
      >
        <p className="pt-10 text-white text-3xl font-medium text-center">
          Student Information Form
          <p className="w-[95%] mx-auto border-b border-2 border-highlight mt-6"></p>
        </p>

        {/* Persnal Info Input */}
        <PersonalInfoInput user={user}></PersonalInfoInput>

        {/* Coding Input */}
        <CodingInfoInput></CodingInfoInput>

        {/* Academics Input */}
        <AcademicsInfoInput></AcademicsInfoInput>

        <div className="mx-40 my-14 flex justify-end gap-2">
          <button onClick={(event) => handleStudentResetData(event)} className="w-[100px] bg-base_red text-white font-medium px-6 py-2 rounded-md hover:bg-transparent hover:ring-2 hover:ring-base_red">
            Reset
          </button>
          <button
            type="submit"
            className="w-[100px] bg-green-500 text-white font-medium px-6 py-2 rounded-md hover:bg-transparent hover:ring-2 hover:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>}
      {isLoading && <Loading />}
    </>
  );
};

export default StudentInput;
