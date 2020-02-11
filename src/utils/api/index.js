import axios from './axios';
import {AUTH_TOKEN_STORAGE_KEY} from "../../constants";

const kakaoAPI = 'https://kapi.kakao.com/v1/';

export async function getWeatherAPI(latitude, longitude) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  const { data } = await axios.get('/api/weathers', {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    params: {
      latitude,
      longitude,
    }
  });
  return data;
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

export async function getFurnitures(roomId, page, size) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  const { data } = await axios.get(`/api/me/rooms/${roomId}/furnitures`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    params: {
      page,
      size
    }
  });
  return data
}

export async function createFurnitures(roomId, furnitureType) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  const { data } = await axios.get(`/api/me/rooms/${roomId}/furnitures`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    data: {
      createFurnitureRequest: {
        "furnitureType": furnitureType
      }
    }
  });
  return data
}

export async function getFurniture(roomId, furnitureId) {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
  const { data } = await axios.get(`/api/rooms/${roomId}/furnitures/${furnitureId}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  return data
}
