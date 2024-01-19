import React from "react";

function Score({xScore, oScore}) {
  return (
    <div className="score">
      <div className="score-x">X: {xScore}</div>
      <div className="score-o"> O: {oScore}</div>
    </div>
  );
}

export default Score;