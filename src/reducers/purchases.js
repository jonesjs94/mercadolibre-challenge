import {
  LOAD_PURCHASES_SUCCESS,
  LOAD_PURCHASES_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null
}

export default function purchases(state = initialState, action) {
  switch(action.type) {
    case LOAD_PURCHASES_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_PURCHASES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};