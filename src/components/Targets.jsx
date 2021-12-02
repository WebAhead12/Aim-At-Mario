import React from "react";
import "./target.css";
import { missShot, randomHitSounds } from "./soundEffect";
import { fetchstats, setHighscore } from "./functions.js";
function Target({ func, delay, id, setArr }) {
  const [show, setShow] = React.useState(true);
  const position = React.useState(generateRandomPosition())[0];
  const [sound, setSound] = React.useState(null);

  React.useEffect(() => {
    if (!sound) return;
    sound.play();
  }, [sound]);

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
        setSound(new Audio(randomHitSounds()));
        setTimeout(() => {
          setArr((prevArr) => prevArr.filter((element, idx) => idx !== id));
          func();
        }, 0);
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
            return prevArr.concat((props) => (
              <Target
                func={addscore}
                {...props}
                arr={arr}
                setArr={setArr}
                delay={3000}
              />
            ));
          }
        }
      });
    }, 500);
    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, []);
  if (props.miss == 3) {
    url = searchParams.get;
    token = window.localStorage.getItem("access_token");
    fetchstats(token).then((stats) => {
      if (stats < props.score) {
        setHighscore(props.score, token);
      }
    });

    return (
      <div>
        <div className="lose">
          <div className="gameOver">Game Over</div>
          <a className="startOver" href="/">
            Start Over
          </a>
        </div>
        <h1 className="scorelost">Score:{props.score}</h1>
      </div>
    );
  }

  const addscore = () => {
    props.setScore((prevScore) => prevScore + 5);
  };
  const addMiss = () => props.setMiss((prevMiss) => prevMiss + 1);

  return (
    <div className="allGame">
      <div>
        <h1>Aim At Mario</h1>
      </div>
      <div className="score">score: {props.score}</div>
      <div className="score">lives: {3 - props.miss}</div>

      <div
        className="gameBoard"
        style={{ margin: "100px" }}
        onClick={() => {
          missShot.play();
          addMiss();
        }}
      >
        {arr
          ? arr.map((Element, index) => {
              return (
                <Element addMiss={addMiss} id={index} key={index}></Element>
              );
            })
          : null}
      </div>
    </div>
  );
}

function generateRandomPosition() {
  // const gameBoard = document.getElementById("gameBoard");
  const x = Math.random() * (500 - 77);
  const y = Math.random() * (400 - 77);

  return { x: x, y: y };
}
export default Game;
