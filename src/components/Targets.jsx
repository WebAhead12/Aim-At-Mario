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
  if (props.count < 0) {
    return <div>end game</div>;
  }
  const addcount = () => props.setCount(props.count + 5);
  const removecount = () => props.setCount(props.count - 5);

  return (
    <div
      className="gameBoard"
      style={{ margin: "100px" }}
      onClick={removecount}
      width="1000px"
      height="1000px"
      padding="10px"
    >
      <div>score: {props.count}</div>
      <Target func={addcount} />
      <Target func={addcount} />
      <Target func={addcount} />
      <Target func={addcount} />
      <Target func={addcount} />
      <Target func={addcount} />
    </div>
  );
}

// function stopCreation(myvar) {
//   clearInterval(myvar);
// }
export default Game;
