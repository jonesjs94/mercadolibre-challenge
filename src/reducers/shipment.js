import {
  LOAD_SHIPMENT_SUCCESS,
  LOAD_SHIPMENT_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: {},
  error: null
}

export default function shipment(state = initialState, action) {
  switch(action.type) {
    case LOAD_SHIPMENT_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_SHIPMENT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};