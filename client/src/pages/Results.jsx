import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const Results = () => {
  const location = useLocation();

  const [productData, setProductData] = useState({});

  const query = location.search.split('=')[1];
  
  useEffect(() => {
    if (query.length) {
      axios.get(`/api/items/search=${query}`)
        .then(res => {
          console.log(res.data);

          setProductData(res.data);
        })
        .catch(error => console.log(error));
    }
  }, [query]);

  // Redirect to search to avoid errors caused by the user
  if (!query) return <Redirect to={{ pathname: '/', state: { from: location } }} />

  return (
    <>
      <Breadcrumb categoriesList={productData.categories} />
      <h1>Results</h1>
    </>
  );
}
 
export default Results;
