import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../utils/types";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: any, action: { payload: ProductType }) => {
      state.items = [...state.items, action.payload];
    },

    clearBasket: (state: any) => {
      state.items = [];
    },
  },
});

// export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const { addToBasket, clearBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.basket.items;

export const selectTotal = (state: any) =>
  state.basket.items.reduce((total: any, item: any) => total + item.price, 0);

export const selectTotalVAT = (state: any) =>
  state.basket.items.reduce((total: any, item: any) => total + item.vat, 0);

export default basketSlice.reducer;
