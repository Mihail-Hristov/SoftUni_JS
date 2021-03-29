export const settings = {
    host: ''
}


async function reguest(url, option) {
    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch {
            return response;
        }
    } catch (err) {
        alert(err.message);
        //throw new Error(err.message);
    }
}

function getOption(method = 'get', body) {
    const option = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem('authToken');

    if (token) {
        option.headers['X-Authorization'] = token;
    }

    if (body) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(body);
    }

    return option;
}

export async function login(username, password) {
    const obj = {
        username,
        password
    }

    const result = await post(settings.host + '/users/login', obj);

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('username', result.username);

    return result;
}

export async function register(username, password) {
    const obj = {
        username,
        password,
    }

    const result = await post(settings.host + '/users/register', obj);

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('username', result.username);

    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');

    return result;
}

export async function get(url) {
    return await reguest(url, getOption());
}

export async function post(url, data) {
    return await reguest(url, getOption('post', data));
}

export async function put(url, data) {
    return await reguest(url, getOption('put', data));
}

export async function del(url) {
    return await reguest(url, getOption('delete'));
}