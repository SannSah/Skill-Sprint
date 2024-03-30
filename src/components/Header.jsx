import { cuLogo, placementCell } from "../images";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  function onLogoCLick(){
    navigate("/admin/Ranking/");
  }
  return (
    <div className="flex justify-between xl:px-28 py-4 items-center">
      <img onClick={onLogoCLick} src={cuLogo} />
      <img src={placementCell} className="h-[44px]" />
    </div>
  );
};

export default Header;
