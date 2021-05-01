import React from 'react';
import { addThousandsPoint, formatCondition, formatCurrency, formatDecimal } from '../../utils/formattingFunctions';
import './item-details.styles.scss';

const ItemDetails = ({ item }) => {
  return (
    <div className='item-details-container'>
      <div className='details-image-container'>
        {/* Cambiar className si width > height */}
        <img src={item.picture} alt={item.title} className='item-details-image' />
      </div>

      <div></div>

      <div className='item-overview-container'>
        <span className='product-status'>{`${formatCondition(item.condition)} - ${item.sold_quantity} vendidos`}</span>
        <span className='detail-title'>{item.title}</span>
        <span className='detail-price'>
          {`${formatCurrency(item.price.currency)} ${addThousandsPoint(item.price.amount)}`}
          <sup>{formatDecimal(item.price.decimal)}</sup>
        </span>
      </div>
    </div>
  );
}
 
export default ItemDetails;
