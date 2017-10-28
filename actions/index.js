export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const operateDeck = deck => ({
  type: ADD_DECK,
  deck,
});

export const operateCard = (card, deckId) => ({
  type: ADD_CARD,
  card,
  deckId,
});
