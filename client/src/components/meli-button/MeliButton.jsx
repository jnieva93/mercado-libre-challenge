import React from 'react';
import './meli-button.styles.scss';

const MeliButton = ({ children, ...restProps }) => (
  <button {...restProps} className='buy-button'>{children}</button>
);
 
export default MeliButton;
