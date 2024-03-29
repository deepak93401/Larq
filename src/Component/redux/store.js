import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from './cartSlice'
const persistConfig = {
  key: `root `,
  storage,
};


const rootReducer = combineReducers({
    cartReducer,
   
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);