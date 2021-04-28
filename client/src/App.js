import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductDetails from './pages/ProductDetails';
import Results from './pages/Results';
import SearchBox from './pages/SearchBox';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/items/:idProd' component={ProductDetails} />
        <Route exact path='/items' component={Results} />
        <Route path='/' component={SearchBox} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
