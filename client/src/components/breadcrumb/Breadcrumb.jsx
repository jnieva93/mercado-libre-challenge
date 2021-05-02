import React from 'react';
import './breadcrumb.styles.scss';

const Breadcrumb = ({ categoriesList = [] }) => (
  <nav>
    <ul className='breadcrumb'>
      {categoriesList.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  </nav>
);
 
export default Breadcrumb;
