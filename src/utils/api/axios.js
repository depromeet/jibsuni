import axios from 'axios';

const HOST = 'http://jibsuni.depromeet.com/';

export default axios.create({
  baseURL: `${HOST}`,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: "json",
});
