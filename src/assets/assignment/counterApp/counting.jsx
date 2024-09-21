import "../counterApp/counterApp.css"
import { useState } from 'react';

function Counting() {
    const [count, setCount] = useState(0);
 
    const handelPlus = () => {
        if (count === 5) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }

    const handelMinus = () => {
        if (count === -5) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    
    return (
        <div className="container">
            <h1>Counter App</h1>
            <div className="card">
                <h2>Count: {count}</h2>
                <div className='cardBtns'>
                    <button disabled={count === 5 ? true : false} onClick={handelPlus}>+</button>
                    <button disabled={count === -5 ? true : false} onClick={handelMinus}>-</button>
                    <button onClick={() => setCount(0)}>0</button>
                </div>
            </div>
        </div>
    )
};
    
export default Counting


// <button disabled={this.state.count===0 ? true : false} onClick={() => this.setState({count: this.state.count - 1})} style={{background:"yellow", marginLeft:"20px"}}>-</button>
