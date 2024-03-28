import { useEffect, useState } from "react";
const Ranking = () => {
  let [students, setStudent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/admin/dashboard/Ranking").then((res) => {
      return res.json();
    }).then((data) => {
      setStudent(data.topTenStudents);
    });
  }, [])
  console.log(students);
  return (
    <div className="w-[600px] bg-highlight mx-auto text-center font-montserrat text-2xl text-white">
      <p>Top 10 Student's of Department</p>
    </div>
  );
};

export default Ranking;
