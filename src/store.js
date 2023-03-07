import { configureStore, createSlice } from "@reduxjs/toolkit";

let test = createSlice({
  name: "item",
  initialState: [
    { id: 0, name: "test1", count: 2 },
    { id: 2, name: "test2", count: 1 },
  ],
  reducers : {
    changeName(state){
      return 'hello world' + state[0].count
    }
  }
});

export let { changeName } = test.actions

export default configureStore({
  reducer: {
    test: test.reducer,
  },
});