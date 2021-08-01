const alerts = {
  pass: [
    "Amazing Job!",
    "Not Bad!",
    "You've got a knack for this!",
    "Impressive!",
  ],
  fail: ["Game Over", "You've picked that one before!"],
};

export const PassFail = (props) => {
  return (
    <div>
      {props.didWin === false &&
        props.didPass === true &&
        alerts.pass[Math.floor(Math.random() * alerts.pass.length)]}
      {props.didPass === false && <div className="game-over">Game Over</div>}
      {props.didWin && (
        <div className="win-alert">
          Congratulation you won!
          <button onClick={props.resetGame}>play again</button>{" "}
        </div>
      )}
    </div>
  );
};
