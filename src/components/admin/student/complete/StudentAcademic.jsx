const StudentAcademic = ({ academicInfo }) => {
  const currentCourse = academicInfo[0];
  let twelfth = {Board: "NA", Stream: "NA", Percentage: "NA", PassingYear: "NA"};
  if(academicInfo[1] != undefined){
    twelfth = academicInfo[1].twelfth;
  }
  let tenth = {Board: "NA", Stream: "NA", Percentage: "NA", PassingYear: "NA"};
  if(academicInfo[2] != undefined){
    tenth = academicInfo[2].tenth;
  }
  console.log(currentCourse)

  return (
    <fieldset className="outline outline-2 outline-highlight rounded-sm w-full p-6 relative mt-6 font-montserrat text-white">
      <span className="absolute top-[-16px] bg-primary p-1 text-white text-semibold">
        Academic Information:
      </span>
      <div className="">
        <p className="font-montserrat font-semibold font-9xl text-green-500">
          Current/Most Recent Course :
        </p>
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full">
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">Institute</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.Institute == undefined ? "NA" : currentCourse.CurrentCourse.Institute}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Department</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.Department  == undefined ? "NA" : currentCourse.CurrentCourse.Department}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Program/Degree</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.Program  == undefined ? "NA" : currentCourse.CurrentCourse.Program}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Branch/Specializtion</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.Specialization  == undefined ? "NA" : currentCourse.CurrentCourse.Specialization}</p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">CGPA</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.CGPA  == undefined ? "NA" : currentCourse.CurrentCourse.CGPA}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Current Semester</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{currentCourse.CurrentCourse.CurrentSemester  == undefined ? "NA" : currentCourse.CurrentCourse.CurrentSemester}</p>
            </div>
          </div>
        </div>
        <p className="font-montserrat font-semibold font-9xl text-green-500">
          XII Details :
        </p>
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full">
            <div className="text-white flex">
              <span className="font-semibold flex-1">Board</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{twelfth.Board}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Stream</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{twelfth.Stream}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Percentage</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{twelfth.Percentage}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Passing Year</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{twelfth.PassingYear}</p>
            </div>
          </div>
          <p className="font-montserrat font-semibold font-9xl text-green-500">
          X Details :
        </p>
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full">
            <div className="text-white flex">
              <span className="font-semibold flex-1">Board</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{tenth.Board}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Stream</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{tenth.Stream}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Percentage</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{tenth.Percentage}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Passing Year</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{tenth.PassingYear}</p>
            </div>
          </div>
      </div>
    </fieldset>
  );
};

export default StudentAcademic;
