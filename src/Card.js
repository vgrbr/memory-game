/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const baseCard = css`
  width: 100px;
  height: 100px;
  text-align: center;
  border: 2px solid #fff;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s;
  transformstyle: preserve-3d;
  cursor: pointer;
`;

const flippedCard = css`
  transform: rotateY(180deg);
`;

const cardSide = css`
  transition: transform 1s;
  transform-style: preserve-3d;
  color: white;
  width: 100%;
  backface-visibility: hidden;
  font-size: 80px;
`;

const cardSideBack = css`
  background: #fff;
`;

export default function(props) {
  return (
    <div
      css={[baseCard, props.flipped && flippedCard]}
      onClick={props.flipCard(props.index)}
    >
      <span css={[cardSide, props.flipped && cardSideBack]}>
        {props.flipped ? props.symbol : "✮"}
      </span>
    </div>
  );
}
