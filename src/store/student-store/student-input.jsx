import { createContext, useRef } from "react";

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

  handleStudentResetData: () => {},
  handleStudentSubmitData: () => {},
});
const StudentInputInfoProvider = ({ children }) => {
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
      }}
    >
      {children}
    </StudentInputInfo.Provider>
  );
};
export default StudentInputInfoProvider;
