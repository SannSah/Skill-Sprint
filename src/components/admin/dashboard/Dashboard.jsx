import { useState } from "react";
import Header from "../../Header";
import NavBar from "../../NavBar";
import Student from "../student/mini/Student";
import Ranking from "./Ranking";
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState(true);
  const handleDashboardActive = (currState) => {
    setActiveNav(true);
  };
  const handleStudentActive = (currState) => {
    setActiveNav(false);
  };
  return (
    <div className="">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <NavBar
          activeNav={activeNav}
          handleDashboardActive={handleDashboardActive}
          handleStudentActive={handleStudentActive}
        />
      </div>
      {activeNav && <Ranking />}
      {!activeNav && <Student />}
    </div>
  );
};

export default Dashboard;
