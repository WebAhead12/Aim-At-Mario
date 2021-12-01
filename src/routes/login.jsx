import "./login.css";
import React from "react";
import { useNavigate, useParams } from "react-router";

function Login() {
  const [register, setRegister] = React.useState(false);
  return (
    <div className="main">
      <input type="text" placeholder="Username" className="username"></input>
      <input type="text" placeholder="Password" className="password"></input>
      <input type="text" placeholder="ConfirmPassword"></input>
      <div>
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
}

export default Login;
