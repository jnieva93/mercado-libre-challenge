import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ErrorMessage from '../components/error-message/ErrorMessage';
import ItemDetails from '../components/item-details/ItemDetails';

const ProductDetails = () => {
  const matchParams = useParams();
  
  const idProd = matchParams.idProd;

  const [error, setError] = useState({});
  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios.get(`/api/items/${idProd}`)
      .then(res => setProductData(res.data.item))
      .catch(error => {
        console.error(error.response);
        setError(error.response)
      });
  }, [idProd]);

  // If we got an error, show it instead of rendering the page
  if (Object.keys(error).length) return <ErrorMessage error={error} />;

  return (
    <>
      <Breadcrumb categoriesList={productData.categories} />

      {Object.keys(productData).length !== 0 &&
        <ContentContainer>
          <ItemDetails item={productData} />
        </ContentContainer>
      }
    </>
  );
}
 
export default ProductDetails;
