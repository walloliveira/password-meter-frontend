import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
});

function verify({ password }) {
  return http.post('/password', {
    password,
  });
}

export default {
  verify,
};
