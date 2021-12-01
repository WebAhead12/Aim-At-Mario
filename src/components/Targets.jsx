import React from "react";
import "./target.css";
import { missShot, randomHitSounds } from "./soundEffect";

function Target({ func, removescore, delay, id, setArr }) {
  const [show, setShow] = React.useState(true);
  const position = React.useState(generateRandomPosition())[0];
  const [sound, setSound] = React.useState(null);
  console.log(id);

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
    removescore();
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
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setArr((prevArr) => {
  //       if (prevArr) {
  //         if (prevArr.length >= 3) {
  //           clearInterval(intervalRef.current);
  //           return prevArr;
  //         } else {
  //           return prevArr.concat((props) => (
  //             <Target
  //               func={addscore}
  //               {...props}
  //               arr={arr}
  //               setArr={setArr}
  //               delay={3000}
  //             />
  //           ));
  //         }
  //       }
  //     });
  //   }, 1000);
  //   intervalRef.current = interval;

  //   return () => clearInterval(intervalRef.current);
  // }, []);
  // if (props.score < 0) {
  //   return (
  //     <div className="lose">
  //       <div className="gameOver">Game Over</div>
  //       <a className="startOver" href="/">
  //         Start Over
  //       </a>
  //     </div>
  //   );
  // }
  if (props.score == 30) {
    return (
      <div className="win">
        <div className="gameOver">You Won</div>
        <a className="startOver" href="/">
          Play Again
        </a>
      </div>
    );
  }
  // function Miss() {
  //   return <div className="miss">no</div>;
  // }
  const addscore = () => props.setScore((prevScore) => prevScore + 5);
  const removescore = () => props.setScore((prevScore) => prevScore - 5);

  return (
    <div className="allGame">
      <div>
        <h1>Aim At Mario</h1>
      </div>
      <div className="score">score: {props.score}</div>

      <div
        className="gameBoard"
        style={{ margin: "100px" }}
        onClick={() => {
          missShot.play();
          removescore();
        }}
      >
        {arr
          ? arr.map((Element, index) => {
              return (
                <Element
                  removescore={removescore}
                  id={index}
                  key={index}
                ></Element>
              );
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
