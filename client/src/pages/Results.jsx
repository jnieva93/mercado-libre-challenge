import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ErrorMessage from '../components/error-message/ErrorMessage';
import ResultCard from '../components/result-card/ResultCard';

const Results = () => {
  const location = useLocation();
  
  const query = location.search.split('=')[1];

  const [error, setError] = useState({});
  const [productsData, setProductsData] = useState({});
  
  useEffect(() => {
    // Allows user to search while showing error
    setError({});
    
    if (query.length) {
      axios.get(`/api/items/search=${query}`)
        .then(res => setProductsData(res.data))
        .catch(error => {
          console.error(error.response);
          setError(error.response)
        });
    }
  }, [query]);

  // Redirect to search to avoid some errors caused by the user
  if (!query) return <Redirect to={{ pathname: '/', state: { from: location } }} />

  // If we got an error, show it instead of rendering the page
  if (Object.keys(error).length) return <ErrorMessage error={error} />;

  return (
    <>
      <Breadcrumb categoriesList={productsData.categories} />

      {Object.keys(productsData).length !== 0 && productsData.items.length !== 0 &&
        <ContentContainer>
          {productsData.items.map(item => (
            <ResultCard key={item.id} item={item} />
          ))}
        </ContentContainer>
      }
    </>
  );
}
 
export default Results;
