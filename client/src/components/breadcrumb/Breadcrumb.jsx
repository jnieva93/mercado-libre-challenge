import React from 'react';
import './breadcrumb.styles.scss';

const Breadcrumb = ({ categoriesList = [] }) => {
  return (
    <nav>
      <ul className='breadcrumb'>
        {categoriesList.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </nav>
  );
}
 
export default Breadcrumb;
