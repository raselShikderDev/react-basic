import { useReducer } from "react";

export default function UseReducer() {
  const initialState = {
    // increment: "increment",
    // decrement: "decrement",
    // reset: "reset",
    count: 0,
  };

  const reducer = (state, action) => {
    // if (action.type === "increment") {
    //   return state + 1;
    // }

    // if (action.type === "decrement") {
    //   return state - 1;
    //     }
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
        break;
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
        break;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer());

  return (
    <div className="flex gap-2 flex-col h-screen w-screen justify-center items-center">
      <p>{count.count}</p>
      <button
        onClick={() => dispatch("increment")}
        className="bg-red-400 rounded py-1 px-4"
        disabled={count.count >= 10 ? true : false}
      >
        IncreMent
      </button>
      <button
        onClick={() => dispatch("decrement")}
        className="bg-green-400 rounded py-1 px-4"
        disabled={count.count <= 10 ? false : true}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch("reset")}
        className="bg-sky-600 rounded py-1 px-4"
      >
        Reset
      </button>
    </div>
  );
}
