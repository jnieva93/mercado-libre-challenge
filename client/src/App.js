import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Results from './pages/Results';
import SearchBar from './components/search-bar/SearchBar';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <SearchBar />
      </header>

      <main>
        <Switch>
          <Route exact path='/items/:idProd' component={ProductDetails} />
          <Route exact path='/items' component={Results} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
