import { useRef } from "react";
import StudentInputStyle from "./StudentInput.module.css";

const StudentInput = () => {
  const fullName = useRef("");
  const rollNo = useRef("");
  const gender = useRef("");
  const dob = useRef("");
  const phoneNumber = useRef("");
  const personalMailId = useRef("");
  const collegeMailId = useRef("");
  const mentor = useRef("");
  const session = useRef("");

  const leetcodeId = useRef("");
  const hackerRankId = useRef("");
  const codeChefId = useRef("");
  const gfgId = useRef("");

  const xiBoard = useRef("");
  const xiStream = useRef("");
  const xiPercentage = useRef("");
  const xiPassingYear = useRef("");

  const xBoard = useRef("");
  const xStream = useRef("");
  const xPercentage = useRef("");
  const xPassingYear = useRef("");

  const handleStudentData = async (event) => {
    event.preventDefault();
  //   const student={
  //     "personalInfo": {
  //      "RollNo":rollNo,
  //      "Mentor": mentor,
  //        "fullName": fullName,
  //          "Gender": gender,
  //            "DOB": dob,
  //              "ContactNumber": ContactNumber,
  //                "Email": collegeMailId,
                   
  //    },
  //    "CodingInfo": [
  //      {
  //        "CodeChef": {
  //          "UserID": "shiva182",
  //          "TotalQuestionSolver": 137,
  //          "Ranking": 645631,
  //          "Easy": "200/900",
  //          "Medium": "35/500",
  //          "Hard": "35/500"
  //        }
  //      },
  //      {
  //        "LeetCode": {
  //          "UserID": "shiva182",
  //          "TotalQuestionSolver": 137,
  //          "Ranking": 645631,
  //          "Easy": "200/900",
  //          "Medium": "35/500",
  //          "Hard": "35/500"
  //        }
  //      },
  //      {
  //        "GFG": {
  //          "UserID": "shiva182",
  //          "TotalQuestionSolver": 137,
  //          "Ranking": 645631,
  //          "Easy": "200/900",
  //          "Medium": "35/500",
  //          "Hard": "35/500"
  //        }
  //      },
  //      {
  //        "HackerRank": {
  //          "UserID": "shiva182",
  //          "TotalQuestionSolver": 137,
  //          "Ranking": 645631,
  //          "Easy": "200/900",
  //          "Medium": "35/500",
  //          "Hard": "35/500"
  //        }
  //      }
  //    ],
  //      "academicinfo": [
  //        {
  //          "CurrentCourse": {
  //            "institute": "Chitkara University Institute Of Engineering and Technology, Jhansla",
  //            "department": "Computer Applications",
  //            "program": "MCA",
  //            "branch": "MCA",
  //            "cgpa": 9.8,
  //            "session": 1998,
  //            "semester": 2
  //          }
  //        }
  //      ]
  //  }
  //   await fetch("http://localhost:8000/student/AddStudent",{
  //     method:"POST",
  //     body:{
  //       user:
  //     }
  //   })
    
  };
  return (
    <>
      <form
        className="w-[80%] bg-primary shadow-neo rounded-lg input-3 mt-6 pb-2 mx-auto"
        onSubmit={handleStudentData}
      >
        <p className="pt-10 text-white text-3xl font-medium text-center">
          Student Information Form
          <p className="w-[95%] mx-auto border-b border-2 border-highlight mt-6"></p>
        </p>

        {/* Persnal Info Input */}
        <div className="mx-20 my-14 text-white font-montserrat">
          <p className="text-lg font-medium">Personal Info</p>
          <div className="mx-8 my-4 grid grid-cols-3 gap-4">
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={fullName}
              />
              <div className={`${StudentInputStyle.label_input}`}>
                Full Name
              </div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={rollNo}
              />
              <div className={`${StudentInputStyle.label_input}`}>
                Roll Number
              </div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={gender}
              />
              <div className={`${StudentInputStyle.label_input}`}>Gender</div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={dob}
              />
              <div className={`${StudentInputStyle.label_input}`}>DOB</div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={phoneNumber}
              />
              <div className={`${StudentInputStyle.label_input}`}>
                Phone Number
              </div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={personalMailId}
              />
              <div className={`${StudentInputStyle.label_input}`}>
                Personal Mail Id
              </div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={collegeMailId}
              />
              <div className={`${StudentInputStyle.label_input}`}>
                Collage Mail Id
              </div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={mentor}
              />
              <div className={`${StudentInputStyle.label_input}`}>Mentor</div>
            </div>
            <div
              className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
            >
              <input
                type="text"
                className={`px-4 ${StudentInputStyle.input}`}
                placeholder=""
                ref={session}
              />
              <div className={`${StudentInputStyle.label_input}`}>Session</div>
            </div>
          </div>
        </div>

        {/* Coding Input */}
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

        {/* Academics Input */}
        <div className="mx-20 my-14 text-white font-montserrat">
          <p className="text-lg font-medium my-4">Academics Details</p>
          {/* 12 Data */}
          <div>
            <p className="ml-6 my-4">
              12<sup>th</sup> Course:
            </p>
            <div className="mx-14 my-4 grid grid-cols-3 gap-4">
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xiBoard}
                />
                <div className={`${StudentInputStyle.label_input}`}>Board</div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xiStream}
                />
                <div className={`${StudentInputStyle.label_input}`}>Stream</div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xiPercentage}
                />
                <div className={`${StudentInputStyle.label_input}`}>
                  Percentage
                </div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xiPassingYear}
                />
                <div className={`${StudentInputStyle.label_input}`}>
                  Passing Year
                </div>
              </div>
            </div>
          </div>
          {/* 10 Data */}
          <div>
            <p className="ml-6 my-4">
              10<sup>th</sup> Course:
            </p>
            <div className="mx-14 my-4 grid grid-cols-3 gap-4">
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xBoard}
                />
                <div className={`${StudentInputStyle.label_input}`}>Board</div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xStream}
                />
                <div className={`${StudentInputStyle.label_input}`}>Stream</div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xPercentage}
                />
                <div className={`${StudentInputStyle.label_input}`}>
                  Percentage
                </div>
              </div>
              <div
                className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
              >
                <input
                  type="text"
                  className={`px-4 ${StudentInputStyle.input}`}
                  placeholder=""
                  ref={xPassingYear}
                />
                <div className={`${StudentInputStyle.label_input}`}>
                  Passing Year
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-40 my-14 flex justify-end gap-2">
          <button className="w-[100px] bg-base_red text-white font-medium px-6 py-2 rounded-md hover:bg-transparent hover:ring-2 hover:ring-base_red">
            Reset
          </button>
          <button
            type="submit"
            className="w-[100px] bg-green-500 text-white font-medium px-6 py-2 rounded-md hover:bg-transparent hover:ring-2 hover:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default StudentInput;
