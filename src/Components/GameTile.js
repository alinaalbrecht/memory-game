export const GameTile = (props) => {
  return (
    <div
      className="game-tile"
      onClick={(e) => {
        props.addPresident(e);
        props.generateGameBoard();
      }}
      id={props.president.name}
    >
      <div className="game-tile__portrait">
        <img src={props.president.img} alt="" />
      </div>
      <div className="game-tile__name">{props.president.name}</div>
    </div>
  );
};
