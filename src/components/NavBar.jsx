import { account } from "../images";
import Sessions from "./Sessions";
const NavBar = ({ activeNav, handleDashboardActive, handleStudentActive }) => {
  return (
    <>
      <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-2 rounded-lg flex  justify-between items-center font-montserrat sticky top-[120px]">
        <div className="text-white font-medium h-[40px] flex justify-center">
          <a
            className={`p-2 rounded-md ml-1.5 w-[120px] h-[40px] hover:bg-primary text-center cursor-pointer ${
              activeNav ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => handleDashboardActive(true)}
          >
            Dashboard
          </a>
          <a
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              !activeNav ? "bg-primary" : "bg-transparent"
            }`}
            onClick={() => handleStudentActive(false)}
          >
            Student
          </a>
        </div>
        <div className="flex justify-center items-center text-white">
          <Sessions />
          <a className="mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer">
            <img src={account} width={30} height={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
