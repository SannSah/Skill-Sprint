import {search} from "../images";
const Student = () => {
  return (
    <div className="w-10/12 mx-auto mt-[20px] px-4">
        <div>
            <div className="flex items-center h-[40px] mb-6">
              <input type="search" className="w-2/5 h-[40px]  px-4 text-white font-montserrat bg-transparent outline outline-2 outline-highlight rounded-lg">
              </input>
              <button className=" w-[50px] h-[33px] bg-base_red rounded-md relative right-[54px] flex justify-center items-center">
                <img src={search} className="size-6" />
              </button>
            </div>

        </div>
        <div className="w-full h-[175px] bg-primary shadow-neo rounded-lg flex items-center p-3">
          <div className="bg-white w-[160px] h-full flex-none rounded-md"></div>
          <div className="ml-3 bg-orange-500 h-full flex-1"></div>
        </div>
    </div>
  )
}

export default Student