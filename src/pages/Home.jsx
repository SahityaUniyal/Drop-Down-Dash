import { useState, useEffect } from "react";
import { ArrowGroup, GameBoard } from "../components";
import { moveBall } from "../utils/helper.js";
import { MyContextProvider } from "../context/MyContext.jsx";
import { useRows } from "../hooks/useRows.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [score, setScore] = useState(0);
  const [ballPos, setBallPos] = useState(1);
  const [rowsBeforeBall, rowsAfterBall, correctMove] = useRows();
  const [gameStatus, setGameStatus] = useState(false);
  const navigate = useNavigate();
  const handleArrows = (arrow) => {
    setGameStatus(true);
    if (arrow === "ArrowDown") {
      const correctPos = rowsAfterBall[0];
      if (ballPos !== correctPos) {
        navigate(`/game-over?score=${score}`);
      } else {
        correctMove(correctPos);
        setScore((prev) => prev + 1);
      }
    } else if (arrow !== "ArrowUp") {
      moveBall(arrow, setBallPos);
    }
  };
  useEffect(() => {
    const keypress = (e) => {
      if (e.key.startsWith("Arrow")) {
        handleArrows(e.key);
      }
    };
    addEventListener("keydown", keypress);
    return () => {
      removeEventListener("keydown", keypress);
    };
  }, [ballPos, rowsAfterBall, rowsBeforeBall]);
  return (
    <>
      {/* header height h-[5vh] md:h-[8vh] lg:h-[10vh] */}
      <MyContextProvider
        value={{
          ballPos,
          rowsBeforeBall,
          rowsAfterBall,
        }}
      >
        <div className="text-black dark:text-red-300 mt-5 flex justify-center">
          {!gameStatus ? (
            <div>Game Auto Start On Arrow Press</div>
          ) : (
            <div>Score: {score}</div>
          )}
        </div>
        <main className="min-h-[40vh] sm:h-[60vh] mx-1 md:mx-0">
          <GameBoard />
        </main>
        <div className="mt-2 min-h-[8vh] md:hidden flex justify-center items-center">
          <ArrowGroup handleArrows={handleArrows} />
        </div>
      </MyContextProvider>
    </>
  );
};

export default Home;
