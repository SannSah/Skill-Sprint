import Leetcode from "./Leetcode";
import HackerRank from "./HackerRank";
import CodeChef from "./CodeChef";
import Gfg from "./Gfg";
const StudentCoding = ({ codingInfo }) => {
  return (
    <div className="outline outline-2 outline-highlight rounded-sm w-full p-6 relative mt-6 font-montserrat text-white">
      <span className="absolute top-[-16px] bg-primary p-1 text-white text-semibold">
        Coding Information:
      </span>
      <CodeChef codeChef={codingInfo[0].CodeChef} />
      <Leetcode leetCode={codingInfo[1].LeetCode} />
      <Gfg gfg={codingInfo[2].GFG} />
      <HackerRank hackerRank={codingInfo[3].HackerRank} />
    </div>
  );
};

export default StudentCoding;
