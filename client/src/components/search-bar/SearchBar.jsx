import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import meLiLogo from '../../assets/Logo_ML@2x.png.png.png';
import searchIcon from '../../assets/ic_Search.png';
import { formatQuery } from '../../utils/formattingFunctions';
import './search-bar.styles.scss';

const SearchBar = () => {
  const history = useHistory();

  const [searchText, setSearchText] = useState('');

  const handleChangeText = event => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') handleSearch();
  };

  const goToHomePage = () => history.push('/');

  const handleSearch = () => {
    if (!searchText.trim()) return;

    history.push(`/items?search=${formatQuery(searchText.trim())}`);
  };

  return (
    <div className='search-bar-container'>
      <div className='input-container'>
        <img src={meLiLogo} alt="MeLi Logo" onClick={goToHomePage} className='meli-logo' />
        <input
          type='text'
          value={searchText}
          onChange={handleChangeText}
          onKeyPress={handleKeyPress}
          className='text-input'
          placeholder='Nunca dejes de buscar'
        />
        <button onClick={handleSearch} className='search-button'>
          <img src={searchIcon} alt="Buscar" />
        </button>
      </div>
    </div>
  );
}
 
export default SearchBar;
