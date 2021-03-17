
const endpoints = {
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
    logout: 'http://localhost:3030/user/logout',
};

export async function login(user) {

    const response = await fetch(endpoints.login, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })

    const data = await response.json();

    if (!response.ok) {
        throw data.message;
    }

    return data;
}

export async function register(user) {

    const response = await fetch(endpoints.register, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })

    const data = await response.json();

    if (!response.ok) {
        throw data.message;
    }

    return data;
}