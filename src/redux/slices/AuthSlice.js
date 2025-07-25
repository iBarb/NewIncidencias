import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      const { token, ...userData } = action.payload;
      state.user = userData;
      state.token = token;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
    },
    replaceState(_, action) {
      return action.payload;
    },
  },
});

export const { setUser, clearUser, replaceState } = authSlice.actions;

export default authSlice.reducer;
