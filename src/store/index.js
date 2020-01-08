import { combineReducers } from 'redux' ;

import {weatherReducer} from './reducers/WeatherReducer'
export default combineReducers({
  weatherReducer,
});