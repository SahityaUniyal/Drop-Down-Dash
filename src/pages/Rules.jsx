function Rules() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-8 dark:text-gray-100">
        <h2 className="text-2xl font-bold mb-4">Rules</h2>
        <ul className="list-disc pl-4">
          <li className="mb-2">
            <span className="font-bold">Objective:</span> The objective of the
            game is to successfully drop the ball into the correct gap in each
            row of the game board.
          </li>
          <li className="mb-2">
            <span className="font-bold">Controls:</span> Use the arrow keys (or
            tap the arrows on mobile screens) to move the ball left or right.
          </li>
          <li className="mb-2">
            <span className="font-bold">Gameplay:</span> The game consists of
            multiple rows, each containing one or more gaps. The ball starts at
            the top row, and the player must navigate it down the rows by moving
            left or right.
          </li>
          <li className="mb-2">
            <span className="font-bold">Dropping the Ball:</span> To drop the
            ball into a gap, position it directly above the desired gap and
            press the down arrow key (or tap the screen).
          </li>
          <li className="mb-2">
            <span className="font-bold">Scoring:</span> Successfully dropping
            the ball into the correct gap earns points.
          </li>
          <li className="mb-2">
            <span className="font-bold">Game Over:</span> The game ends if the
            player fails to drop the ball into the correct gap.
          </li>
          <li className="mb-2">
            <span className="font-bold">Restarting the Game:</span> At any time
            during the game, players can restart by clicking the
            &ldquo;Restart&ldquo; button in the header.
          </li>
          <li className="mb-2">
            <span className="font-bold">Mobile Controls:</span> On mobile
            screens, arrow controls will be displayed on the screen to allow
            players to move the ball left or right.
          </li>
          <li>
            <span className="font-bold">Challenge Yourself:</span> Test your
            reflexes as you progress through multiple levels.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
