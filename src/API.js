//API 인스턴스 작성

import axios from 'axios';
const serverUrl = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({
  baseURL: serverUrl,
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('userTokenTest')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(
      'userTokenTest'
    )}`;
  }
  return req;
});

export default API;
