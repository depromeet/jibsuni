import {WeatherActionType} from '../actions/WeatherActions'

const initialState = {
  weatherText: '',
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WeatherActionType.REQ_GET_WEATHER:
      return {
        ...state,
        weatherText: action.payload,
      };
    default:
      return state;
  }
};
