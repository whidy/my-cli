import axios from 'axios';

const $axios = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000
  // headers: { 'X-Custom-Header': 'foobar' },
});

$axios.interceptors.request.use((config) => {
  console.log(config);
},
(error) => Promise.reject(error));

$axios.interceptors.response.use((response) => {
  console.log(response);
},
(error) => Promise.reject(error));

export default $axios;
