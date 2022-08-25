import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../utils/Devtools';
import rootReducer from '../reducers';

export const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

export const store = createStoreWithMiddleware(rootReducer, DevTools.instrument());