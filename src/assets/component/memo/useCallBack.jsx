import { memo, useCallback } from "react";
import { useState } from "react";

export default function UseCallBack() {
    const [count, setCount] = useState(0);
    
    
  const handleIncrement = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("increment inside");
      
    }, []);
    
    // const handleDecrement = () => {};
    
    const handleDecrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
        console.log("Decrement inside");
    }, [])
    

  return (
    <div className="bg-gray-900 w-screen h-screen text-white flex flex-col text-center items-center gap-5 justify-center my">
          <p>count: {count}</p>
          <Button style="bg-green-400 px-3 rounded text-white" text="Increment" func={handleIncrement} />
          <Button style="bg-red-600 px-3 rounded text-white" text="Decrement" func={handleDecrement} />
    </div>
  );
}

const Button = memo(({ func, text, style, children}) => {
    console.log("Rendaring Children", children);
    
    return (
      <>
        <button className={style} onClick={func}>
          {text}
        </button>
      </>
    );
  })
