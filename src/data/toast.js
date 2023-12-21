import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    type: '',
    message: '',
  },
  reducers: {
    setToast: (state, action) => {
      const {type, message } = action.payload;
      state.type = type;
      state.message = message;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;