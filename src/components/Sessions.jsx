import { useEffect } from "react";
import { useState } from "react";
import { cuLogo } from "../images";
const Sessions = () => {
  let [sessions, setSessions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/admin/dashboard/session").
      then((res) => {
        return res.json()
      }).
      then((data) => {
        setSessions(data.totalSession);
      })
  }, [])

  return (
    <select className="bg-transparent p-2 mr-2.5 text-green-500 outline outline-2 outline-primary rounded-md">
      {sessions.map((session) => {
        { console.log(session) }
        <option>{session}</option>
      })}
    </select>
  );
};

export default Sessions;
