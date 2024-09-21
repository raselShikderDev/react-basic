import { useState } from "react";

export default function usersInput({ onAddToDo }) {
  const [inputValue, setInputValue] = useState({});

  const handaleValue = (userInputValue) => {
    setInputValue({
      id: userInputValue,
      content: userInputValue,
      cheak: false,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    onAddToDo(inputValue);
    setInputValue({ id: "", content: "", cheak: false });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="inputFeild">
          <input
            value={inputValue.content}
            onChange={(e) => handaleValue(e.target.value)}
            type="text"
            placeholder="Add Somthing"
          />
          <button className="submit_btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
