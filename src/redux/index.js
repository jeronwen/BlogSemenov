import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ItemsReducer } from "./reducers/items";
import { GlobalSettingsReducer } from "./reducers/globalSettings";

const store = configureStore({
  reducer: { items: ItemsReducer, globalSettings: GlobalSettingsReducer },
});

export default store;
