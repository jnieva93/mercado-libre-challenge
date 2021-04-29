import React from 'react';
import meLiLogo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import './search-bar.styles.scss';

const SearchBar = () => {
  return (
    <header>
      <nav className='nav-container'>
        <div className='input-container'>
          <img src={meLiLogo} alt="MeLi Logo" className='meli-logo' />
          <input type='text' className='text-input' placeholder='Nunca dejes de buscar' />
          <button className='search-button'><img src={searchIcon} alt="Buscar" /></button>
        </div>
      </nav>
    </header>
  );
}
 
export default SearchBar;
