import {
  SHOW_LOADER,
  HIDE_LOADER
} from '../actions/actionTypes';

const initialState = {
  loading: false
}

export default function loader(state = initialState, action) {
  switch(action.type) {
    case SHOW_LOADER:
      return {
        loading: true
      }
    case HIDE_LOADER:
      return {
        loading: false
      }
    default:
      return state
  };
};