import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {reqGetWeather} from '../../store/actions/WeatherActions'
import {getWeatherAPI} from "../../utils/api";
import * as styled from "./style";

const Weather = () => {
  const weatherText = useSelector(state => state.weatherReducer.weatherText);
  const dispatch = useDispatch();


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords } = position;
      const { latitude, longitude } = coords;
      getWeatherAPI(latitude, longitude)
        .then(response => dispatch(reqGetWeather(response)))
        .catch(error => Error(error));
    });

  }, [dispatch]);

  return (
    <styled.Wrapper>
      {/* TODO: 일러스트 이미지로 바뀔 예정 */}
      <b>{weatherText.boldText}</b><br/>
      {weatherText.text}
    </styled.Wrapper>
  );
};

export default Weather;
