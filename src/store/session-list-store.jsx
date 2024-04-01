import { createContext } from "react";

export const SessionList = createContext({
    sessionList: [],
})

const SessionListProvider = ({children}) => {
    return (
        <SessionList.Provider
            value={{
                sessionList
            }}
        >
            {children}
        </SessionList.Provider>
    )
}
export default SessionListProvider;