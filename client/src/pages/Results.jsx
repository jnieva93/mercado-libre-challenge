import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ResultCard from '../components/result-card/ResultCard';

const Results = () => {
  const location = useLocation();

  const [productsData, setProductsData] = useState({});

  const query = location.search.split('=')[1];
  
  useEffect(() => {
    if (query.length) {
      axios.get(`/api/items/search=${query}`)
        .then(res => {
          console.log(res.data);

          setProductsData(res.data);
        })
        .catch(error => console.log(error));
    }
  }, [query]);

  // Redirect to search to avoid errors caused by the user
  if (!query) return <Redirect to={{ pathname: '/', state: { from: location } }} />

  return (
    <>
      <Breadcrumb categoriesList={productsData.categories} />

      {Object.keys(productsData).length !== 0 &&
        <ContentContainer text='Resultados'>
          {productsData.items.map(item => (
            <ResultCard key={item.id} item={item} />
          ))}
        </ContentContainer>
      }
    </>
  );
}
 
export default Results;
