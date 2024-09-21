import { createContext, useContext } from "react";
import {use} from "react"


//step 01
export const DataContext = createContext();

//step 02
export const AllDataProvider = ({ children }) => {
    const myName = "Rasel";
    const age = 22
  return <DataContext.Provider value={{myName, age}}>{children}</DataContext.Provider>;
};


export const useDataContext = () => {
    const context = use(DataContext);
    return context
}