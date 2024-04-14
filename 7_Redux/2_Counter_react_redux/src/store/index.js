import { createStore } from 'redux'

// Intitial Value
const INITIAL_VALUE = {
  count: 0
}

//  Reducer function
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type == 'INCREMENT') {
    newStore = { count: store.count + 1 }
  }
  else if (store.count > 0 && action.type == 'DECREMENT') {
    newStore = { count: store.count - 1 }
  }
  else if (action.type == 'ADD') {
    newStore = { count: store.count + action.payload.value }
  }
  else if (store.count > 0 && action.type == 'SUB') {
    newStore = { count: store.count - action.payload.value }
  }
  else if (action.type == 'RESET') {
    newStore = { count: 0 }
  }


  return newStore;
}

// Creating Store
const counterStore = createStore(reducer)

// Exporting Store
export default counterStore