import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const { setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;

export { setTheme };
