import { defaults } from "autoprefixer";
import { useState, createContext } from "react";
export const StateContext = createContext();

function StateProvider({children}) {
  const [isLoggedin,setIsLoggedIn] = useState(false);
  return (
    <StateContext.Provider value={{isLoggedin,setIsLoggedIn }}>
    {children}
  </StateContext.Provider>
);
}
export default StateProvider;