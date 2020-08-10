import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import productApi from 'api/productApi';

//Lazy loading - code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fletchAllProduct = async () => {
      try {
        const response = await productApi.getAll();

        console.log(response);
      } catch (error) {
        console.log('fail to get product list:', error);
      }
    }

    fletchAllProduct();
  }, [])

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
