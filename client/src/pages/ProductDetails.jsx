import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContentContainer from '../components/content-container/ContentContainer';
import ItemDetails from '../components/item-details/ItemDetails';

const ProductDetails = () => {
  const matchParams = useParams();
  
  const idProd = matchParams.idProd;

  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios.get(`/api/items/${idProd}`)
      .then(res => setProductData(res.data.item))
      // Perhaps, I could add a popup that redirects to Home Page when clicking accept
      .catch(error => console.log(error.response));
  }, [idProd]);


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
