import AsyncStorage from '@react-native-community/async-storage'
import { STORAGE_KEY } from './configs'
import { shapeTheDeck } from './helpers'

export const saveDeckTitle = (title) => {
  console.log(title);
  const deck = shapeTheDeck(title);
  console.log('deck');
  console.log(deck);
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
    .then(res => deck);
}

export const getDecks = () => {
  console.log('getting decks');
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      console.log(decks)
      return decks;
    });
}

export const getDeck = deckId => {
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      return decks[deckId];
    })
}

const updateDecks = (updatedDecks) => {
  AsyncStorage
    .setItem(STORAGE_KEY, JSON.stringify(updatedDecks));
}

export const addCardToTheDeck = (deckId, card) => {
  AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      console.log('All Decks,now updating');
      console.log(decks);
      const deck = decks[deckId];
      deck.questions.push(card);
      const updatedDecks = Object.assign({}, { [deckId]: deck }, decks);
      updateDecks(updatedDecks);
    })
}



export const removeDeck = (deckId) => {
  console.log("removing deck");
  return AsyncStorage
    .getItem(STORAGE_KEY)
    .then(res => {
      const decks = JSON.parse(res);
      delete decks[deckId];
      updateDecks(decks);
    })
}