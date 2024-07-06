import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { rank1, rank2, rank3 } from "../../../images";
import { SessionList } from "../../../store/session-list-store";
import Loading from "../../Loading";
const Ranking = () => {
  const { selectedSession } = useContext(SessionList);
  let [students, setStudent] = useState([]);
  let [dataFetched, setDataFetched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Rerender");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setDataFetched(false);
    if (selectedSession != "") {
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
            console.log("Hello");
            navigate("/adminLogin", { replace: true });
          }
          setStudent(data.topTenStudents);
          setDataFetched(true);
        });
    }
  }, [selectedSession]);
  const topThreeStudents = () => {
    const [first, second, third] =
      students.length > 0
        ? students
        : [{ fullName: "" }, { fullName: "" }, { fullName: "" }];

    return (
      <div className="mb-8 flex justify-evenly">
        <Link
          to={"/admin/student/completeInfo/" + `${second.RollNo}`}
          className="text-base transition ease-in duration-800 hover:translate-y-[10px] hover:transform hover:scale-105 group"
        >
          <img src={rank2} className="w-48 h-48" />
          <p className="group-hover:text-green-500 text-lg">
            2. {second.fullName}
          </p>
        </Link>
        <Link
          to={"/admin/student/completeInfo/" + `${first.RollNo}`}
          className="text-base transition ease-in duration-800 hover:translate-y-[10px] hover:transform hover:scale-105 group"
        >
          <img src={rank1} className="w-64 h-64" />
          <p className="group-hover:text-green-500 text-xl">
            1. {first.fullName}
          </p>
        </Link>
        <Link
          to={"/admin/student/completeInfo/" + `${third.RollNo}`}
          className="text-base transition ease-in duration-800 hover:translate-y-[10px] hover:transform hover:scale-105 group"
        >
          <img src={rank3} className="w-48 h-48" />
          <p className="group-hover:text-green-500 text-md">
            3. {third.fullName}
          </p>
        </Link>
      </div>
    );
  };

  return (
    <div className="w-full h-[120%]">
      {!dataFetched ? (
        <div className="w-[800px] h-full mx-auto">
          <Loading />
        </div>
      ) : (
        <div className="w-[800px] border-2 rounded-lg border-highlight mx-auto text-center font-montserrat text-2xl text-white">
          <p className="text-3xl text-green-500 py-6 font-semibold">
            Top 10 Student's of Selected Session
          </p>
          {topThreeStudents()}
          <div className="text-base px-6 my-5">
            {students.map((element, idx) => {
              return (
                idx > 2 && (
                  <Link
                    to={"/admin/student/completeInfo/" + `${element.RollNo}`}
                    className="flex justify-between gap-1 px-4 py-2 rounded-md my-1 bg-highlight transition ease-in duration-800 hover:transform hover:scale-[1.02] hover:bg-transparent hover:ring-1 hover:ring-green-500 group"
                    key={idx}
                  >
                    <p className="group-hover:text-green-500">
                      {idx + 1}. {element.fullName}
                    </p>
                  </Link>
                )
              );
            })}
            {console.log(students)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ranking;
