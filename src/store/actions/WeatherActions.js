export const WeatherState = {
  sunny: {boldText: '오늘은 화창한 날씨예요!', text: '미뤄둔 이불빨래 하는 것은 어떠세요?'},
  rainy: {boldText: '오늘은 비가 와요 :(', text: '우산 챙기는거 잊지 마세요!'},
  snow: {boldText: '오늘은 눈이 와요~', text: '따뜻한 이불 속이 최고죠 ><'},
  default: {boldText: '날씨 정보가 없습니다.', text: '위치 정보 동의를 해주세요.'},
};

export const WeatherActionType = {
  REQ_GET_WEATHER: 'weather/REQ_GET_WEATHER',
};

export function reqGetWeather(response) {
  const {data} = response;
  const { precipitationType } = data;

  switch (precipitationType) {
    case 'NONE': {
      return {
        type: WeatherActionType.REQ_GET_WEATHER,
        payload: WeatherState.sunny
      }
    }
    case 'RAIN' : {
      return {
        type: WeatherActionType.REQ_GET_WEATHER,
        payload: WeatherState.rainy
      }
    }
    case 'SNOW' : {
      return {
        type: WeatherActionType.REQ_GET_WEATHER,
        payload: WeatherState.snow
      }
    }
    default : {
      return {
        type: WeatherActionType.REQ_GET_WEATHER,
        payload: WeatherState.default
      }
    }
  }
}
