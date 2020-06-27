import AsyncStorage from '@react-native-community/async-storage'
import { STORAGE_KEY } from './configs'
import { shapeTheDeck } from './helpers'

export const saveDeckTitle = (title) => {

  const deck = shapeTheDeck(title);
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
    .then(res => deck);
}

export const getDecks = () => {
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      return decks;
    });
}

const updateDecks = (updatedDecks) => {
  AsyncStorage
    .setItem(STORAGE_KEY, JSON.stringify(updatedDecks));
}

export const addCardToTheDeck = (deckId, card) => {
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      const deck = decks[deckId];
      deck.questions.push(card);
      const updatedDecks = Object.assign({}, { [deckId]: deck }, decks);
      updateDecks(updatedDecks);
    })
}



export const removeDeck = (deckId) => {
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      delete decks[deckId];
      updateDecks(decks);
    })
}