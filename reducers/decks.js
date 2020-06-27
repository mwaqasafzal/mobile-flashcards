import { ADD_DECK, ADD_CARD, REMOVE_DECK, RECEIVE_DATA } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      {
        //action.card will be like{id,question:{}}
        const { deckId, card } = action.deckCard;
        return {
          ...state,
          [deckId]: {
            ...state[deckId],
            questions: state[deckId].questions.concat(card)
          }
        }

      }

    case REMOVE_DECK:
      {//using braces to scope the bindings
        const updatedState = { ...state };
        delete updatedState[action.deckId];
        return updatedState;
      }
    default:
      return state;
  }
}