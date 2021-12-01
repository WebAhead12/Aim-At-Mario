import React from "react";

function getHighscore(token) {
  // GET
  return fetch("http://localhost:4000/scoreboard", {
    method: "get",
    headers: { authorization: `Bearer ${token}` },
  }).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}
const Highscore = () => {
  const token = window.localStorage.getItem("access_token");
  const array = [];
  getHighscore(token).then((stats) => {
    stats.map((score) => {
      array.push(score.highscore);
    });
  });
  return (
    <div className="gameboard">
      <h1>LeaderScore</h1>
      <div className="top10">
        {array.map((div) => {
          <div>{div}</div>;
        })}
      </div>
    </div>
  );
};
// export default Highscore;
