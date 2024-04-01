import { Link } from "react-router-dom";
import { account } from "../../images";
const StudentNavbar = ({ isActive, handleIsActive }) => {
  return (
    <>
      <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-2 rounded-lg flex  justify-between items-center font-montserrat sticky top-[120px]">
        <div className="text-white font-medium h-[40px] flex justify-center">
          <Link
            to={"/student/ranking"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              isActive === "Dashboard" ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => handleIsActive("Dashboard")}
          >
            Ranking
          </Link>
          <Link
            to={"/student/studentInfo"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              isActive === "StudentInfo" ? "bg-primary" : "bg-transparent"
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
              isActive === "StudentInput" ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => {
              handleIsActive("StudentInput");
            }}
          >
            Update Info
          </Link>
        </div>
        <div className="flex justify-center items-center text-white">
          <a className="mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer">
            <img src={account} width={30} height={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default StudentNavbar;
