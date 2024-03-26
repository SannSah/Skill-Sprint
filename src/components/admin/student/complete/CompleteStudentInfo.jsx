import StudentPersonal from "./StudentPersonal";
import StudentAcademic from "./StudentAcademic";
import StudentCoding from "./StudentCoding";
const CompleteStudentInfo = () => {
  return (
    <div className="w-10/12 mx-auto mt-4 bg-primary shadow-neo rounded-lg flex flex-col items-center p-4 font-montserrat">
      <StudentPersonal />
      <StudentCoding />
      <StudentAcademic />
    </div>
  );
};

export default CompleteStudentInfo;
