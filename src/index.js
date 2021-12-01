import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App.jsx";
// import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:user" element={<App />} />
        {/* <Route path="/login" element={Login} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
