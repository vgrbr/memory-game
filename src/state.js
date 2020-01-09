import SYMBOLS from "./symbols";
import shuffle from "lodash.shuffle";

const FLIP_CARD = "FLIP_CARD";
const RESET_GAME = "RESET_GAME";
const TICK = "TICK";

export function resetGame() {
  return { type: RESET_GAME };
}

export function flipCard(payload) {
  return { type: FLIP_CARD, payload };
}

export function tick() {
  return { type: TICK };
}

const shuffleCards = symbols =>
  shuffle([...symbols, ...symbols]).map((symbol, index) => ({
    symbol,
    position: index
  }));

export const initialState = {
  cards: shuffleCards(SYMBOLS),
  opened: [],
  matches: [],
  moves: 0
};

export function gameReducer(state, action) {
  switch (action.type) {
    case FLIP_CARD:
      const { index, tick } = action.payload;
      if (
        state.opened.indexOf(index) !== -1 ||
        state.matches.indexOf(index) !== -1
      ) {
        return state;
      }
      return {
        ...state,
        moves: state.opened.length === 1 ? state.moves + 1 : state.moves,
        opened: state.opened.length === 2 ? [index] : [...state.opened, index],
        matches: [
          ...state.matches,
          ...(state.opened.length === 1 &&
          state.cards[state.opened[0]].symbol === state.cards[index].symbol
            ? [state.opened[0], index]
            : [])
        ],
        tick
      };
    case RESET_GAME:
      return {
        cards: shuffleCards(SYMBOLS),
        opened: [],
        matches: [],
        moves: 0
      };
    case TICK:
      if (state.opened.length === 2) {
        return {
          ...state,
          opened: []
        };
      }
      return state;
    default:
      throw new Error();
  }
}
