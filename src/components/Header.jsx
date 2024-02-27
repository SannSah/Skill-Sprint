import { cuLogo, placementCell } from "../images";
const Header = () => {
  return (
    <div className="flex justify-between xl:px-28 py-4 items-center">
      <img src={cuLogo} />
      <img src={placementCell} className="h-[44px]" />
    </div>
  );
};

export default Header;
