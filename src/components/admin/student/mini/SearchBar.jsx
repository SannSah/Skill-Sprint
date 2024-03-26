import { search } from "../../../../images";
const SearchBar = () => {
  return (
    <div className="flex items-center h-[40px] mb-6">
      <input
        type="search"
        placeholder="Search..."
        className="w-2/5 h-[40px]  px-4 text-white font-montserrat bg-transparent outline outline-2 outline-highlight rounded-lg focus:outline-green-500"
      ></input>
      <button className=" w-[50px] h-[33px] bg-base_red rounded-md relative right-[54px] flex justify-center items-center">
        <img src={search} className="size-6" />
      </button>
    </div>
  );
};

export default SearchBar;
