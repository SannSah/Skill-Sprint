import { createContext, useRef } from "react";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


export const StudentInputInfo = createContext({
  fullName: "",
  rollNo: "",
  gender: "",
  dob: "",
  phoneNumber: "",
  collegeMailId: "",
  mentor: "",
  session: "",

  leetcodeId: "",
  hackerRankId: "",
  codeChefId: "",
  gfgId: "",

  institude: "",
  department: "",
  program: "",
  specialization: "",
  cgpa: "",
  currentSemester: "",

  xiBoard: "",
  xiStream: "",
  xiPercentage: "",
  xiPassingYear: "",

  xBoard: "",
  xStream: "",
  xPercentage: "",
  xPassingYear: "",

  handleStudentResetData: () => { },
  handleStudentSubmitData: () => { },
  setImage:()=>{}
});
const StudentInputInfoProvider = ({ children }) => {
  const [image,setImage]=useState({});
  const navigate=useNavigate();
  const fullName = useRef("");
  const rollNo = useRef("");
  const gender = useRef("");
  const dob = useRef("");
  const phoneNumber = useRef("");
  const collegeMailId = useRef("");
  const mentor = useRef("");
  const session = useRef("");

  const leetcodeId = useRef("");
  const hackerRankId = useRef("");
  const codeChefId = useRef("");
  const gfgId = useRef("");

  const institude = useRef("");
  const department = useRef("");
  const program = useRef("");
  const specialization = useRef("");
  const cgpa = useRef("");
  const currentSemester = useRef("");

  const xiBoard = useRef("");
  const xiStream = useRef("");
  const xiPercentage = useRef("");
  const xiPassingYear = useRef("");

  const xBoard = useRef("");
  const xStream = useRef("");
  const xPercentage = useRef("");
  const xPassingYear = useRef("");

  const handleStudentResetData = () => {
    fullName.current.value = "";
    rollNo.current.value = "";
    gender.current.value = "";
    dob.current.value = "";
    phoneNumber.current.value = "";
    collegeMailId.current.value = "";
    mentor.current.value = "";
    session.current.value = "";

    leetcodeId.current.value = "";
    hackerRankId.current.value = "";
    codeChefId.current.value = "";
    gfgId.current.value = "";

    institude.current.value = "";
    department.current.value = "";
    program.current.value = "";
    specialization.current.value = "";
    cgpa.current.value = "";
    currentSemester.current.value = "";

    xiBoard.current.value = "";
    xiStream.current.value = "";
    xiPercentage.current.value = "";
    xiPassingYear.current.value = "";

    xBoard.current.value = "";
    xStream.current.value = "";
    xPercentage.current.value = "";
    xPassingYear.current.value = "";
  };
  const handleStudentSubmitData = (event) => {
    event.preventDefault();
    const formData=new FormData();
    const studentInfoString = JSON.stringify({
      personalInfo: {
        fullName: fullName.current.value,
        RollNo: rollNo.current.value,
        Gender: gender.current.value,
        Mentor: mentor.current.value,
        DOB: dob.current.value,
        Email: collegeMailId.current.value,
        session: session.current.value,
        ContactNumber: phoneNumber.current.value,
        EditInfo: "Not Allowed"
      },
      CodingId: [codeChefId.current.value, leetcodeId.current.value, gfgId.current.value, hackerRankId.current.value],
      CurrentCourse: {
        Institute: institude.current.value,
        Department: department.current.value,
        Program: program.current.value,
        Specialization: specialization.current.value,
        CGPA: cgpa.current.value,
        CurrentSemester: currentSemester.current.value
      },
      Inter: {
        Board: xiBoard.current.value,
        Stream: xiStream.current.value,
        Percentage: xiPercentage.current.value,
        PassingYear: xiPassingYear.current.value
      },
      HighSchool: {
        Board: xBoard.current.value,
        Stream: xStream.current.value,
        Percentage: xPercentage.current.value,
        PassingYear: xPassingYear.current.value
      }
    });
  
    formData.append("student", studentInfoString);
    if(image!==null){
      console.log("appended");
    formData.append("image",image);
    }
    
    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeId.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 'success') {
          axios.post("http://localhost:8000/student/Add",formData,{
            headers: {
              'Authorization': localStorage.getItem("Student_Token"),
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) =>{
              console.log(response);
              if(response.data.dataInserted){
                navigate("/student/studentInfo",{replace:true})
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <StudentInputInfo.Provider
      value={{
        fullName,
        rollNo,
        gender,
        dob,
        phoneNumber,
        collegeMailId,
        mentor,
        session,
        leetcodeId,
        hackerRankId,
        codeChefId,
        gfgId,
        institude,
        department,
        program,
        specialization,
        cgpa,
        currentSemester,
        xiBoard,
        xiStream,
        xiPercentage,
        xiPassingYear,
        xBoard,
        xStream,
        xPercentage,
        xPassingYear,

        handleStudentResetData,
        handleStudentSubmitData,
        setImage
      }}
    >
      {children}
    </StudentInputInfo.Provider>
  );
};
export default StudentInputInfoProvider;
