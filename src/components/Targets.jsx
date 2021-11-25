import React from "react";
import "./target.css";

function Target({ func, delay, id, setArr }) {
  const [show, setShow] = React.useState(true);
  const position = React.useState(generateRandomPosition())[0];
  console.log(id);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, delay);
  }, [delay]);
  if (!show) {
    return "";
  }

  return (
    <div
      style={{ left: position.x + "px", top: position.y + "px" }}
      className="Target"
      onClick={(e) => {
        e.stopPropagation();
        setArr((prevArr) => prevArr.filter((element, idx) => idx !== id));
        func();
      }}
    ></div>
  );
}

function Game(props) {
  const [arr, setArr] = React.useState([]);
  const intervalRef = React.useRef();
  React.useEffect(() => {
    const interval = setInterval(() => {
      setArr((prevArr) => {
        if (prevArr) {
          if (prevArr.length >= 3) {
            clearInterval(intervalRef.current);
            return prevArr;
          } else {
            return prevArr.concat((props) => <Target func={addscore} {...props} arr={arr} setArr={setArr} delay={3000} />);
          }
        }
      });
    }, 1000);
    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, []);
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
  const addscore = () => props.setScore((prevScore) => prevScore + 5);
  const removescore = () => props.setScore((prevScore) => prevScore - 5);

  return (
    <div>
      <div className="gameBoard" style={{ margin: "100px" }} onClick={removescore}>
        <div>score: {props.score}</div>
        {arr
          ? arr.map((Element, index) => {
              return <Element id={index} key={index}></Element>;
            })
          : null}
      </div>
    </div>
  );
}

function generateRandomPosition() {
  // const gameBoard = document.getElementById("gameBoard");
  const x = Math.random() * (1000 - 77);
  const y = Math.random() * (500 - 77);

  return { x: x, y: y };
}
export default Game;
