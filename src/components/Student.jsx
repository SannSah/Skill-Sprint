import MiniStudentInfo from "./MiniStudentInfo";
import StudentOptions from "./StudentOptions";
import SearchBar from "./SearchBar";
const Student = () => {
  return (
    <div className="w-10/12 mx-auto mt-[20px] px-4">
      <div>
        <SearchBar />
      </div>
      <div className="w-full min-h-[175px] bg-primary shadow-neo rounded-lg flex items-center p-3">
        <div className="bg-white w-[160px] h-[150px] flex-none rounded-md"></div>
        <div className="mx-3 h-full flex-1">
          <MiniStudentInfo />
        </div>
        <div className="w-[100px] h-[150px] flex-none rounded-md">
          <StudentOptions />
        </div>
      </div>
    </div>
  );
};

export default Student;
