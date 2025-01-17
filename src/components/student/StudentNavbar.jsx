import { Link, useLocation } from "react-router-dom";
import { account } from "../../images";
import StudentAccountMenu from "./StudentAccountMenu";
const StudentNavbar = ({ handleIsActive }) => {
  let location = useLocation().pathname;
  console.log(location)
  return (
    <>
      <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-2 rounded-lg flex  justify-between items-center font-montserrat sticky top-[120px]">
        <div className="text-white font-medium h-[40px] flex justify-center">
          <Link
            to={"/student/ranking"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              location === "/student/ranking" ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => handleIsActive("Dashboard")}
          >
            Ranking
          </Link>
          <Link
            to={"/student/studentInfo"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              location === "/student/studentInfo" ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => {
              handleIsActive("StudentInfo");
            }}
          >
            View Info
          </Link>
          <Link
            to={"/student/studentInput"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              location === "/student/studentInput" ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => {
              handleIsActive("StudentInput");
            }}
          >
            Update Info
          </Link>
        </div>
        <div className="flex justify-center items-center h-[40px] text-white">
          <StudentAccountMenu />
        </div>
      </div>
    </>
  );
};

export default StudentNavbar;
