import { combineReducers } from 'redux';
import {weatherReducer} from './WeatherReducer';
import {authReducer} from './AuthReducer';

export default combineReducers({
  weatherReducer,
  auth: authReducer
});
