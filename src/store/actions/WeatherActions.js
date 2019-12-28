// TODO-groovypark: 날씨 상태에 따른 텍스트값 설정
export const WeatherState = {
  sunny: {weather: 'sunny', text: '날씨가 좋네요'},
  rainy: {weather: 'rainy', text: '비가와요 우산 챙기세요'},
  snow: {weather: 'snow', text: '눈이 옵니다!!'},
};

export const WeatherActionType = {
  REQ_GET_WEATHER: 'weather/REQ_GET_WEATHER',
};

export function reqGetWeather(response) {
  let payload = {};
  // TODO-groovypark: 서버에서 내려주는 날씨 정보에 따른 처리
  if (response === 'sunny') {
      payload = { weather: WeatherState.sunny.weather, text: WeatherState.sunny.text}
  }
  else if (response === 'rainy') {
    payload = { weather: WeatherState.rainy.weather, text: WeatherState.rainy.text}
  }
  else if (response === 'snow') {
    payload = { weather: WeatherState.snow.weather, text: WeatherState.snow.text}
  }
  return {
    type: WeatherActionType.REQ_GET_WEATHER,
    payload,
  };
}
