import axios from 'axios';

const host = 'http://jibsuni.depromeet.com/';

export default axios.create({
  baseURL: `${host}`,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: "json",
  withCredentials: true
});