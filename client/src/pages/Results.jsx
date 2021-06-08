import React from 'react';
import { useLocation } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ErrorMessage from '../components/error-message/ErrorMessage';
import ResultCard from '../components/result-card/ResultCard';

const Results = () => {
  const location = useLocation();
  
  const query = location.search.split('=')[1];

  const { response: productsData, error } = useAxios(`/api/items/search=${query}`);

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
