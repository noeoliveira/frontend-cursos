import axios from 'axios';
import { getToken } from './Auth';

const options = { baseURL: 'https://api-file-auth.herokuapp.com/' };

const Api = axios.create(options);

Api.interceptors.request.use(async config => {
	if (getToken) {
		config.headers.Authorization = `Bearer ${getToken}`;
	}
	return config;
});

export default Api;
