import axios from './axios';

export function getWeatherAPI() {
  return axios.get('/api/weathers').then(r => r.json())
}

export function postLoginAPI() {
  return axios.post('/api/members/login').then(r => r.json())
}

export function postLogoutAPI() {
  return axios.post('/api/members/logout').then(r => r.json())
}

export function getAuthAPI(tokenStr) {
  return axios.post('/api/members/me',
    { headers: {"Authorization" : `Bearer ${tokenStr}` }}
  ).then(r => r.json())
}