import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isWatchPage: false,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    handleMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setWatchPage: (state, action) => {
      state.isWatchPage = action.payload;
    },
  },
});

export const { toggleMenu, handleMenu, setWatchPage } = appSlice.actions;

export default appSlice.reducer;
