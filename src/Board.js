import React from "react";
import Card from "./Card";

const style = {
  background: "#009951",
  borderRadius: "15px",
  padding: 20,
  display: "flex",
  flexFlow: "row wrap",
  maxWidth: "500px",
  margin: "0 auto",
  perspective: "800px"
};

export default function Board({ board, flipCard }) {
  return (
    <div style={style}>
      {board.cards.map((card, index) => (
        <Card
          key={index}
          symbol={card.symbol}
          index={card.position}
          flipCard={flipCard}
          flipped={
            board.opened.indexOf(card.position) !== -1 ||
            board.matches.indexOf(card.position) !== -1
          }
        />
      ))}
    </div>
  );
}
