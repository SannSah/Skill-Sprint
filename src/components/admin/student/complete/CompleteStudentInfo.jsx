import StudentPersonal from "./StudentPersonal";
import StudentAcademic from "./StudentAcademic";
import StudentCoding from "./StudentCoding";
import Header from "../../../Header";
import { useEffect } from "react";
const CompleteStudentInfo = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch("http://localhost:8000/admin/dashboard/studentCompleteInfo", {
      method: 'GET',
      headers: {
        'authorization': token,
        '_id': '66030a9448920703b156b445'
      }
    }).then((res) => {
    })
  })
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
