import { showHome } from "./home.js";

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    document.querySelector('#form-login form').addEventListener('submit', log);
    main = mainTarget;
    section = sectionTarget;
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}

async function log(ev) {
    ev.preventDefault();

    const regForm = new FormData(ev.target);

    let email = regForm.get('email');
    let password = regForm.get('password');

    let obj = {
        email,
        password
    }

    let url = 'http://localhost:3030/users/login';
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    let data = await response.json();
    if (!response.ok) {
        return alert(data.message);
    }
    
    document.querySelector('#form-login input[name="email"]').value = '';
    document.querySelector('#form-login input[name="password"]').value = '';

    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('id', data._id);

    [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
    [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    document.getElementById('welcome-msg').textContent = `Welcome, ${data.email}`;

    showHome();
}