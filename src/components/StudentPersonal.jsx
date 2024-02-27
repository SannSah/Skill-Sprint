const StudentPersonal = () => {
  return (
    <fieldset className="outline outline-2 outline-highlight rounded-sm w-full p-6 relative">
        <span className="absolute top-[-16px] bg-primary p-1 text-white text-semibold">
          Personal Information:
        </span>
        <div className="flex">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-2 p-4 font-montserrat">
              <div className="text-white flex">
                <span className="font-semibold flex-1">Roll Number</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">2310987143</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">Mentor</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">Komal</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">Full Name</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">Saurabh Singh Bisht</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">Gender</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">Male</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">DOB</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">07/08/2001</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">Contact Number</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">7508509501</p>
              </div>
              <div className="text-white flex">
                <span className="font-semibold flex-1">Email Id</span>
                <span className="font-semibold flex-none"> :</span>
                <p className="ml-2 flex-1">singh.bisht750@gmail.com</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[160px] h-[150px] flex-none rounded-md"></div>
        </div>
      </fieldset>
  )
}

export default StudentPersonal