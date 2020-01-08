import { combineReducers } from 'redux' ;

import {weatherReducer} from './reducers/WeatherReducer'
import {authReducer} from './reducers/AuthReducer'
export default combineReducers({
  weatherReducer,
  authReducer
});