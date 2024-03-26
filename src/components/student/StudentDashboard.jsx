import { useState } from "react";
import Header from "../Header";
import StudentNavbar from "./StudentNavbar";
import StudentInfo from "./StudentInfo";

const StudentDashboard = () => {
  const [activeNav, setActiveNav] = useState(true);
  const handleDashboardActive = (currState) => {
    setActiveNav(currState);
  };
  const handleStudentActive = (currState) => {
    setActiveNav(currState);
  };
  return (
    <div className="">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <StudentNavbar
          activeNav={activeNav}
          handleDashboardActive={handleDashboardActive}
          handleStudentActive={handleStudentActive}
        />
      </div>
      {!activeNav && <StudentInfo />}
    </div>
  );
};

export default StudentDashboard;
