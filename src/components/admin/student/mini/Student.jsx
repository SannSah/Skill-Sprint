import { SessionList } from "../../../../store/session-list-store";
import MiniStudentInfo from "./MiniStudentInfo";
import SearchBar from "./SearchBar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Student = () => {
  let [students, setStudent] = useState([]);
  const { selectedSession } = useContext(SessionList);
  
  const navigate = useNavigate();
  useEffect(() => {

    const token = localStorage.getItem('token');
    fetch("http://localhost:8000/admin/dashboard/students", {
      method: 'GET',
      headers: {
        'authorization': token,
        'session_name': selectedSession
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      if (data.inValidToken) {
        navigate("/adminLogin", { replace: true });
      }
      setStudent(data.totalStudents);
      console.log(data.totalStudents);
    });
  }, [selectedSession])
  return (
    <div className="w-10/12 h-screen mx-auto mt-[20px] px-4">
      <div>
        <SearchBar />
      </div>
      {students.map((student) => <MiniStudentInfo student={student} />)}
    </div>
  );
};

export default Student;
