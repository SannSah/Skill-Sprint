import { account } from "../images";
import Sessions from "./Sessions";
import NavbarStyles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ isActive, handleIsActive }) => {
  // const [isActive, setIsActive] = useState("Dashboard");
  return (
    <>
      <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-2 rounded-lg flex  justify-between items-center font-montserrat sticky top-[120px]">
        <div className="text-white font-medium h-[40px] flex justify-center">
          <Link
            to={"/admin/ranking"}
            className={`p-2 rounded-md ml-1.5 w-[120px] h-[40px] hover:bg-primary text-center cursor-pointer ${
              isActive === "Dashboard" && NavbarStyles.active
            }`}
            onClick={(e) => {
              // e.preventDefault();
              handleIsActive("Dashboard");
            }}
          >
            Dashboard
          </Link>
          <Link
            to={"/admin/student"}
            className={`p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary text-center cursor-pointer ${
              isActive === "Student" && NavbarStyles.active
            }`}
            onClick={(e) => {
              // e.preventDefault();
              handleIsActive("Student");
            }}
          >
            Student
          </Link>
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
