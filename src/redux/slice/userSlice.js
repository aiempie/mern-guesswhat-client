import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    assetToken: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAssetToken: (state, action) => {
      state.assetToken = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.assetToken = null;
    },
  },
});

export const { setUserInfo, setAssetToken, clearUser } = userSlice.actions;

export const selectUserInfo = (state) => state.user.userInfo;
export const selectAssetToken = (state) => state.user.assetToken;

export default userSlice.reducer;
