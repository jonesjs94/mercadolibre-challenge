import { combineReducers } from 'redux';
import user from './user';
import level from './level';
import restrictions from './restrictions';
import purchases from './purchases';
import shipment from './shipment';
import payment from './payment';
import loader from './loader';

export default combineReducers({
  user,
  level,
  restrictions,
  purchases,
  shipment,
  payment,
  loader
});