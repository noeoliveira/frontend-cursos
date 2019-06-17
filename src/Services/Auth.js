export const USER_KEY = 'userCurso';
export const isAuthenticated = () => localStorage.getItem(USER_KEY) !== null;
export const getToken = () => {
	const token = localStorage.getItem(USER_KEY);
	if (token) {
		return JSON.parse(token).token;
	}
	return token;
};
export const getUser = () => {
	const user = localStorage.getItem(USER_KEY);
	if (user) {
		return JSON.parse(user).user;
	}
	return user;
};
export const login = user => {
	localStorage.setItem(USER_KEY, JSON.stringify(user));
};
export const logout = () => {
	localStorage.removeItem(USER_KEY);
};
