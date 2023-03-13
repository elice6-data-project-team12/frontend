import { configureStore, createSlice } from '@reduxjs/toolkit';

let cultureSpace = createSlice({
  name: 'cultureSpace',
  initialState: [],
  reducers: {
    updateData(state, action) {
      action.payload.map(data => {
        return state.push(data);
      });
    },
  },
});

export let { updateData } = cultureSpace.actions;

export default configureStore({
  reducer: {
    cultureSpace: cultureSpace.reducer,
  },
});
