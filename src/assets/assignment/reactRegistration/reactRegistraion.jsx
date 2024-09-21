import { useState } from "react";

import "./reactRegistraion.css";

export default function reactRegistraion() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="UserLiveInfo">
        <p>
          I am <span> {user.firstName} {user.lastName}</span>, my Email Address is <span>{user.email}</span>, my password <span>{user.password}</span> and finally i use this <span>{user.phoneNumber}</span> number.
        </p>
      </div>
      <div className="Myroot">
        <div className="MainDiv">
          <h1>React Registration Form</h1>
          <p>please fill in this form to create a account </p>
          <form onSubmit={handleSubmit}>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleUser}
                type="text"
                value={user.firstName}
                placeholder="First name"
                name="firstName"
                required
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last name </label>
              <input
                onChange={handleUser}
                type="text"
                value={user.lastName}
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleUser}
                type="email"
                value={user.email}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleUser}
                type="password"
                value={user.password}
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="phoneNumber">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                onChange={handleUser}
                type="number"
                value={user.phoneNumber}
                name="phoneNumber"
                placeholder="Number"
                required
              />
            </div>
            <div className="btns">
              <button type="submit">Sign Up</button>
              <p>
                Already has a account? to <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
