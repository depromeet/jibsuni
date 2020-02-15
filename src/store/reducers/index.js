import { combineReducers } from 'redux';
import {weatherReducer} from './WeatherReducer';
import {authReducer} from './AuthReducer';
import {roomReducer} from './RoomReducer';

export default combineReducers({
  weatherReducer,
  auth: authReducer,
  room: roomReducer
});
