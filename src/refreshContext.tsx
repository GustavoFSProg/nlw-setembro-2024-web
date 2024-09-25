import { createContext, useState } from "react";


export const refreshContext = createContext({})



// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }: any) {
    const [refresh, setRefresh] = useState(false)
  
    return (
      <refreshContext.Provider value={ {refresh, setRefresh}}>
        {children}
      </refreshContext.Provider>
    )
  }