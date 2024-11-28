import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default: localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import tasks from "Store/AddTask/index";
import settings from "Store/Settings/index";

// Create a persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  tasks, // Add your slice reducer here
  settings,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Export the persistor and store
export const persistor = persistStore(store);
export default store;
