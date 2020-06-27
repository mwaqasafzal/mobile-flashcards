
export default store => next => action => {
  console.group(action.type);;
  console.log(action);
  console.groupEnd();
  console.log("store");
  console.log(store.getState())

  return next(action);
}