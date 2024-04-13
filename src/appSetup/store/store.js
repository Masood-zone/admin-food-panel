import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import adminReducer from "../slices/admin/index";
import cartReducer from "../slices/cart/index";
import categoryReducer from "../slices/category/index";
import recipeReducer from "../slices/recipie/index";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAdminReducer = persistReducer(persistConfig, adminReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    admin: persistedAdminReducer,
    category: categoryReducer,
    cart: cartReducer,
    recipe: recipeReducer,
  },
});

export const persistor = persistStore(store);

export default store;
