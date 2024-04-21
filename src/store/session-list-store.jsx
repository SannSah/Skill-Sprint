import { createContext, useEffect, useState } from "react";

export const SessionList = createContext({
  selectedSession: "",
  sessionList: [],
  handleSelectedSession: () => { },
});

const SessionListProvider = ({ children }) => {
  let [selectedSession, setSelectedSession] = useState("");
  let [sessionList, setSessionList] = useState([]);
  const addAllSessions = (data) => {
    setSessionList([...data]);
    setSelectedSession(data[0].SessionName)
  };
  const handleSelectedSession = (e) => {
    setSelectedSession(e);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/admin/dashboard/session", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.totalSession);
        addAllSessions(data.totalSession);
      });
  }, []);
  return (
    <SessionList.Provider
      value={{ sessionList, selectedSession, handleSelectedSession }}
    >
      {children}
    </SessionList.Provider>
  );
};
export default SessionListProvider;
