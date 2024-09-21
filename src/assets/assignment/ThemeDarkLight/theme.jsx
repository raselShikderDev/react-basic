import { useState, use, createContext } from "react";
import "./theme.css";

// add child component by wrapping provider component
export default function Theme() {
  return (
    <>
      <MydataProvider>
        <DarklightTheme/>
      </MydataProvider>
    </>
  )
}


// Creating a provider and the value what needs acces in child from parent
const Themecontext = createContext();

export function MydataProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const handletoggoleBtn = () => {
    setTheme(!theme);
  };
  return (
    <>
      <Themecontext.Provider value={{ theme, handletoggoleBtn }}>
        {children}
      </Themecontext.Provider>
    </>
  );
}

//creating child wheres want to acces data from parent (that content will finally render)
export function DarklightTheme() {
  const { theme, handletoggoleBtn } = use(Themecontext);
  return (
    <div
      className={`${
        theme ? "bg-gray-900" : "bg-white"
      } h-screen flex justify-center items-center text-center`}
    >
      <div>
        <h1
          className={`text-3xl py-3 font-bold ${
            theme ? "text-white" : "text-gray-900"
          }`}
        >
          This is a Theme Changer
        </h1>
        <p className={`my-1 ${theme ? "text-white" : "text-gray-900"}`}>
          By Tailwind CSS
        </p>
        <button
          onClick={handletoggoleBtn}
          className={`bg-blue-800 my-5 py-3 px-10 text-white`}
        >
          {theme ? "Switch to light" : "Switch to Dark"}
        </button>
      </div>
    </div>
  );
}
