import { useState, useEffect } from "react";

import "./useEffectchall.css";

export default function UseEffectChalla() {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("")

  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  useEffect(() => {
    
    console.log("updateed Successfully", count, userInput)
  
  }, [userInput, count])

  const handleCounter = () => {
    setCount(count + 1)
  }

  const handleInputFeild = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="Myroot">
      <div className="MainDiv">
        <h1>useEffect Challange</h1>
        <div className="counter">
          <p>Count: <span style={{fontWeight: "600"}}>{count}</span></p>
          <button onClick={handleCounter}>Increment</button>
        </div>
        <div className="inputArea">
          <p>Name: <span style={{fontWeight: "600"}}>{userInput}</span></p>
          <input onChange={handleInputFeild} type="text" value={userInput} placeholder="Write Somthing"/>
        </div>
      </div>
    </div>
  );
}
