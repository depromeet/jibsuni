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


export async function getRoomsAPI(token) {
  const { data } = await axios.get('/api/rooms', {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  console.log(data);
  return data;
}

export async function getTasksAPI(token) {
    const { data } = await axios.get(`/api/tasks`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    console.log(data);
    return data;
  }

export async function getRoomTasksAPI(token, roomId) {
  const { data } = await axios.get(`/api/rooms/${roomId}/tasks`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  });
  console.log(data);
  return data;
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
