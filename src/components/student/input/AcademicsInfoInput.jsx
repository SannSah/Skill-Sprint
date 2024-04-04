import { useContext } from "react";
import { StudentInputInfo } from "../../../store/student-store/student-input";
import StudentInputStyle from "../StudentInput.module.css";

const AcademicsInfoInput = () => {
  return (
    <div className="mx-20 my-14 text-white font-montserrat">
      <p className="text-lg font-medium my-4">Academics Details</p>
      {/* CurrentMost Recent Course */}
      <CurrentMostRecentCourse></CurrentMostRecentCourse>
      {/* 12 Data */}
      <InterSchool></InterSchool>
      {/* 10 Data */}
      <HighSchoolData></HighSchoolData>
    </div>
  );
};
const CurrentMostRecentCourse = () => {
  const {
    institude,
    department,
    program,
    specialization,
    cgpa,
    currentSemester,
  } = useContext(StudentInputInfo);
  return (
    <div>
      <p className="ml-6 my-4">Current/Most Recent Course:</p>
      <div className="mx-14 my-4 grid grid-cols-3 gap-4">
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={institude}
          />
          <div className={`${StudentInputStyle.label_input}`}>Institude</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={department}
          />
          <div className={`${StudentInputStyle.label_input}`}>Department</div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={program}
          />
          <div className={`${StudentInputStyle.label_input}`}>
            Program/Degree
          </div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={specialization}
          />
          <div className={`${StudentInputStyle.label_input}`}>
            Specialization
          </div>
        </div>
        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={cgpa}
          />
          <div className={`${StudentInputStyle.label_input}`}>CGPA</div>
        </div>

        <div
          className={`ring-2 ring-highlight rounded-md input-2 my-1 ${StudentInputStyle.entry_point}`}
        >
          <input
            type="text"
            className={`px-4 ${StudentInputStyle.input}`}
            placeholder=""
            ref={currentSemester}
          />
          <div className={`${StudentInputStyle.label_input}`}>
            Current Semester
          </div>
        </div>
      </div>
    </div>
  );
};
const InterSchool = () => {
  const { xiBoard, xiStream, xiPercentage, xiPassingYear } =
    useContext(StudentInputInfo);
  return (
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
          <div className={`${StudentInputStyle.label_input}`}>Percentage</div>
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
          <div className={`${StudentInputStyle.label_input}`}>Passing Year</div>
        </div>
      </div>
    </div>
  );
};
const HighSchoolData = () => {
  const { xBoard, xStream, xPercentage, xPassingYear } =
    useContext(StudentInputInfo);
  return (
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
          <div className={`${StudentInputStyle.label_input}`}>Percentage</div>
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
          <div className={`${StudentInputStyle.label_input}`}>Passing Year</div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsInfoInput;
