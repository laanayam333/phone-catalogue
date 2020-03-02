import axios from 'axios';

import {
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE
} from './phoneTypes';

//Action Creators
export const fetchPhonesRequest = () => {
  return {
    type: FETCH_PHONES_REQUEST
  };
};

export const fetchPhonesSuccess = phones => {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload: phones
  };
};

export const fetchPhonesFailure = error => {
  return {
    type: FETCH_PHONES_FAILURE,
    payload: error
  };
};

export const fetchPhones = () => {
  return dispatch => {
    dispatch(fetchPhonesRequest());
    axios
      .get('http://localhost:5000/phones')
      .then(response => {
        const phones = response.data;
        dispatch(fetchPhonesSuccess(phones));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPhonesFailure(errorMessage));
      });
  };
};
