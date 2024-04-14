const redux = require('redux');

// Intial value
const INITIAL_VALUE = {
  count: 0
}


//Reducer function
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { count: store.count + 1 }
  }
  return newStore
}

// Create a store 
const store = redux.createStore(reducer);

// temp subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
}

// Redux Subscriber
store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });