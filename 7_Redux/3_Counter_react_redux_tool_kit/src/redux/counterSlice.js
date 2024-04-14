import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => { state.counterVal++ },
    decrement: (state) => {
      if (state.counterVal > 0)
        state.counterVal--
    },
    add: (state) => { state.counterVal += 5 },
    sub: (state) => {
      if (state.counterVal > 0)
        state.counterVal -= 5
    },
    reset: (state) => { state.counterVal = 0 },
  }
})

export const counterActions = counterSlice.actions;
export default counterSlice
