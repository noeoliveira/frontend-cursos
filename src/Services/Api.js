import axios from 'axios';
import { getToken } from './Auth';

const options = { baseURL: 'https://api-file-auth.herokuapp.com/' };

const Api = axios.create(options);

Api.interceptors.request.use(async config => {
	const token = getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default Api;
