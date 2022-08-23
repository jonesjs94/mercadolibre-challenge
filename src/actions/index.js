import axios from 'axios';
import {
  LOAD_DATA_PENDING,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
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
 * @param {string} param
 * @param {string} actionType
 */
export const loadData = (route, param, actionType) => {
  return dispatch => {
    dispatch({ type: LOAD_DATA_PENDING });
    
    axios.get(`http://localhost:3000/${route}?${param}`)
    .then(response => {
      dispatch({ type: LOAD_DATA_SUCCESS });
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
      console.error(error);
      dispatch({ type: LOAD_DATA_ERROR });
      
      switch(actionType) {
        case 'USER':
          dispatch({ type: LOAD_USER_ERROR, payload: response.data });
          break;
        case 'LEVEL':
          dispatch({ type: LOAD_LEVEL_ERROR, payload: response.data });
          break;
        case 'RESTRICTIONS':
          dispatch({ type: LOAD_RESTRICTIONS_ERROR, payload: response.data });
          break;
        case 'PURCHASES':
          dispatch({ type: LOAD_PURCHASES_ERROR, payload: response.data });
          break;
        case 'SHIPMENT':
          dispatch({ type: LOAD_SHIPMENT_ERROR, payload: response.data });
          break;
        case 'PAYMENT':
          dispatch({ type: LOAD_PAYMENT_ERROR, payload: response.data });
          break;
      }
    });
  };
};