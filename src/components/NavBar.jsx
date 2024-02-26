import {account} from "../images";
const NavBar = () => {
  return (
    <div className="w-10/12 h-[51px] bg-black_punch mx-auto mt-10 rounded-lg flex  justify-between items-center font-montserrat">
        <div className="text-white font-medium">
            <button className="bg-primary p-2 rounded-md ml-1.5 w-[120px]">Dashboard</button>
            <button className="p-2 rounded-md ml-1.5 w-[120px] hover:bg-primary">Student</button>
        </div>
        <div className="flex justify-center items-center text-white">
            <select className="bg-transparent p-2 mr-2.5 text-green-500 outline outline-2 outline-primary rounded-md">
                <option >MCA 2023-25</option>
            </select>
            <a className="mr-2 p-[3.5px] outline outline-2 outline-primary rounded-md hover:bg-primary hover:cursor-pointer"><img src={account} width={30} height={30}/></a>
        </div>
    </div>
  )
}

export default NavBar