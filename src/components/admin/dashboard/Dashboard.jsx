import { useState } from "react";
import Header from "../../Header";
import NavBar from "../../NavBar";
import Student from "../student/mini/Student";
import Ranking from "./Ranking";
import CompleteStudentInfo from "../student/complete/CompleteStudentInfo";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isActive, setIsActive] = useState("Dashboard");
  const handleIsActive = (curr) => {
    setIsActive(curr);
  };

  return (
    <div className="">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <NavBar isActive={isActive} handleIsActive={handleIsActive} />
      </div>
      {isActive === "Dashboard" && <Outlet />}
      {isActive === "Student" && <Outlet />}
      {/* <CompleteStudentInfo /> */}
    </div>
  );
};

export default Dashboard;
