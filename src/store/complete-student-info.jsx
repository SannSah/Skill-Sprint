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
