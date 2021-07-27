import "../GameBoard.scss";
import { GameTile } from "./GameTile";

export const GameBoard = (props) => {
  return (
    <div className="game-board">
      {props.roundPresidents.map((president) => (
        <GameTile
          president={president}
          generateGameBoard={props.generateGameBoard}
          addPresident={props.addPresident}
        />
      ))}
    </div>
  );
};
