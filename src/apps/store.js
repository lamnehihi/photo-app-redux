import photoReducer from "features/Photo/photoSlice";
import authReducer from "features/Auth/authSlice";

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  photo: photoReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  console.log("update state", store.getState());
  localStorage.setItem("photos", JSON.stringify(store.getState().photo));
});

export default store;
