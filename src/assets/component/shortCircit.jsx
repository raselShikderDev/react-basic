import { useState } from "react";

const styleBtn = {
    padding: "10px",
    margin: "5px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px"
  };

export default function ShortCircit() {
    const [user, setUser] = useState();
    const [isLoggdIn, setIsLoggdIn] = useState(true)
  return (
    <>
      <div>
              <h1>Here is My Short Circit Practice</h1>
            {/* <p>{ isLoggdIn && `Successfully Logged in by ${user ? user : "buddy"}`}</p> */}
              {isLoggdIn && <p>You are Logged In</p>}
              {user ? `Successfully Logged in by ${user}` : "Please Logg In"}
        <div>
          <button style={styleBtn} onClick={() => setIsLoggdIn(!isLoggdIn)}>Toggole login</button>
          <button style={styleBtn} onClick={() => setUser("Rasel Shikder")}>Set User</button>
          <button style={styleBtn} onClick={() => setUser()}>remove user</button>
        </div>
      </div>
    </>
  );
}
