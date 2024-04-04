import { useEffect } from "react";

const StudentOptions = () => {
  async function onUpdate() {
    await fetch("http://localhost:8000/admin/dashboard/studentCompleteInfo/allowEdit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        
      })
    })
  }
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch("http://localhost:8000/admin/dashboard/studentCompleteInfo", {
      method: 'GET',
      headers: {
        'authorization': token,
        '_id': '66030a9448920703b156b445'
      }
    }).then((res) => {
    })
  })

  return (

    <div className="h-full flex flex-col justify-center font-montserrat">
      <a href="/admin/student/completeInfo" className="w-full py-2 bg-green-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-green-500 text-center">
        View
      </a>
      <a onClick={onUpdate} className="w-full py-2 bg-cyan-500 rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-cyan-500 text-center">
        Update
      </a>
      <a className="w-full py-2 bg-base_red rounded-md text-white text-lg my-1 hover:bg-transparent hover:ring-2 hover:ring-base_red text-center">
        Delete
      </a>
    </div>
  );
};

export default StudentOptions;
