import {useState} from "react";

import "./loginForm.css";

export default function LoginForm() {
    const [userData, setUserData] = useState({
        userOrEmail: "",
        password:""
    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData((preValue) => ({...preValue, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData)
    }
  
    return (
    <div className="Myroot">
      <div className="MainDiv">
              <h1>LogIn</h1>
              <form onSubmit={handleSubmit}>
                  <div className="userName">
                      <label htmlFor="userOrEmail">Username</label>
                      <input onChange={handleInputChange} value={userData.userOrEmail} type="text" name="userOrEmail" placeholder="username or email" required />
                  </div>
                  <div className="password">
                      <label htmlFor="password">Password</label>
                      <input onChange={handleInputChange} value={userData.password} type="password" name="password" placeholder="Password" />
                  </div>
                  <div className="btns">
                  <button type="submit">LogIn</button>
                  <p>don't you have account? <a href="#">SignUp</a></p>
                  </div>
              </form>
      </div>
    </div>
  );
}
