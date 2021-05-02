import React from 'react';
import './content-container.styles.scss';

const ContentContainer = props => {
  return (
    <section className='content-container'>
      {props.children}
    </section>
  );
}
 
export default ContentContainer;
