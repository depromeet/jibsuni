import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'

import {reqGetWeather} from '../../store/actions/WeatherActions'
import {getWeatherAPI} from "../../utils/api";

const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWeatherAPI()
      .then(response => dispatch(reqGetWeather(response)))
      .catch(error => Error(error));
  }, [dispatch]);

  return (
    <div>
        <h1>Weather</h1>
    </div>
  );
};

export default Weather;