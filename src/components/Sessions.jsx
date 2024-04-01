import { useEffect } from "react";
import { useState } from "react";
import { cuLogo } from "../images";
const Sessions = () => {
  let [sessions, setSessions] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("http://localhost:8000/admin/dashboard/session", {
      method: 'GET',
      headers: {
        'authorization': token
      }
    }).
      then((res) => {
        return res.json()
      }).
      then((data) => {
        setSessions(data.totalSession);
    }
  }, []);

  return (
    <select className="bg-transparent p-2 mr-2.5 text-green-500 outline outline-2 outline-primary rounded-md">

      {sessions.length > 0 &&
        sessions.map((session) => {
          return (
            <option className="bg-primary" key={session.SessionName}>
              {session.SessionName}
            </option>
          );
        })}

    </select>
  );
};

export default Sessions;
