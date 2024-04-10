import AdminLogin from "./sections/AdminLogin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import StudentLogin from "./sections/StudentLogin";
import StudentInfo from "./components/student/StudentDashboard";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CompleteStudentInfo from "./components/admin/student/complete/CompleteStudentInfo";
import { useEffect } from "react";
function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    location === "/" && navigate("/adminLogin")
  })
  return (
    <div className="bg-primary  pb-6">
      {/* <AdminLogin /> */}
      {/* <StudentLogin /> */}
      {/* <StudentInfo /> */}
      {/* <Dashboard /> */}
      <Outlet />
    </div>
  );
}

export default App;
