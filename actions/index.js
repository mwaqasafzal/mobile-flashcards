import { getDecks, saveDeckTitle, removeDeck } from '../utils/api'

export const RECEIVE_DATA = "RECEIVE_DATA"
export const ADD_DECK = "ADD_DECK"
export const REMOVE_DECK = "REMOVE_DECK"
export const ADD_CARD = "ADD_CARD"
export const LOADED = "LOADED"

export const receiveDataHandler = () => {
  return dispatch => {
    getDecks()
      .then(decks => {
        dispatch(receiveData(decks));
        dispatch(loaded());
      })
  }
}
export const addDeckHandler = (title) => {
  return dispatch => {
    saveDeckTitle(title)
      .then(deck => {
        dispatch(addDeck(deck));
      })
  }
}
export const removeDeckHandler = (deckId) => {
  return dispatch => {
    removeDeck(deckId)
      .then(res => {
        dispatch(_removeDeck(deckId));
      })
  }
}

const receiveData = decks => ({
  type: RECEIVE_DATA,
  decks
});

const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

const _removeDeck = deckId => ({
  type: REMOVE_DECK,
  deckId
});

const loaded = () => ({
  type: LOADED
});
