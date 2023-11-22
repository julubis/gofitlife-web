import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

let token, name, role;

try {
  token = localStorage.getItem('token');
  let data = jwtDecode(token)
  name = data.name
  role = data.role
}catch(e){
  console.error(e)
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token,
    name,
    role,
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
      const { name, role } = jwtDecode(state.token);
      state.name = name;
      state.role = role;
    },
    removeToken: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.name = null;
      state.role = null;
    },
  },
});

export const { setToken, removeToken} = authSlice.actions;
export default authSlice.reducer;