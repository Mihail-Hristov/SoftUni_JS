import { showHome } from "./home.js";

let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    document.querySelector('#form-sign-up form').addEventListener('submit', reg);
    main = mainTarget;
    section = sectionTarget;
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}

async function reg(ev) {
    ev.preventDefault();

    const regForm = new FormData(ev.target);

    let email = regForm.get('email');
    let password = regForm.get('password');
    let repeatPassword = regForm.get('repeatPassword');

    if (!email || password.length < 6 || password !== repeatPassword) {
        return alert('The password is a less 6 character long or didn\'t match!');
    }

    let obj = {
        email,
        password,
    }

    let url = 'http://localhost:3030/users/register';
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });

    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    document.querySelector('#form-sign-up input[name="email"]').value = '';
    document.querySelector('#form-sign-up input[name="password"]').value = '';
    document.querySelector('#form-sign-up input[name="repeatPassword"]').value = '';

    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('id', data._id);

    [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
    [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    document.getElementById('welcome-msg').textContent = `Welcome, ${data.email}`;

    showHome();
}