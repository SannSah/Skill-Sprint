import StudentOptions from "./StudentOptions";

const MiniStudentInfo = ({ student }) => {
  return (
    <>
      <div className="w-full min-h-[175px] bg-primary shadow-neo rounded-lg flex items-center p-3">
        <div className="bg-white w-[160px] h-[150px] flex-none rounded-md"></div>
        <div className="mx-3 h-full flex-1">
          <div className="grid grid-cols-2 gap-2 p-4 font-montserrat">
            <div className="text-white flex">
              <span className="font-semibold flex-1">Roll Number</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.RollNo}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Mentor</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.Mentor}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Full Name</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.fullName}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Gender</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.Gender}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">DOB</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.DOB}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Contact Number</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.ContactNumber}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Email Id</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{student.Email}</p>
            </div>
          </div>
        </div>
        <div className="w-[100px] h-[150px] flex-none rounded-md">
          <StudentOptions />
        </div>
      </div>
    </>
  );
};

export default MiniStudentInfo;
