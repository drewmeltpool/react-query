import axios from 'axios';
import { host, token } from 'src/constants';

axios.defaults.headers.common.Authorization = token;
axios.defaults.baseURL = host;

axios.interceptors.response.use((res) => res.data);

export { axios };
