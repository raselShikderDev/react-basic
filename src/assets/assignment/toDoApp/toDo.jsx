import { useState } from "react";

import "./todo.css";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList";
import ToDoDate from "./toDoDate";
import {getLocalStorageValue, setLocalStorageValue } from "./localStorage"



export default function toDo() {
  const [userValue, setuserValue] = useState(() => getLocalStorageValue());
  const [addStyle, setAddStyle] = useState({
    fontFamily: "fantasy",
    color: "red",
  });
  // adding data to local storage
  setLocalStorageValue(userValue)

  // Handling Actions that will happen after Form Sybmission
  const handelSubmit = (inputValue) => {
    const { id, content, cheak } = inputValue;
    //to cheak the content or user input empty or not
    if (!content) return;

    // to cheak the content or user input already exsit or not
    const isContentExit = userValue.find((currElement) => currElement.content === content );
    if (isContentExit) return;
    setuserValue((prevValue) => [
      ...prevValue,
      { id, content, cheak },
    ]);
  };

  // delete an iteem of task

  const handleDeleteBtn = (itemWillDelete) => {
    // userValue.splice(itemWillDelete, 1) (by key of element )
    const updateValeAfterdelete = userValue.filter(
      (currElm) => currElm.content !== itemWillDelete
    );
    setuserValue(updateValeAfterdelete); // (by current element)
  };

  // cheaking function
  const handleCheakBtn = (value) => {
    // storing updated value
    console.log(" this value: " + value)
    const updatedvalue = userValue.map((currElement) => {
      // cheaking value is matching or not to update the value of cheak
      if (currElement.content === value) {
        console.log("its matched")
        return { ...currElement, cheak: !currElement.cheak }
      } else {
        console.log("not matching")
        return currElement
      }
    })
    console.log("Before update: ", userValue);
    console.log("Updating value: ", updatedvalue);
    setuserValue(updatedvalue);
    console.log("After update: ", updatedvalue);
 }
  // Clear all Function Hanele

  const handleAllclear = () => {
    setuserValue([]);
  };
  

  return (
    <>
      <section id="headingAndForm">
        <h1>My ToDoList</h1>
        <ToDoDate />
        <ToDoForm onAddToDo={handelSubmit} />
      </section>
      <section id="todoListAndClear">
        <ul style={{marginTop:"0.5rem"}}>
          {userValue.map((value) => {
            console.log("value form toDo file; " + value.cheak)
            return (
              <ToDoList
                style={addStyle}
                id={value.id}
                data={value.content}
                deleteFunc={handleDeleteBtn}
                cheakFunc={handleCheakBtn}
                checkCondition={value.cheak}
              />
            );
          })}
        </ul>
        <button onClick={handleAllclear} className="clearAllbtn">
          Clear All
        </button>
      </section>
    </>
  );
}
