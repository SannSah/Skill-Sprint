import { Link } from "react-router-dom";
import { account } from "../images";
import AccountMenuStyle from "./AccountMenu.module.css";
const AccountMenu = () => {
  return (
    <div>
      <button className={`mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer ${AccountMenuStyle.accountBtn}`}>
        <img src={account} width={30} height={30} />
      </button>
      <ul className={`${AccountMenuStyle.dropDown}`}>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default AccountMenu;
