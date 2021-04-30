import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const matchParams = useParams();
  
  const idProd = matchParams.idProd;

  axios.get(`/api/items/${idProd}`)
    .then(res => console.log(res.data))
    // Perhaps, I could add a popup that redirects to Home Page when clicking accept
    .catch(error => console.log(error.response));

  return (
    <h1>Product Details</h1>
  );
}
 
export default ProductDetails;
