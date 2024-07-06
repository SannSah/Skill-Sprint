import { createContext, useContext, useEffect, useState } from "react";
import { SessionList } from "./session-list-store";
import { useNavigate } from "react-router-dom";

export const StudentRankingList = createContext({
  studentRankingList: [],
});

const StudentRankingListProvider = ({ children }) => {
  const { selectedSession } = useContext(SessionList);
  let [studentRankingList, setStudentRankingList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const session_name = "2022-2025 BCA";
    const token = localStorage.getItem("token");
    fetch("https://skill-sprint.onrender.com/admin/dashboard/Ranking", {
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
        setStudentRankingList(data.topTenStudents);
        //   console.log(data.topTenStudents);
      });
  }, [selectedSession]);

  return (
    <StudentRankingList.Provider value={{ studentRankingList }}>
      {children}
      {studentRankingList.length > 0 && console.log(studentRankingList)}
    </StudentRankingList.Provider>
  );
};
export default StudentRankingListProvider;
