import React from 'react';
import { useHistory } from 'react-router-dom';
import MeliButton from '../meli-button/MeliButton';
import './error-message.styles.scss';

const ErrorMessage = ({ error }) => {
  const history = useHistory();

  const obtainErrorMessage = () => {
    if (error.status === 404) {
      return 'Página no encontrada';
    } else if (error.status === 500) {
      return 'Error interno del Servidor';
    } else {
      return error.data.error.message;
    }
  };

  const goToHomePage = () => {
    history.push('/');
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
