import { useRef, useState } from "react";


export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  // console.log(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
                  <MyCompopent type="text" placeholder="Your username" name="username" ref={username} />
                  <MyCompopent type="password" placeholder="Your password" name="password" ref={password}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};


function MyCompopent({placeholder, type, name, ref}) {
    return (
        <div>
          <input placeholder={placeholder} type={type} name={name} ref={ref} />
        </div>
    )
}