import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = { items: [] };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, updatedItem } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) state.items[index] = updatedItem;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, editItem, deleteItem } = itemsSlice.actions;

const store = configureStore({ reducer: { items: itemsSlice.reducer } });

export default store;