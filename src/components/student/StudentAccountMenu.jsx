import { Link, useNavigate } from "react-router-dom";
import { account } from "../../images";
import StudentAccountMenuStyles from "./StudentAccountMenu.module.css";
import { useState } from "react";
const StudentAccountMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const navigate = useNavigate();
  const handleChangePassword = () => {
    navigate("/changeStudentPassword", { replace: true });
  }
  const handleLogout = () => {
    localStorage.removeItem('Student_Token');
    navigate("/studentLogin", { replace: true });
  }
  return (
    <div className="h-[38px]">
      <button
        className={`mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer ${StudentAccountMenuStyles.accountBtn}`}
        onClick={() => setOpen(!open)}
      >
        <img src={account} width={30} height={30} />
      </button>
      <div
        className={`bg-primary rounded-lg shadow-neo flex flex-col items-center ${StudentAccountMenuStyles.dropDown_menu
          } ${open ? StudentAccountMenuStyles.aactive : StudentAccountMenuStyles.inaactive}`}
      >
        <Link onClick={handleChangePassword}
          className={`${StudentAccountMenuStyles.menu_link} py-1 hover:text-green-500`}
        >
          Change Password
        </Link>
        <div className="w-4/5 ring-1 ring-highlight"></div>
        <Link onClick={handleLogout}
          className={`${StudentAccountMenuStyles.menu_link} py-1 hover:text-green-500`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default StudentAccountMenu;
