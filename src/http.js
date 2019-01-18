import axios from 'axios';
// import store from '@/store';
// import router from '@/router';
// axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 15000;


// axios.interceptors.request.use(
//   (config) => {
//     if (store.state.session) {
//       config.headers.Authorization = `Bearer ${store.state.session.token}`;
//     }
//     return config;
//   },
//   err => Promise.reject(err),
// );

// axios.interceptors.response.use(
//   response => response,
//   (error) => {
//     console.error(error.response.data);
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           store.dispatch('logout');
//           router.push({
//             name: 'home',
//           });
//           break;
//         default:
//       }
//     }
//     return Promise.reject(error.response.data);
//   },
// );

export default axios;
