import React, { useEffect } from 'react';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();

  const query = location.search.split('=')[1];
  
  useEffect(() => {
    if (query.length) {
      axios.get(`/api/items/search=${query}`)
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    }
  }, [query]);

  // Redirect to search to avoid errors caused by the user
  if (!query) return <Redirect to={{ pathname: '/', state: { from: location } }} />

  return (
    <h1>Results</h1>
  );
}
 
export default Results;
