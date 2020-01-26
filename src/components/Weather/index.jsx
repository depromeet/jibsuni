import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'

import {reqGetWeather} from '../../store/actions/WeatherActions'
import {getWeatherAPI} from "../../utils/api";
import * as styled from "./style";

const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWeatherAPI()
      .then(response => dispatch(reqGetWeather(response)))
      .catch(error => Error(error));
  }, [dispatch]);

  return (
    <styled.Wrapper>
      {/* TODO: 일러스트 이미지로 바뀔 예정 */}
      <b>오늘은 화창한 날씨예요!</b><br/>
      미뤄둔 이불빨래 하는 것은 어떠세요?
    </styled.Wrapper>
  );
};

export default Weather;