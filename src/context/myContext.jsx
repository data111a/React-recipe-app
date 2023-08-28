import React from "react";
import { useState } from "react";

export const myContext = React.createContext()

export const MyContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return(
    <myContext.Provider value={{theme,changeTheme}}>
      {children}
    </myContext.Provider>
  )
}