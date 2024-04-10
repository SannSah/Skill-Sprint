import { loadingLogo } from "../images";
import LoadingStyle from "./Loading.module.css";
const Loading = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full mx-auto rounded-md bg-highlight bg-opacity-25 ${LoadingStyle.loadingComponent}`}
    >
      <svg
        width="73"
        height="73"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 0C2.68628 0 0 2.68628 0 6V67C0 70.3137 2.68628 73 6 73H67C70.3135 73 73 70.3137 73 67V6C73 2.68628 70.3135 0 67 0H6ZM32 41H19V54H32V41ZM47 19H19V26H47V54H54V26V19H47ZM19 30H36H43V37V54H36V37H19V30Z"
          fill="#595959"
        />
      </svg>

      <ul className="flex gap-2 justify-center my-4">
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
        <li className={`${LoadingStyle.list}`}></li>
      </ul>
    </div>
  );
};

export default Loading;
