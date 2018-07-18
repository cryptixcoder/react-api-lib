const endpoint = 'BASE_URL';

const headers = () => {
	const header = new Headers();

	header.append('Content-Type', 'application/json');

	const session = {
		token: localStorage.getItem('token')
	};

	if (session.token) {
		header.append('Authorization', `Bearer ${session.token}`);
	}

	return header;
};

const request = async (method, path, body) => {
	const url = `${endpoint}${path}`;
	const options = { method, headers: headers() };

	if (body) {
		options.body = JSON.stringify(body);
	}

	return await fetch(new Request(url, options));
};

const API = {
	get(path) {
		return request('GET', path);
	},
	put(data = {}) {
		return request('PUT', path, data);
	},
	post(path, data = {}) {
		return request('POST', path, data);
	},
	delete(path) {
		return request('DELETE', path);
	}
};

export default API;
