import StudentPersonal from "./StudentPersonal";
import StudentAcademic from "./StudentAcademic";
import StudentCoding from "./StudentCoding";
import Header from "../../../Header";
const CompleteStudentInfo = () => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto mt-4 bg-primary shadow-neo rounded-lg flex flex-col items-center p-4 font-montserrat">
        <StudentPersonal />
        <StudentCoding />
        <StudentAcademic />
      </div>
    </>
  );
};

export default CompleteStudentInfo;
