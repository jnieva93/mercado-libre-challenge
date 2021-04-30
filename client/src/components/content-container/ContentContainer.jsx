import React from 'react';
import './content-container.styles.scss';

const ContentContainer = props => {
  return (
    <div className='content-container'>
      {props.children}
    </div>
  );
}
 
export default ContentContainer;
