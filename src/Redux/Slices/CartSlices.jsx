import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      // Find the index of the tour to remove
      console.log("action.payload.id = ", action.payload.id);
      const index = state.findIndex((item) => item.id === action.payload.id);
      console.log("Index = ", index);
      // If found, remove it from the cart
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
