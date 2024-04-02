import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Ranking = () => {
  let [students, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const session_id = "ObjectId('6601d18593dca14429f09ce8')";
    const token = localStorage.getItem('token');
    fetch("http://localhost:8000/admin/dashboard/Ranking", {
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
      setStudent(data.topTenStudents);

    });
  }, [])
  return (
    <div className="w-[600px] bg-highlight mx-auto text-center font-montserrat text-2xl text-white">
      <p>Top 10 Student's of Department</p>
    </div>
  );
};

export default Ranking;
