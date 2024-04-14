import { configureStore, createSlice } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";

// Creating Store
const createStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})

// Exporting Store
export default createStore;