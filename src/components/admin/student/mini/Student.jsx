import { SessionList } from "../../../../store/session-list-store";
import MiniStudentInfo from "./MiniStudentInfo";
import SearchBar from "./SearchBar";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompleteStudentInfoProvider from "../../../../store/complete-student-info";
import Loading from "../../../Loading";
const Student = () => {
  let [students, setStudent] = useState([]);
  const { selectedSession } = useContext(SessionList);
  let [dataFetched, setDataFetched] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setDataFetched(false);
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/admin/dashboard/students", {
      method: "GET",
      headers: {
        authorization: token,
        session_name: selectedSession,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.inValidToken) {
          navigate("/adminLogin", { replace: true });
        }
        setStudent(data.totalStudents);
        setDataFetched(true);
        console.log(data.totalStudents);
      });
  }, [selectedSession]);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchOnChange = (data) => {
    setSearchInput(data);
    console.log(data);
  };
  return (
    <CompleteStudentInfoProvider>
      <div className="w-10/12 h-[110%] mx-auto mt-[20px] mb
      -[20px] px-4">
        <div>
          <SearchBar handleSearchOnChange={handleSearchOnChange} />
        </div>
        {!dataFetched ? (
          <div className="h-[60vh]">
            <Loading />
          </div>
        ) : (
          // students.map((student, idx) => {
          //   const roll = student.RollNo;
          //   console.log(roll)
          //   { return <MiniStudentInfo student={student} key={idx} />}
          // })
          students.map((student, idx) => (student.RollNo.includes(searchInput) &&
            <MiniStudentInfo student={student} key={idx} />)
            
          )
        )}
      </div>
    </CompleteStudentInfoProvider>
  );
};

export default Student;
