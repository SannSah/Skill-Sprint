import MiniStudentInfo from "./MiniStudentInfo";
import SearchBar from "./SearchBar";
const Student = () => {
  return (
    <div className="w-10/12 h-screen mx-auto mt-[20px] px-4">
      <div>
        <SearchBar />
      </div>
      <MiniStudentInfo />
    </div>
  );
};

export default Student;
