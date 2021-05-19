import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import QueryContext from '../../context/query/queryContext';
import MeliButton from '../meli-button/MeliButton';
import './error-message.styles.scss';

const ErrorMessage = ({ error }) => {
  const queriesContext = useContext(QueryContext);
  const history = useHistory();

  const { setQuery } = queriesContext;

  const obtainErrorMessage = () => {
    if (error.status === 404) {
      return 'Página no encontrada';
    } else if (error.status === 500) {
      return 'Error interno del Servidor';
    } else {
      return error.data.error ? error.data.error.message : error.statusText;
    }
  };

  const goToHomePage = () => {
    history.push('/');
    setQuery('');
  };

  return (
    <div className='error-container'>
      <span className='error-title'>{`Error ${error.status}`}</span>
      <span className='error-message'>{obtainErrorMessage()}</span>

      <div className='error-button-container'>
        <MeliButton onClick={goToHomePage}>Volver al inicio</MeliButton>
      </div>
    </div>
  );
}
 
export default ErrorMessage;
