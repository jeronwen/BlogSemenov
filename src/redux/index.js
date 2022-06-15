import { configureStore } from "@reduxjs/toolkit";
import { ItemsReducer } from "./reducers/items";

const store = configureStore({ reducer: ItemsReducer });

export default store;
