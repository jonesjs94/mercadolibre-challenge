import axios from 'axios';
import {
  SHOW_LOADER,
  HIDE_LOADER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_LEVEL_SUCCESS,
  LOAD_LEVEL_ERROR,
  LOAD_RESTRICTIONS_SUCCESS,
  LOAD_RESTRICTIONS_ERROR,
  LOAD_PURCHASES_SUCCESS,
  LOAD_PURCHASES_ERROR,
  LOAD_SHIPMENT_SUCCESS,
  LOAD_SHIPMENT_ERROR,
  LOAD_PAYMENT_SUCCESS,
  LOAD_PAYMENT_ERROR
} from './actionTypes';


/**
 *  Fetch data to the api
 * @param {string} route
 * @param {string} urlParam
 * @param {string} actionType
 */
export const loadData = (route, urlParam, actionType) => {
  return dispatch => {
    axios.get(`http://localhost:3000/${route}?${urlParam}`)
    .then(response => {
      switch(actionType) {
        case 'USER':
          dispatch({ type: LOAD_USER_SUCCESS, payload: response.data });
          break;
        case 'LEVEL':
          dispatch({ type: LOAD_LEVEL_SUCCESS, payload: response.data });
          break;
        case 'RESTRICTIONS':
          dispatch({ type: LOAD_RESTRICTIONS_SUCCESS, payload: response.data });
          break;
        case 'PURCHASES':
          dispatch({ type: LOAD_PURCHASES_SUCCESS, payload: response.data });
          break;
        case 'SHIPMENT':
          dispatch({ type: LOAD_SHIPMENT_SUCCESS, payload: response.data });
          break;
        case 'PAYMENT':
          dispatch({ type: LOAD_PAYMENT_SUCCESS, payload: response.data });
          break;
      }
    })
    .catch(error => {
      switch(actionType) {
        case 'USER':
          dispatch({ type: LOAD_USER_ERROR, payload: error.response.data });
          break;
        case 'LEVEL':
          dispatch({ type: LOAD_LEVEL_ERROR, payload: error.response.data });
          break;
        case 'RESTRICTIONS':
          dispatch({ type: LOAD_RESTRICTIONS_ERROR, payload: error.response.data });
          break;
        case 'PURCHASES':
          dispatch({ type: LOAD_PURCHASES_ERROR, payload: error.response.data });
          break;
        case 'SHIPMENT':
          dispatch({ type: LOAD_SHIPMENT_ERROR, payload: error.response.data });
          break;
        case 'PAYMENT':
          dispatch({ type: LOAD_PAYMENT_ERROR, payload: error.response.data });
          break;
      }
    });
  };
};

export const showLoader = () => ({type: SHOW_LOADER});
export const hideLoader = () => ({type: HIDE_LOADER});