import React from "react";
import { useState } from "react";
import "./switch.css"


export default function toDoSwitch() {
  const [isOn, setIsOn] = useState(false)
  
  const handaleChnage = () => {
    setIsOn(!isOn)
    console.log(isOn)
  }

  const mainDivBackground = {
    backgroundColor: isOn ? "#14cb14" : "#ff0000"
  }

  const CheakIsOn = isOn ? "on" : "off"

    return (
    <>
      <div style={mainDivBackground} className={"mainDiv"} onClick={handaleChnage}>
        <div className={`TogoleSwitch ${CheakIsOn}`}>
            <span>{CheakIsOn}</span>
        </div>
      </div>
    </>
  );
}
