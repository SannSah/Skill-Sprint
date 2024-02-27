const StudentOptions = () => {
  return (
    <div className="h-full flex flex-col justify-center font-montserrat">
        <button className="w-full py-2 bg-green-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-green-500">View</button>
        <button className="w-full py-2 bg-cyan-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-cyan-500">Update</button>
        <button className="w-full py-2 bg-base_red rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-base_red">Delete</button>
    </div>
  )
}

export default StudentOptions