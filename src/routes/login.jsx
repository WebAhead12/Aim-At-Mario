import "./login.css";
import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [register, setRegister] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const errObj = {
    MISSING_USERNAME: "Please enter a username",
    MISSING_PASSWORD: "Please enter a password",
    MISSING_CONFIRM_PASSWORD: "Please enter password confirmation",

    USERNAME_TAKEN: "Username already taken",

    LENGTH_PASSWORD: "Please enter a password with 6 or more letters",
    WRONG_USERNAME: "Username not found",
    WRONG_PASSWORD: "Password is incorrect",
    WRONG_CONFIRMATION_PASSWORD: "Password confirmation does not match",
    ACCOUNT_CREATED: "Account created successfully",
  };
  // check the details of the user
  const check = (str = "") => {
    if (!username) return setError(errObj.MISSING_USERNAME);
    if (!password) return setError(errObj.MISSING_PASSWORD);
    if (password.length < 6) return setError(errObj.LENGTH_PASSWORD);
    if (register) {
      console.log("yes");
      if (!confirmPassword) return setError(errObj.MISSING_CONFIRM_PASSWORD);
      if (confirmPassword !== password) return setError(errObj.WRONG_CONFIRMATION_PASSWORD);
      if (str == "taken") return setError(errObj.USERNAME_TAKEN);
      if (str == "nottaken") return setError(errObj.ACCOUNT_CREATED);
    }
  };

  const registerUser = () => {
    const user = { username: username, password: password };
    if (!register) {
      setError("");
      setRegister(!register);
      return;
    }
    check();

    if (confirmPassword === password && username && password && password.length >= 6) {
      fetch("http://localhost:4007/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("response:" + data.status);
          check(data.status);
        });
    }
  };

  function loginUser() {
    const user = { username: username, password: password };
    if (register) {
      setError("");
      setRegister(!register);
      return;
    }
    check();
    if (password && username && password.length >= 6) {
      fetch("http://localhost:4007/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status === "noUser") {
            return setError(errObj.WRONG_USERNAME);
          } else if (data.status === "wrong password") {
            return setError(errObj.WRONG_PASSWORD);
          } else {
            window.localStorage.setItem("access_token", data.access_token);
            navigate(`/${data.username}`);
          }
        });
    }
  }

  return (
    <div className="main">
      <div className="logo">
        <span style={{ color: "orange" }}>Aim</span>At<span style={{ color: "#F3404B" }}>Mario</span>
      </div>
      <div className="userDetails">
        <input type="text" placeholder="Username" className="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="text" placeholder="Password" className="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input
          type="text"
          placeholder="ConfirmPassword"
          className={register ? "confirmPassword" : "hideConfirmPassword"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <div className="error">{error}</div>
        <div className="buttons">
          <div className={register ? "login" : "loginOn"} onClick={() => loginUser()}>
            Login
          </div>
          <div className={register ? "registerOn" : "register"} onClick={() => registerUser()}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
