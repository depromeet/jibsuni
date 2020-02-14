import axios from './axios';

export function getWeatherAPI() {
  return axios.get('/api/weathers').then(r => r.json())
}

export async function getAuthAPI(tokenStr) {
  const { data } = await axios.get('/api/members/me', {
    headers: {
      "Authorization": `Bearer ${tokenStr}`
    }
  });
  return data.data.member;
}

export async function postLoginAPI(accessToken) {
  const { data } = await axios.post('/api/members/login', { accessToken });
  return data.data;
}

export async function putProfileAPI(accessToken, nickname) {
  const { data } = await axios.put('/api/members/me', { "name": nickname }, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  });
  return data.data;
}

export function postLogoutAPI() {
  return axios.post('/api/members/logout').then(r => r.json())
}

export async function getRoomsAPI(accessToken) {
  const { data } = await axios.get('/api/rooms', {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  });
  console.log(data);
  return data;
}
