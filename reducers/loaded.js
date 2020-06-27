import { LOADED } from '../actions'
export default (state = false, action) => {
  switch (action.type) {
    case LOADED:
      return true;
    default:
      return state;
  }
}