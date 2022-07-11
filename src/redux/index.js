import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ItemsReducer } from "./reducers/items";
import { CommentsReducer } from "./reducers/comments";
import { GlobalSettingsReducer } from "./reducers/globalSettings";

const store = configureStore({
  reducer: {
    items: ItemsReducer,
    comments: CommentsReducer,
    globalSettings: GlobalSettingsReducer,
  },
});

export default store;
