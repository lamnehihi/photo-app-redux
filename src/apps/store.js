import photoReducer from "features/Photo/photoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  photo: photoReducer
}

const store = configureStore({
  reducer : rootReducer
});

export default store;