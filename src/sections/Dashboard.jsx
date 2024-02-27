import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Student from "../components/Student";
import CompleteStudentInfo from "../components/CompleteStudentInfo";
const Dashboard = () => {
  return (
    <div className="">
      <div className="bg-primary sticky top-0 z-10 pb-4">
        <Header />
        <NavBar />
      </div>
      {/* <Student /> */}
      <CompleteStudentInfo />
    </div>
  );
};

export default Dashboard;
