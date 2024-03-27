import AdminLogin from "./sections/AdminLogin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import StudentLogin from "./sections/StudentLogin";
import StudentInfo from "./components/student/StudentDashboard";
function App() {
  return (
    <div className="bg-primary  pb-6">
      {/* <AdminLogin /> */}
      {/* <StudentLogin /> */}
      {/* <StudentInfo /> */}
      <Dashboard />
    </div>
  );
}

export default App;
