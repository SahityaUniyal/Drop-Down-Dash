import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function GameOver() {
  const [searchParams] = useSearchParams();
  const score = searchParams.get("score");
  const navigate = useNavigate();
  return (
    <div className="w-max mx-auto mt-10 flex flex-col items-center gap-5 text-black dark:text-red-300 hover:text-red-600">
      <div className="text-2xl text-black dark:text-white">Game Over</div>
      <div className="text-black dark:text-white">
        Your Score: <span className="text-xl">{score}</span>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-black bg-orange-100 hover:bg-orange-200 p-3 rounded-xl"
      >
        Click To Play Again
      </button>
    </div>
  );
}

export default GameOver;
