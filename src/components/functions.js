export function fetchstats(token) {
  return fetch(`${process.env.REACT_APP_API}/stats`, {
    headers: { authorization: `Bearer ${token}` },
  }) //user
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
export function setHighscore(score, token) {
  console.log("post");

  return fetch(`${process.env.REACT_APP_API}/stats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ highscore: score }),
  }).then((res) => {
    console.log(res, "res");
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}
