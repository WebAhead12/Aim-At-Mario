import React from "react";
import "./target.css";

function Target({ hehe, func }) {
  const [show, setShow] = React.useState(true);
  if (!show) {
    return "";
  }

  return (
    <div
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
      <div
        className="gameBoard"
        style={{ margin: "100px" }}
        onClick={removescore}
        width="1000px"
        height="1000px"
        padding="10px"
      >
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

// function stopCreation(myvar) {
//   clearInterval(myvar);
// }
export default Game;
