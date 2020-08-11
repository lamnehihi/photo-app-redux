import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";
import productApi from "api/productApi";
import Signin from "features/Auth/pages/Signin";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "features/Auth/authSlice";

//Lazy loading - code splitting
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCh8ti55pRO8oH6mFhqjqlJuzyUdSjvwLs",
  authDomain: "photo-base-17eec.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // this.setState({ isSignedIn: !!user });
        if (!user) {
          //user logout, handle sth here
          console.log("user logout!");
          const auth = {
            isSignIn: false,
            user: {
              name: '',
              email: '',
              phoneNumber: '',
            },
          };
          const action = signIn(auth);
          dispatch(action);
          return;
        }
        const auth = {
          isSignIn: true,
          user: {
            name: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
          },
        };
        const action = signIn(auth);
        dispatch(action);

        console.log("User login: ", user.displayName);
      });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  useEffect(() => {
    const fletchAllProduct = async () => {
      try {
        const params = {
          _limit: 10,
          _page: 1,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("fail to get product list:", error);
      }
    };

    fletchAllProduct();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>

            <Route path="/photos" component={Photo}></Route>
            <Route path="/sign-in" component={Signin}></Route>

            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
