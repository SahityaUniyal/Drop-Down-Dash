import Row from "./Row";
import Ball from "./Ball";
import { useMyContext } from "../context/MyContext";
function GameBoard() {
  const { rowsBeforeBall, rowsAfterBall, ballPos } = useMyContext();
  return (
    <div className="sm:w-1/2 md:w-1/3 sm:mx-auto mt-10 sm:mt-20 grid grid-rows-12 gap-y-px bg-[#FFCEE0] dark:bg-slate-300">
      {rowsBeforeBall.map((row, index) => (
        <Row key={index} rowGap={row} />
      ))}
      <Ball ballPos={ballPos} />
      {rowsAfterBall.map((row, index) => (
        <Row key={index} rowGap={row} />
      ))}
    </div>
  );
}

export default GameBoard;
