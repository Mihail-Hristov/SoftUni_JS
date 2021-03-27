export const settings = {
    host: ''
}

async function reguest(url, option) {
    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch {
            return response;
        }

    } catch(err) {
        alert(err.message);
        throw err;
    }
}

function getOption(method = 'get', body) {
    const option = {
        method,
        headers: {}
    };

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

export async function login(email, password) {
    const result = await post(settings.host + '/users/login', {email, password})

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userEmail', result.email);
    sessionStorage.setItem('userId', result._id);
    
    return result;
}

export async function register(email, password) {
    const result = await post(settings.host + '/users/register', {email, password});

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userEmail', result.email);
    sessionStorage.setItem('userId', result._id);

    return result
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userId');

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