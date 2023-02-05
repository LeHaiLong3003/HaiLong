const { createSlice } = require('@reduxjs/toolkit');
const { StorageConstants } = require('src/utils/enum');

const initialState = {
  loading: false,
  currentUsers: JSON.parse(localStorage.getItem(StorageConstants.USER)) || {},
  accessToken: localStorage.getItem(StorageConstants.ACCESS_TOKEN) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login
    login(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.currentUsers = action.payload.data.data.user;
      state.accessToken = action.payload.data.data.token;
    },
    loginFailed(state) {
      state.loggedIn = false;
      state.loading = false;
    },
  },
});

// Action
export const authActions = authSlice.actions;

// Selector
export const selectAuthRole = (state) => state.auth.currentUsers.role;
export const selectAuthToken = (state) => state.auth.accessToken;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
