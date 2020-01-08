import axios from './axios';

// TODO-groovypark: Memo
// POST /api/members/login
// POST /api/members/logout
// GET /api/members/me
// GET /api/weathers

export function getWeatherAPI() {
  return axios.post('/api/weathers').then(r => r.json())
  // TODO-groovypark: test api
}

export function getAuthAPI() {
  return axios.post('/api/members/login').then(r => r.json())
  // TODO-groovypark: test api
}