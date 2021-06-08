import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ErrorMessage from '../components/error-message/ErrorMessage';
import ItemDetails from '../components/item-details/ItemDetails';

const ProductDetails = () => {
  const matchParams = useParams();
  
  const idProd = matchParams.idProd;

  const { response, error } = useAxios(`/api/items/${idProd}`);

  const productData = response.item;

  // If we got an error, show it instead of rendering the page
  if (Object.keys(error).length) return <ErrorMessage error={error} />;
  
  if (!productData) return null;

  return (
    <>
      <Breadcrumb categoriesList={productData.categories} />

      <ContentContainer>
        <ItemDetails item={productData} />
      </ContentContainer>
    </>
  );
}
 
export default ProductDetails;
