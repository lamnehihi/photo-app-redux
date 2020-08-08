import photoReducer from "features/Photo/photoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  photo: photoReducer
}

const store = configureStore({
  reducer : rootReducer
});

store.subscribe(() => {
  console.log("update state", store.getState());
  localStorage.setItem('photos', JSON.stringify(store.getState()));
})

export default store;