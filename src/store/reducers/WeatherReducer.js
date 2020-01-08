import {WeatherActionType} from '../actions/WeatherActions'

const initialState = {
  weather: '',
  text: ''
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WeatherActionType.REQ_GET_WEATHER:
      return {
        ...state,
        weather: action.payload.weather,
        text: action.payload.text,
      };
    default:
      return state;
  }
};