import { useState } from 'react'

import "./stateChallange.css"

export default function stateChallange() {
  const [uservalue, setUservalue] = useState("")
  const [count, setCount] = useState(uservalue > 0 ? uservalue : 0)
  
  const handleIncrement = () => {
    setCount(uservalue > 0 ? (count + uservalue) : (count + 1))
  }

  const handleDecrement = () => {
    setCount(uservalue > 0 ? (count - uservalue) : (count - 1))
  }
  
  return (
    <div className='MainDiv'>
      <h1>Advance State Challange</h1>
      <div className="CounterDiv">
        <p>Count: {count}</p>
        <input  onChange={(e) => setUservalue(Number(e.target.value))} type="number" value={uservalue} placeholder='Type number' />
        <div className="counterBtns">
          <button disabled={count >= 100 ? true : false} onClick={handleIncrement}>Increment</button>
          <button disabled={count <= -100 ? true : false} onClick={handleDecrement}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}
