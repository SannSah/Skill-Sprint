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
    // Code to run when the component mounts or re-mounts (such as when navigating back)
    console.log('Component mounted or re-mounted');
    // Perform any necessary actions here
    // For example, fetch data from an API or update state
  }, []);

  return (
    <div className="h-[65vh]">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <StudentNavbar handleIsActive={handleIsActive} />
      </div>
      {isActive === "Dashboard" && <Outlet />}
      {isActive === "StudentInfo" && <Outlet />}
      {isActive === "StudentInput" && <Outlet />}
    </div>
  );
};

export default StudentDashboard;
