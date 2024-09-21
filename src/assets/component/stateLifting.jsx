import { useState } from "react"

export default function StateLifting() {
  
  const [inputValue, setInputValue] = useState("")
  
  return (
    <>
      <p>state lifting from child</p>
      <InputComponent sendInputValue={inputValue} sendsetInputValue={setInputValue} />
      <DisplayComponent sendInputValue={inputValue} />
    </>
  )
}


const InputComponent = (props) => {
 const {sendInputValue, sendsetInputValue} = props
  return (
    <>
    <input value={sendInputValue}  type="text" onChange={(a) => sendsetInputValue(a.target.value)} placeholder="Type somthing" />
    </>
  )
}

const DisplayComponent = ({sendInputValue}) => {

  return (
    <>
      <p>here is the value of Input: {sendInputValue}</p>
    </>
  )
}