import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = '/api')
  : (baseURL = 'http://localhost:3000/api/auth');

const service = axios.create({ withCredentials: true, baseURL });

const authService = {
  login: async (user) => {
    return await service.post('/login', user);
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  edit: async (id, user) => {
    return await service.post(`/edit/${id}`, user);
  },
  uploadImg: async (id, img) => {
    return await service.post(`/upload-photo/${id}`, img);
  },
  logOut: async () => {
    return await service.get('/logout');
  },
  loggedIn: async () => {
    return await service.get('/loggedin');
  }
};

export default authService;
