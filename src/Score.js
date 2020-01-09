import React from "react";

const style = {
  textAlign: "center",
  borderRadius: "5px",
  background: "#00743D",
  padding: 10,
  color: "#fff",
  lineHeight: 2
};

export default function Score({ matches, total, moves, restartGame }) {
  return (
    <div style={style}>
      <div>
        {matches === total ? (
          <>
            <span role="img" aria-label="Tada!">
              🎉
            </span>
            <button onClick={restartGame}>Restart game</button>
          </>
        ) : (
          `${matches}/${total}`
        )}
      </div>
      Moves: {moves}
    </div>
  );
}
