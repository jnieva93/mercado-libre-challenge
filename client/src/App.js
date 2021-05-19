import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import QueryProvider from './context/query/queryProvider';

import ProductDetails from './pages/ProductDetails';
import Results from './pages/Results';
import SearchBar from './components/search-bar/SearchBar';

const App = () => {
  return (
    <QueryProvider>
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
    </QueryProvider>
  );
}

export default App;
