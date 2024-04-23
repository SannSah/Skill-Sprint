import { useNavigate } from "react-router-dom"

const ForgotPasswordPopUp = (props) => {
    const navigate = useNavigate();
    const handleButtonPopUp = () => {
        props.setButtonPopup(false);
        if(props.path === "Admin"){
            navigate("/adminLogin");
        }
        else{
        navigate("/studentLogin");
        }
    }
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center font-montserrat bg-[#66666654]">
      <div className="w-[40%] h-[40%]  rounded-lg flex flex-col justify-center items-center gap-4 p-4 bg-[#91919161] backdrop-blur-md ring-1 ring-[#C0C0C0]">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path fill="#72caaf" d="M31 3A28 28 0 1 0 31 59A28 28 0 1 0 31 3Z"></path><path fill="#f9e3ae" d="M31,3A28,28,0,1,0,59,31,28,28,0,0,0,31,3Zm0,50A22,22,0,1,1,46.17,15.07l.68.67q.39.4.75.82A22,22,0,0,1,31,53Z"></path><path fill="#f6d397" d="M31,53A22,22,0,0,1,9,31H7.34a4,4,0,0,0-3.95,4.71,28,28,0,0,0,55.21,0A4,4,0,0,0,54.66,31H53A22,22,0,0,1,31,53Z"></path><path fill="#8d6c9f" d="M31,2A29,29,0,1,0,60,31,29,29,0,0,0,31,2Zm0,56A27,27,0,1,1,58,31,27,27,0,0,1,31,58Z"></path><path fill="#8d6c9f" d="M31 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 31 50zM37 50.08a1 1 0 0 0-1.93.52l.52 1.93A1 1 0 0 0 37.53 52zM21.75 47.52a1 1 0 0 0-1.37.37l-1 1.73a1 1 0 0 0 1.73 1l1-1.73A1 1 0 0 0 21.75 47.52zM41.62 47.89a1 1 0 0 0-1.73 1l1 1.73a1 1 0 1 0 1.73-1zM26.21 49.37a1 1 0 0 0-1.22.71L24.47 52a1 1 0 1 0 1.93.52l.52-1.93A1 1 0 0 0 26.21 49.37z"></path><path fill="#faefde" d="M42.29,22.29,28,36.59l-7.29-7.29a1,1,0,0,0-1.41,1.41l8,8a1,1,0,0,0,1.41,0l15-15a1,1,0,0,0-1.41-1.41Z"></path><path fill="#8d6c9f" d="M38.35 11.32a21.1 21.1 0 0 1 2.1.92 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 22.71 22.71 0 0 0-2.3-1 1 1 0 0 0-.7 1.87zM16.15 16.15a21.07 21.07 0 0 1 18.19-5.88 1 1 0 1 0 .32-2 23 23 0 0 0-19.92 39 1 1 0 0 0 1.41-1.41A21 21 0 0 1 16.15 16.15zM47.26 14.74a23.16 23.16 0 0 0-2.09-1.86 1 1 0 1 0-1.23 1.57 21.27 21.27 0 0 1 1.91 1.7 21 21 0 0 1 0 29.7 1 1 0 1 0 1.41 1.41A23 23 0 0 0 47.26 14.74z"></path>
</svg>
        <p className="text-2xl text-slate-200 font-medium font-montserrat text-center z-10">
          Password will be shared with registered Mail Id
        </p>
        <button className="bg-green-500 min-w-40 min-h-14 text-lg rounded-lg text-white hover:bg-transparent hover:ring-2 hover:ring-green-500" onClick={handleButtonPopUp}>Confirm</button>
      </div>
    </div>
  )
}

export default ForgotPasswordPopUp