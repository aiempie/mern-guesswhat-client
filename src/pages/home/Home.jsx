import React from "react";
import GameCardLayout from "~/layouts/gameCard/GameCardLayout";
import listGame from "~/config/ListGame";

function Home() {
  const sortedListGame = listGame.sort((a, b) =>
    a.isComming === b.isComming ? 0 : a.isComming ? -1 : 1,
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-around items-around m-4 mt-2   max-w-4xl">
        {sortedListGame.map((gameInfo, index) => (
          <GameCardLayout key={index} gameInfo={gameInfo} />
        ))}
      </div>
    </div>
  );
}

export default Home;
