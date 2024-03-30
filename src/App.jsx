import AdminLogin from "./sections/AdminLogin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import StudentLogin from "./sections/StudentLogin";
import StudentInfo from "./components/student/StudentDashboard";
import { Outlet } from "react-router-dom";
import CompleteStudentInfo from "./components/admin/student/complete/CompleteStudentInfo";
function App() {
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
