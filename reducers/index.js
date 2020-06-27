import { combineReducers } from 'redux'
import deckReducer from './decks'
import loadedReducer from './loaded'

export default combineReducers({ decks: deckReducer, isLoaded: loadedReducer })