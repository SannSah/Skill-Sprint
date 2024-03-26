import { gfg } from "../../../../images";
const Gfg = () => {
  return (
    <div className="ring-1 ring-highlight rounded-md relative my-4">
      <p className="font-montserrat font-semibold font-9xl text-green-500 ml-4 px-2 absolute top-[-12px] bg-primary">
        Geek for Geeks
      </p>
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full flex-1">
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">User Id</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">ssb750</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Ranking</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">645631</p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">
                Total Question Solved
              </span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">137</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Easy</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">200/900</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Medium</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">35/500</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Hard</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">35/500</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[130px] h-[130px] flex-none rounded-md overflow-hidden mr-3">
          <img src={gfg} className="object-cover w-full h-full scale-105" />
        </div>
      </div>
    </div>
  );
};

export default Gfg;
