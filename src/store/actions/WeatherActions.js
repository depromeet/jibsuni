export const REQ_GET_WEATHER = 'weather/REQ_GET_WEATHER';
export const REQ_GET_WEATHER_SUCCESS = 'weather/REQ_GET_WEATHER_SUCCESS';
export const REQ_GET_WEATHER_ERROR = 'weather/REQ_GET_WEATHER_ERROR';

function reqGetWeather() {
  return {
    type: REQ_GET_WEATHER,
  };
}

function reqGetWeatherSuccess(payload) {
  return {
    type: REQ_GET_WEATHER_SUCCESS,
    payload,
  };
}

function reqGetWeatherError(payload) {
  return {
    type: REQ_GET_WEATHER_ERROR,
    payload,
  };
}

function getWeather(payload) {
  return dispatch => {
    dispatch(reqGetWeather(payload));
    return axios.get(`http://jibsuni.depromeet.com/api/members/me`)
      .then(response => dispatch(reqGetWeatherSuccess(response)))
      .catch(error => dispatch(reqGetWeatherError(error)));
  };
}
