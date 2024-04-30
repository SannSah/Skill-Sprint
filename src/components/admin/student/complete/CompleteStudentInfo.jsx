import StudentPersonal from "./StudentPersonal";
import StudentAcademic from "./StudentAcademic";
import StudentCoding from "./StudentCoding";
import Header from "../../../Header";
import { useContext, useEffect, useState } from "react";
import { CompleteStudentInfo as CompleteStudentInfoData } from "../../../../store/complete-student-info";
import { useParams } from "react-router-dom";
const CompleteStudentInfo = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/admin/dashboard/studentCompleteInfo", {
      method: "GET",
      headers: {
        authorization: token,
        _id: id,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStudentData(data);
        // console.log(data);
      });
  }, [id]);
  console.log(studentData != null && "hello");
  console.log(studentData);
  console.log(id);

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto mt-4 bg-primary shadow-neo rounded-lg flex flex-col items-center p-4 font-montserrat">
        {studentData != null && (
          <StudentPersonal personalInfo={studentData.personalInfo} />
        )}
        {studentData != null && (
          <StudentCoding codingInfo={studentData.CodingInfo} />
        )}
        {studentData != null && (
          <StudentAcademic
            academicInfo={studentData.academicinfo}
          />
        )}
      </div>
    </>
  );
};

export default CompleteStudentInfo;
