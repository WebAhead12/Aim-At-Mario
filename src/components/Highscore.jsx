import react from "react";
import React from "react";
import "./highscore.css";

function getHighscore(token) {
  // GET

  return fetch(`${process.env.REACT_APP_API}/scoreboard`).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}
const Highscore = (props) => {
  const [array, setArray] = React.useState([]);
  const token = window.localStorage.getItem("access_token");

  React.useEffect(() => {
    getHighscore(token).then((response) => {
      setArray(response.map((score) => score));
    });
  }, []);
  console.log("array", array);
  return (
    <div className="gameboard">
      <h1>LeaderScore</h1>
      <div className="top10">
        {array.map((s, index) => (
          <div className="stats" key={index}>
            <div>
              <span className="position">{s.username}. </span>
              <span className="scoreP"> {s.highscore} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Highscore;
