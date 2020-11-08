import { useState } from "react";

const Scoreboard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <div>This is a Scoreboard</div>
      <div>
        Current score: {currentScore}
        <br />
        Best score: {bestScore}
      </div>
    </div>
  );
};

export default Scoreboard;
