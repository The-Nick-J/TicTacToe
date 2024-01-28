import React from "react";

function Score({xScore, oScore, xName, oName}) {
  return (
    <div className="score">
      <div className="score-x">{xName}: {xScore}</div>
      <div className="score-o"> {oName}: {oScore}</div>
    </div>
  );
}

export default Score;