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
    return (
      <div className="lose">
        <div className="gameOver">Game Over</div>
        <a className="startOver" href="/">
          Start Over
        </a>
      </div>
    );
  }
  if (props.score == 30) {
    return (
      <div className="lose">
        <div className="gameOver">You Won</div>
        <a className="startOver" href="/">
          Play Again
        </a>
      </div>
    );
  }
  function Miss() {
    return <div className="miss">no</div>;
  }
  const addscore = () => props.setScore(props.score + 5);
  const removescore = () => props.setScore(props.score - 5);

  return (
    <div>
      <div
        className="gameBoard"
        style={{ margin: "100px" }}
        onClick={removescore}
        width="1000px"
        height="1000px"
        padding="10px"
      >
        <div className="score">score: {props.score}</div>
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
        <Target func={addscore} />
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
