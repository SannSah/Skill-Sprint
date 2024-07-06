import { cuLogo, placementCell } from "../images";
import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between xl:px-28 py-4 items-center max-md:flex-col max-md:gap-4">
      <img src={cuLogo} />
      <img src={placementCell} className="h-[44px]" />
    </div>
  );
};

export default Header;
