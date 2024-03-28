const StudentOptions = () => {
  return (
    <div className="h-full flex flex-col justify-center font-montserrat">
      <a href="/admin/studentInfo" className="w-full py-2 bg-green-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-green-500 text-center">
        View
      </a>
      <a className="w-full py-2 bg-cyan-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-cyan-500 text-center">
        Update
      </a>
      <a className="w-full py-2 bg-base_red rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-base_red text-center">
        Delete
      </a>
    </div>
  );
};

export default StudentOptions;
