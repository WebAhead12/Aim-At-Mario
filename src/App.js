import "./App.css";
import React from "react";
import WeaponSelector from "./structure/WeaponSelector.jsx";

function App() {
  const [shown, setShown] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return <WeaponSelector shown={shown} setShown={setShown} count={count} setCount={setCount}></WeaponSelector>;
}

export default App;
