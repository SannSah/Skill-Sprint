import { createContext, useEffect, useState } from "react";

export const SessionList = createContext({
  selectedSession: "",
  sessionList: [],
  handleSelectedSession: () => { },
});

const SessionListProvider = ({ children }) => {
  let [selectedSession, setSelectedSession] = useState("2022-2025 BCA");
  let [sessionList, setSessionList] = useState([]);
  const addAllSessions = (data) => {
    setSessionList([...data]);
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
