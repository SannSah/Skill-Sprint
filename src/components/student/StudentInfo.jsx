import { useEffect, useRef, useState } from "react";

const StudentInfo = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/student/PersonalInfo", {
        headers: {
          authorization: localStorage.getItem('Student_Token')
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUser(data);
      console.log(data.StudenCompleteInfo.CodingInfo[1]?.LeetCode?.UserID); // Use optional chaining to safely access nested properties
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const da = useRef("da");
  return (

    <div className="w-[80%] bg-primary shadow-neo rounded-lg p-3 mt-6 mx-auto">
      <p className="text-white text-3xl font-medium mx-auto block text-center">
        Student Information
      </p>
      <div className="mx-20 my-4 text-white font-montserrat">
        <p className="text-lg font-medium">Personal Information:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Name:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.fullName ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Phone No.:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.ContactNumber ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              College Mail Id:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.Email ?? 'N/A'}
            </p>
          </div>

          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Roll No:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.RollNo ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              DOB:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.DOB ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Mentor:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.Mentor ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Session:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.personalInfo?.session ?? 'N/A'}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-20 my-4 text-white font-montserrat">
        <p className="text-lg font-medium">Coding Information:</p>
        <p className="pl-6 pt-2">Leetcode:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              User Id:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.UserID ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.TotalQuestionSolver ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.Ranking ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.Easy ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.Medium ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[1]?.LeetCode?.Hard ?? 'N/A'}
            </p>
          </div>
        </div>
        <p className="pl-6 pt-2">HackerRank:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              User Id:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.UserID ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.TotalQuestionSolver ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.Ranking ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.Easy ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.Medium ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[3]?.HackeRank?.Hard ?? 'N/A'}
            </p>
          </div>
        </div>
        <p className="pl-6 pt-2">CodeChef:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              User Id:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.UserID ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.TotalQuestionSolver ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.Ranking ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.Easy ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.Medium ?? 'N/A'}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              {user?.StudenCompleteInfo?.CodingInfo[0]?.CodeChef?.Hard ?? 'N/A'}
            </p>
          </div>
        </div>
        <p className="pl-6 pt-2">Geeks for Geeks:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              User Id:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.UserID} */}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.TotalQuestionSolver} */}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.Ranking} */}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.Easy} */}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.Medium} */}
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              {/* {user.StudenCompleteInfo.CodingInfo[2].LeetCode.Hard} */}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-20 my-4 text-white font-montserrat">
        <p className="text-lg font-medium">Academics Information:</p>
        <p className="pl-6 pt-2">12th Course:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Board:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Stream:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Percentage:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Year:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
        </div>
        <p className="pl-6 pt-2">10th Course:</p>
        <div className="mx-8 my-4 grid grid-cols-3 gap-4">
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Board:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Stream:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Percentage:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Year:
            </span>
            <p type="text" className="px-4">
              CBSE
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default StudentInfo;
