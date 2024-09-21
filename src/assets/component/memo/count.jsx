import { useRef, memo } from "react";

export const Count = memo((props) => {
    console.log("my Props from Count", props.value);
    
    const { name, age } = props.value
    const renderCount = useRef(0);
    console.log(renderCount);
  
    return (
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing changed here but Ive now rendered:
                <span className="text-red-600">{renderCount.current++} time(s)</span>
            </p>
            <p>My name is {name} and {age} yeard old</p>
        </div>
    );
});
