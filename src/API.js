//API 인스턴스 작성

import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;
const API = axios.create({
  baseURL: serverUrl,
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('userToken')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('UserToken')}`;
  }
  return req;
});

export default API;
