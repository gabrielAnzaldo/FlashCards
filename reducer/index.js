import initialState from '../utils/initialState';

export default function decks(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DECK':
      return Object.assign({}, state, { [action.deck.id]: action.deck });
    case 'ADD_CARD':
      state[action.deckId].questions.push(action.card);
      return Object.assign({}, state);
    default:
      return state;
  }
}
