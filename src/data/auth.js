import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

let user;

try {
  const token = localStorage.getItem('token');
  const { name, role } = jwtDecode(token);
  user = { name, role, token }
}catch {
  user = {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user,
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload);
      const { name, role } = jwtDecode(action.payload);
      state.user = { name, role, token: action.payload };
    },
    removeToken: (state) => {
      localStorage.removeItem('token');
      state.user = {};
    },
    setProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setToken, setProfile, removeToken} = authSlice.actions;
export default authSlice.reducer;