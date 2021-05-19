import React, { useReducer } from 'react';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';
import { SET_QUERY } from '../../types/actionTypes';

const QueryProvider = props => {
  const initialState = {
    query: ''
  };

  const [state, dispatch] = useReducer(queryReducer, initialState);

  const setQuery = query => dispatch({ type: SET_QUERY, payload: query });

  return (
    <QueryContext.Provider
      value={{
        query: state.query,
        setQuery
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
}
 
export default QueryProvider;
