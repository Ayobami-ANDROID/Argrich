import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/features/auth/authSlice";
import productReducer from "../../src/features/product/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productReducer
  },
});


export default store;
