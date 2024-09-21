import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./todo.css";

export default function toDoList({data, deleteFunc, cheakFunc, checkCondition}) {
  
  
    return (
    <li>
      <div className="taskContainer">
        <div className="value">
          <span onClick={() => console.log(checkCondition)} className={checkCondition ? "addLinethroughText" : "notAddLinethroughTex"} style={{ fontWeight: "600" }}> {data}</span>
        </div>
        <div className="taskActionsBtn">
          <button
            onClick={() => deleteFunc(data)}
            style={{ marginRight: "7px" }}
            className="deleteBtn"
          >
            <MdDeleteForever
              style={{
                fontSize: "18px",
                padding: "3px 1.5px 1px 1.5px",
              }}
            />
          </button>{" "}
          <button onClick={() => cheakFunc(data)}  className="cheakBtn">
            <MdCheck
              style={{
                fontSize: "18px",
                padding: "3px 1.5px 1px 1.5px",
              }}
            />
          </button>
        </div>
      </div>
    </li>
  );
}
