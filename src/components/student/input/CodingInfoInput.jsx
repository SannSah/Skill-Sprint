import { useContext } from "react"
import { StudentInputInfo } from "../../../store/student-store/student-input";

const CodingInfoInput = () => {
    const { leetcodeId,
        hackerRankId,
        codeChefId,
        gfgId } = useContext(StudentInputInfo);
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
                className="w-64 bg-transparent outline-none ring-2 ring-highlight rounded-md h-[40px] px-4 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-500"
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
        </div>
  )
}

export default CodingInfoInput