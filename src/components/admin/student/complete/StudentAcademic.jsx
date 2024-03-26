const StudentAcademic = () => {
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
              <p className="ml-2 flex-1">
                Chitkara University Institute of Engineering and Technology,
                Jhansla
              </p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Department</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">2310987143</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Program/Degree</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">2310987143</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Branch/Specializtion</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">2310987143</p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">CGPA</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">9.53</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Program Duration</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">2023-24</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Current Semester</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">2310987143</p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default StudentAcademic;
