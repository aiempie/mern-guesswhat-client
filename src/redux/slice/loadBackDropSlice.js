import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "backdrop",
  initialState: {
    state: false,
  },
  reducers: {
    setLoadBackdrop: (state) => {
      state.state = true;
    },
    setBackdropFinish: (states) => {
      states.state = false;
    },
  },
});

export const { setLoadBackdrop, setBackdropFinish } = userSlice.actions;

export default userSlice.reducer;
