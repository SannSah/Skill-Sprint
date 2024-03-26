import { useRef } from "react";

const StudentInfo = () => {
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
              First Name:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Middle Name:
            </span>
            <p type="text" className="px-4">
              Singh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Last Name:
            </span>
            <p type="text" className="px-4">
              Bisht
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Phone No.:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              College Mail Id:
            </span>
            <p type="text" className="px-4">
              Singh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Personal Mail Id:
            </span>
            <p type="text" className="px-4">
              Bisht
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Roll No:
            </span>
            <p type="text" className="px-4">
              Bisht
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              DOB:
            </span>
            <p type="text" className="px-4">
              Bisht
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Mentor:
            </span>
            <p type="text" className="px-4">
              Bisht
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
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              Saurabh
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
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              Saurabh
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
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              Saurabh
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
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Total Questions Solved:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Ranking:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Easy:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Medium:
            </span>
            <p type="text" className="px-4">
              Saurabh
            </p>
          </div>
          <div className="ring-2 ring-highlight rounded-md p-2 my-1 relative">
            <span className="absolute top-[-12px] bg-primary text-[#ababab] px-2 text-sm">
              Hard:
            </span>
            <p type="text" className="px-4">
              Saurabh
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
