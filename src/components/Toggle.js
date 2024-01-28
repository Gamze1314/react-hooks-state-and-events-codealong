import React, { useState } from "react";
// useState() returns an array 

function Toggle() {
  // isOn variable => what text to display in the button?
  const [ isOn, setIsOn ] = useState(false)

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"
  // conditional rendering based on state variable
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
