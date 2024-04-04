import { useState } from "react";
import Header from "../Header";
import StudentNavbar from "./StudentNavbar";
import StudentInfo from "./StudentInfo";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const StudentDashboard = () => {
  const [isActive, setIsActive] = useState("Dashboard");
  const handleIsActive = (curr) => {
    setIsActive(curr);
  };
  useEffect(() => {
  }, []);

  return (
    <div className="">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <StudentNavbar isActive={isActive} handleIsActive={handleIsActive} />
      </div>
      {isActive === "Dashboard" && <Outlet />}
      {isActive === "StudentInfo" && <Outlet />}
      {isActive === "StudentInput" && <Outlet />}
    </div>
  );
};

export default StudentDashboard;
