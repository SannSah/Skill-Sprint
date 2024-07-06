import { useContext, useEffect } from "react"
import { StudentInputInfo } from "../../../store/student-store/student-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodingInfoInput = () => {
    const { leetcodeId,
        hackerRankId,
        codeChefId,
        gfgId, isCorrectLeetcodeId } = useContext(StudentInputInfo);
        useEffect(() => {
          if(!isCorrectLeetcodeId){
            toast.error("Enter Valid Leetcode Id", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        }, [isCorrectLeetcodeId])
  return (
    <div className="mx-20 my-14 text-white font-montserrat">
          <p className="text-lg font-medium">Coding Platform details</p>
          <div className="mx-8 my-4">
            <div className="h-[40px] my-4 flex justify-around items-center">
              <p className="w-64">Code Chef User Id</p>
              <p>:</p>
              <input
                type="text"
                className="w-64 bg-transparent outline-none ring-2 ring-highlight rounded-md h-[40px] px-4 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-500"
                placeholder="Enter Code Chef User Id"
                ref={codeChefId}
              />
            </div>
            <div className="h-[40px] my-4 flex justify-around items-center">
              <p className="w-64">Leetcode User Id</p>
              <p>:</p>
              <input
                type="text"
                className={`w-64 bg-transparent outline-none ring-2 ring-highlight rounded-md h-[40px] px-4 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-500 ${isCorrectLeetcodeId === false && "ring-red-500"} ${isCorrectLeetcodeId === true && "ring-highlight"}`}
                placeholder="Enter Leetcode User Id"
                ref={leetcodeId}
              />
            </div>
            <div className="h-[40px] my-4 flex justify-around items-center">
              <p className="w-64">HackerRank User Id</p>
              <p>:</p>
              <input
                type="text"
                className="w-64 bg-transparent outline-none ring-2 ring-highlight rounded-md h-[40px] px-4 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-500"
                placeholder="Enter HackerRank User Id"
                ref={hackerRankId}
              />
            </div>
            <div className="h-[40px] my-4 flex justify-around items-center">
              <p className="w-64">GFG User Id</p>
              <p>:</p>
              <input
                type="text"
                className="w-64 bg-transparent outline-none ring-2 ring-highlight rounded-md h-[40px] px-4 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-500"
                placeholder="Enter GFG User Id"
                ref={gfgId}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
  )
}

export default CodingInfoInput