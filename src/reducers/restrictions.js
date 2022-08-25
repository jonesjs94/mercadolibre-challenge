import {
  LOAD_RESTRICTIONS_SUCCESS,
  LOAD_RESTRICTIONS_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null
}

export default function restrictions(state = initialState, action) {
  switch(action.type) {
    case LOAD_RESTRICTIONS_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_RESTRICTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};