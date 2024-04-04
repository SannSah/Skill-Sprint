const StudentAcademic = ({ academicInfo }) => {
  console.log(academicInfo);
  return (
    <fieldset className="outline outline-2 outline-highlight rounded-sm w-full p-6 relative mt-6 font-montserrat text-white">
      <span className="absolute top-[-16px] bg-primary p-1 text-white text-semibold">
        Academic Information:
      </span>
      <div className="">
        <p className="font-montserrat font-semibold font-9xl text-green-500">
          Current/Most Recent Course
        </p>
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full">
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">Institude</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.institute}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Department</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.department}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Program/Degree</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.program}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Branch/Specializtion</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.branch}</p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">CGPA</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.cgpa}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Program Duration</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.session}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Current Semester</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{academicInfo.semester}</p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default StudentAcademic;
