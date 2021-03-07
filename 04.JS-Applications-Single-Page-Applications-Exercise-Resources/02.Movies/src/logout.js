import { showLogin } from "./login.js";

export async function logout() {
    let token = sessionStorage.getItem('authToken');
    let url = 'http://localhost:3030/users/logout'
    let response = await fetch(url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}`},
    })

    if (!response.ok) {
        return alert(response.message);
    }
    
    sessionStorage.clear();
    if (sessionStorage.getItem('email')) {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
        document.getElementById('welcome-msg').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
    } else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
    }
    showLogin();
}