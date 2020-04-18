import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'; 
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE </h1>
    </div>
  );
};

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <SignInAndSignUpPage />
        </Switch>
    </BrowserRouter>
      
  </div>
  );
  
}

export default App;
