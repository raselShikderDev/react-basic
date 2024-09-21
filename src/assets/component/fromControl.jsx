import { useState } from "react";

export default function FromControl() {
  const [users, setUsers] = useState({ name: "", email: "", pass: "" });
  const { name, email, pass } = users;

  const handlChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    console.log("user: ", users)
  };

  const handaleSubmit = (e) => {
    console.log("form is submitted: ", name, email, pass);
    console.log("on submit", users)
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registrion</h1>
      <form action="" onSubmit={handaleSubmit}>
        <div className="from-group">
          <label htmlFor="Name">
            Name :{" "}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handlChange}
            required
          />
        </div>
        <div className="from-group">
          <label htmlFor="email">
            Email :{" "}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            name="email"
            onChange={handlChange}
            required
          />
        </div>
        <div className="from-group">
          <label htmlFor="password" name="password">
            Pasword :{" "}
          </label>
          <input
            id="password"
            type="password"
            name="pass"
            onChange={handlChange}
            value={pass}
            required
          />
        </div>
        <div>
          <button id="submit" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
