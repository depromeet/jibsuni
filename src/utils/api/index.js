import axios from './axios';

export function getWeatherAPI() {
  return axios.post('/api/weathers').then(r => r.json())
}

export async function getAuthAPI(tokenStr) {
  const { data } = await axios.get('/api/members/me', {
    headers: {
      "Authorization": `Bearer ${tokenStr}`
    }
  });
  return data;
}

export async function postLoginAPI(accessToken) {
  const { data } = await axios.post('/api/members/login', { accessToken });
  return data.data;
}

export function postLogoutAPI() {
  return axios.post('/api/members/logout').then(r => r.json())
}
