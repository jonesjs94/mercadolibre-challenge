import {
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};