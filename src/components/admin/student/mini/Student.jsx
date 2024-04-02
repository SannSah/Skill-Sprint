import { SessionList } from "../../../../store/session-list-store";
import MiniStudentInfo from "./MiniStudentInfo";
import SearchBar from "./SearchBar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Student = () => {
  let [students, setStudent] = useState([]);
  const {selectedSession} = useContext(SessionList);
  console.log(selectedSession)
  const navigate = useNavigate();
  useEffect(() => {
    const session_id = "ObjectId('6601d18593dca14429f09ce8')";
    const token = localStorage.getItem('token');
    fetch("http://localhost:8000/admin/dashboard/students", {
      method: 'GET',
      headers: {
        'authorization': token,
        'session_id': session_id
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
  }, [])
  return (
    <div className="w-10/12 h-screen mx-auto mt-[20px] px-4">
      <div>
        <SearchBar />
      </div>
      <MiniStudentInfo />
    </div>
  );
};

export default Student;
