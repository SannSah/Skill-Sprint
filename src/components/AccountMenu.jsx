import { Link, useNavigate } from "react-router-dom";
import { account } from "../images";
import AccountMenuStyle from "./AccountMenu.module.css";
import { useState } from "react";
const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const navigate = useNavigate();
  const handleChangePassword = () => {
    navigate("/changeAdminPassword", {replace: false});
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/adminLogin", {replace: true});
  }
  return (
    <div className="h-[38px]">
      <button
        className={`mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer ${AccountMenuStyle.accountBtn}`}
        onClick={() => setOpen(!open)}
      >
        <img src={account} width={30} height={30} />
      </button>
      <div
        className={`bg-primary rounded-lg shadow-neo flex flex-col items-center ${
          AccountMenuStyle.dropDown_menu
        } ${open ? AccountMenuStyle.aactive : AccountMenuStyle.inaactive}`}
      >
        <Link onClick={handleChangePassword}
          className={`${AccountMenuStyle.menu_link} py-1 hover:text-green-500`}
        >
          Change Password
        </Link>
        <div className="w-4/5 ring-1 ring-highlight"></div>
        <Link onClick={handleLogout}
          className={`${AccountMenuStyle.menu_link} py-1 hover:text-green-500`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AccountMenu;
