import React from "react";
import Board from "./Board";
import Score from "./Score";
import Table from "./Table";
import { initialState, gameReducer, resetGame, flipCard, tick } from "./state";

function App() {
  const [game, dispatch] = React.useReducer(gameReducer, initialState);
  const restartGame = React.useCallback(() => {
    dispatch(resetGame());
  }, []);
  const clickCard = React.useCallback(
    index => () => {
      dispatch(flipCard({ index }));
    },
    []
  );
  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(tick());
    }, 2000);
    return () => clearTimeout(timer);
  }, [game.opened]);
  return (
    <Table>
      <Board flipCard={clickCard} board={game} />
      <Score
        matches={game.matches.length}
        total={game.cards.length}
        moves={game.moves}
        restartGame={restartGame}
      />
    </Table>
  );
}

export default App;
