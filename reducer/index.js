import beginingState from '../utils/beginingState';

export default function decks(state = beginingState, action) {
  switch (action.type) {
    case 'ADD_DECK':
      return Object.assign({}, state, { [action.deck.id]: action.deck });
    case 'ADD_CARD':
      return Object.assign({}, state[action.deckId].questions.push(action.card));
    default:
      return state;
  }
}
