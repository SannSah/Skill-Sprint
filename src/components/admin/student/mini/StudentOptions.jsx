import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CompleteStudentInfo from "../complete/CompleteStudentInfo";
import { CompleteStudentInfo as CompleteStudentInfoData } from "../../../../store/complete-student-info";

const StudentOptions = ({ studentId, studentRoll }) => {
  // const []
  async function onUpdate() {
    await fetch(
      "https://skill-sprint.onrender.com/admin/dashboard/studentCompleteInfo/allowEdit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          rollNo: studentRoll,
        }),
      }
    );
  }
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   console.log("😂😂😂😂😂😂😂😂😂😂😂😂😂😂");

  //   fetch("https://skill-sprint.onrender.com/admin/dashboard/studentCompleteInfo", {
  //     method: "GET",
  //     headers: {
  //       authorization: token,
  //       _id: studentRollNo,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [studentRollNo]);

  return (
    <div className="h-full flex flex-col justify-center font-montserrat">
      <Link
        to={"/admin/student/completeInfo/" + `${studentRoll}`}
        className="w-full py-2 bg-green-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-green-500 text-center"
      >
        View
      </Link>
      <a
        onClick={onUpdate}
        className="w-full py-2 bg-cyan-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-cyan-500 text-center cursor-pointer"
      >
        Update
      </a>
      {/* <a className="w-full py-2 bg-base_red rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-base_red text-center">
        Delete
      </a> */}
    </div>
  );
};

export default StudentOptions;
