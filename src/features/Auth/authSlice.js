import { createSlice } from "@reduxjs/toolkit";
const initialAuth = {
  isSignIn : false,
  user : {
    name : '',
    email: '',
    phoneNumber: '',
  }
}

const auth = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    signIn: (state, action) => {
      state = action.payload;
      return state;
    },
  }
})

const { reducer, actions } = auth;
export const { signIn } = actions;
export default reducer;
