import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';

//Lazy loading - code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from='/' to='/photos'></Redirect>

            <Route path="/photos" component={Photo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
