import { useContext, useEffect } from "react";
import { useState } from "react";
import { SessionList as SessionListData } from "../store/session-list-store";
const Sessions = () => {
  const { sessionList, handleSelectedSession } = useContext(SessionListData);

  return (
    <select
      className="bg-transparent p-2 mr-2.5 text-green-500 outline outline-2 outline-primary rounded-md"
      onChange={(e) => handleSelectedSession(e.target.value)}
    >
      {/* {console.log(sessionList)} */}
      {sessionList.length > 0 &&
        sessionList.map((session) => {
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
