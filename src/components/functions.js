export function fetchstats(user) {
  return fetch(`${process.env.REACT_APP_API}${user}/stats`) //user
    .then((res) => {
      if (!res.ok) {
        const error = new Error("HTTP error");
        error.status = res.status;
        throw error;
      } else {
        return res.json();
      }
    })
    .then((stats) => {
      console.log(stats);
      return stats;
    });
}
export function setHighscore(score, user) {
  return fetch(`${process.env.REACT_APP_API}${user}/stats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { highscore: score },
  })
    .then((res) => {
      if (!res.ok) {
        const error = new Error("HTTP error");
        error.status = res.status;
        throw error;
      } else {
        return res.json();
      }
    })
    .then((stats) => {
      console.log(stats);
      return stats;
    });
}
