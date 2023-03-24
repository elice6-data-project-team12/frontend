import { configureStore, createSlice } from '@reduxjs/toolkit';

let userLogin = createSlice({
  name: 'userLogin',
  initialState: {
    type: '',
    decodedToken: '',
    token: '',
    userId: '',
  },
  reducers: {
    changeLogin(state, action) {
      return { type: 'login', token: action.payload };
    },
    changeLogout(state, action) {
      return { type: 'logout', token: '' };
    },
  },
});

export let { changeLogin, changeLogout } = userLogin.actions;

export default configureStore({
  reducer: {
    userLogin: userLogin.reducer,
  },
});
