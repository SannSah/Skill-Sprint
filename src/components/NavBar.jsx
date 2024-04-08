import Sessions from "./Sessions";
import NavbarStyles from "./NavBar.module.css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountMenu from "./AccountMenu";
const NavBar = ({ isActive, handleIsActive }) => {
  // const [isActive, setIsActive] = useState("Dashboard");
  let location = useLocation().pathname;
  console.log(location)
  useEffect(() => {
    handleIsActive(isActive);
  },);
  return (
    <>
      <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-2 rounded-lg flex  justify-between items-center font-montserrat sticky top-[120px]">
        <div className="text-white font-medium h-[40px] flex justify-center">
          <Link
            to={"/admin/ranking"}
            className={`p-2 rounded-md ml-1.5 w-[120px] h-[40px] hover:bg-primary text-center cursor-pointer ${
            location === "/admin/ranking" && NavbarStyles.active}`}
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
              location === "/admin/student" && NavbarStyles.active}`}
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
          <AccountMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
