import React from 'react';
import { addThousandsPoint, formatCondition, formatCurrency, formatDecimal, formattedSoldQuantity } from '../../utils/formattingFunctions';
import MeliButton from '../meli-button/MeliButton';
import './item-details.styles.scss';

const ItemDetails = ({ item }) => {
  return (
    <>
      <div className='item-details-container'>
        <div className='details-image-container'>
          <img src={item.picture} alt={item.title} className='item-details-image' />
        </div>

        <div className='item-overview-container'>
          <span className='product-status'>
            {`${formatCondition(item.condition)} ${formattedSoldQuantity(item.sold_quantity)}`}
          </span>
          <span className='detail-title'>{item.title}</span>
          <span className='detail-price'>
            {`${formatCurrency(item.price.currency)} ${addThousandsPoint(item.price.amount)}`}
            <sup>{formatDecimal(item.price.decimal)}</sup>
          </span>

          <MeliButton>Comprar</MeliButton>
        </div>
      </div>

      <div className='description-container'>
        <span className='description-title'>Descripción del producto</span>
        <div className='description-text'>
          {item.description}
        </div>
      </div>
    </>
  );
}
 
export default ItemDetails;
