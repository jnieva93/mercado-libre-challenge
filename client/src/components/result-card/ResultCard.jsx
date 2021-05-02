import React from 'react';
import { useHistory } from 'react-router-dom';
import shippingIcon from '../../assets/ic_shipping.png';
import { addThousandsPoint, formatCurrency, formatDecimal } from '../../utils/formattingFunctions';
import './result-card.styles.scss';

const ResultCard = ({ item }) => {
  const history = useHistory();

  const handleKeyPress = event => {
    if (event.key === 'Enter') goToDetails();
  };

  const goToDetails = () => history.push(`/items/${item.id}`);

  return (
    <>
      <div className='result-card-container'>
        <div className='result-image-container'>
          <img
            src={item.picture}
            alt={item.title}
            onClick={goToDetails}
            className='result-card-image'
          />
        </div>

        <div className='result-details-container'>
          <span className='result-price'>
            {`${formatCurrency(item.price.currency)} ${addThousandsPoint(item.price.amount)}`}
            <sup>{formatDecimal(item.price.decimals)}</sup>
            {item.free_shipping &&
              <img src={shippingIcon} alt='Free shipping available' className='shipping-icon' />
            }
          </span>
          <span
            onClick={goToDetails}
            onKeyPress={handleKeyPress}
            className='result-title'
            tabIndex={0}
          >
            {item.title}
          </span>
        </div>

        <div className='result-location-container'>
          <span>{item.location}</span>
        </div>
      </div>
      
      <hr className='divider' />
    </>
  );
}
 
export default ResultCard;
