import { Link } from "react-router-dom";
import { account } from "../images";
import AccountMenuStyle from "./AccountMenu.module.css";
import { useState } from "react";
const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
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
        <Link
          className={`${AccountMenuStyle.menu_link} py-1 hover:text-green-500`}
        >
          Account
        </Link>
        <div className="w-20 ring-1 ring-highlight"></div>
        <Link to={"/adminLogin"}
          className={`${AccountMenuStyle.menu_link} py-1 hover:text-green-500`}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AccountMenu;
