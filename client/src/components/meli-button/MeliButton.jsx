import React from 'react';
import './meli-button.styles.scss';

const MeliButton = props => {
  return (
    <button className='buy-button'>{props.children}</button>
  );
}
 
export default MeliButton;
