import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CompleteStudentInfo = createContext({
  studentRollNo: "",
  handleOnView: () => {},
  studentData: {},
});

const CompleteStudentInfoProvider = ({ children }) => {
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentData, setStudentData] = useState({});

    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   console.log("first   😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊");
    //   fetch("http://localhost:8000/admin/dashboard/studentCompleteInfo", {
    //     method: "GET",
    //     headers: {
    //       authorization: token,
    //       _id: studentRollNo,
    //     },
    //   })
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setStudentData(data);

    //       console.log(data);
    //     });
    // }, [studentRollNo]);

  const handleOnView = (studentRoll) => {
    setStudentRollNo(studentRoll);
    // console.log(studentRoll);
  };

  return (
    <CompleteStudentInfo.Provider value={{ studentRollNo, handleOnView }}>
      {children}
    </CompleteStudentInfo.Provider>
  );
};
export default CompleteStudentInfoProvider;
