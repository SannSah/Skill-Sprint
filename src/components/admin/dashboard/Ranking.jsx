import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { rank1, rank2, rank3 } from "../../../images";

const Ranking = () => {
  let [students, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/admin/dashboard/Ranking", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.inValidToken) {
          navigate("/adminLogin", { replace: true });
        }
        setStudent(data.topTenStudents);
      });
  }, []);

  const topThreeStudents = () => {
    const [first, second, third] =
      students.length > 0
        ? students
        : [{ fullName: "" }, { fullName: "" }, { fullName: "" }];

    return (
      <div className="h- 6 flex justify-evenly">
        <span className="text-base">
          <img src={rank2} className="w-48 h-48" />
          <p>{second.fullName}</p>
        </span>
        <span className="text-base">
          <img src={rank1} className="w-64 h-64" />
          <p>{first.fullName}</p>
        </span>
        <span className="text-base">
          <img src={rank3} className="w-48 h-48" />
          <p>{third.fullName}</p>
        </span>
      </div>
    );
  };

  return (
    <div className="w-[800px] border-2 rounded-lg border-highlight mx-auto text-center font-montserrat text-2xl text-white">
      <p className="text-3xl py-6 font-semibold">
        Top 10 Student's of Department
      </p>
      {topThreeStudents()}
      <div className="text-base px-6 my-5">
        {students.map((element, idx) => {
          return (
            idx > 2 && (
              <div
                className="flex justify-between gap-1 px-4 py-2 rounded-md my-1 bg-highlight"
                key={idx}
              >
                <p>
                  {idx + 1}. {element.fullName}
                </p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
