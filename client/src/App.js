import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductDetails from './pages/ProductDetails';
import Results from './pages/Results';
import SearchBar from './components/search-bar/SearchBar';
import QueryState from './context/query/queryState';

const App = () => {
  return (
    <QueryState>
      <BrowserRouter>
        <header>
          <SearchBar />
        </header>

        <main>
          <Switch>
            <Route exact path='/items/:idProd' component={ProductDetails} />
            <Route exact path='/items' component={Results} />
          </Switch>
        </main>
      </BrowserRouter>
    </QueryState>
  );
}

export default App;
