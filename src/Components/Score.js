export const Score = (props) => {
  return (
    <div>
      <p>Current Score: {props.currentScore}</p>
      <p>Best Score: {props.bestScore}</p>
    </div>
  );
};
