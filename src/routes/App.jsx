import "./App.css";
import React from "react";
import { useNavigate, useParams } from "react-router";
import WeaponSelector from "../components/WeaponSelector.jsx";
import Game from "../components/Targets.jsx";
// import Highscore from "../components/Highscore.jsx";

function App() {
  const [shown, setShown] = React.useState(false); //toggleWeapoinSelector
  const [score, setScore] = React.useState(0); //keeping track of score
  const [count, setCount] = React.useState(0);
  const [startGame, setStartGame] = React.useState(false);
  let navigate = useNavigate();
  const token = window.localStorage.getItem("access_token");
  let { user } = useParams();

  // if (!token) {
  //   navigate("/");
  // }
  return (
    <div>
      <div className="target">
        {startGame ? (
          <Game score={score} setScore={setScore} />
        ) : (
          <div className="startGame" onClick={() => setStartGame(!startGame)}>
            Start
          </div>
        )}
      </div>
      <div className="weaponSelector">
        <WeaponSelector
          shown={shown}
          setShown={setShown}
          count={count}
          setCount={setCount}
        ></WeaponSelector>
      </div>
      {/* <Highscore /> */}
    </div>
  );
}

export default App;
