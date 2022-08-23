import {
  LOAD_LEVEL_SUCCESS,
  LOAD_LEVEL_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: {},
  error: null
}

export default function level(state = initialState, action) {
  switch(action.type) {
    case LOAD_LEVEL_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_LEVEL_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};