import React from "react";
import "./target.css";

function Target({ func }) {
  const [show, setShow] = React.useState(true);
  const position = generateRandomPosition();
  console.log(position.x + " " + position.y);
  if (!show) {
    return "";
  }

  return (
    <div
      style={{ left: position.x + "px", top: position.y + "px" }}
      className="Target"
      onClick={(e) => {
        e.stopPropagation();
        setShow(false);

        func();
      }}
    ></div>
  );
}

function Game(props) {
  if (props.score < 0) {
    return <div>end game</div>;
  }
  const addscore = () => props.setScore(props.score + 5);
  const removescore = () => props.setScore(props.score - 5);

  return (
    <div>
      <div className="gameBoard" style={{ margin: "100px" }} onClick={removescore}>
        <div>score: {props.score}</div>
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
      </div>
      <div className="onScreenGun">
        <img src={`images/${props.gun}`}></img>
      </div>
    </div>
  );
}

function generateRandomPosition() {
  // const gameBoard = document.getElementById("gameBoard");
  const x = Math.random() * (1000 - 77);
  const y = Math.random() * (500 - 77);
  console.log(x + " " + y);
  return { x: x, y: y };
}
export default Game;
