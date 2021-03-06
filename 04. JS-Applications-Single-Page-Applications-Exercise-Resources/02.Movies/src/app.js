const navBar = document.querySelector('nav');
const homePage = document.getElementById('home-page');
const movies = document.getElementById('movie');
const addMovie = document.getElementById('add-movie');
const movieExample = document.getElementById('movie-example');
const editMovie = document.getElementById('edit-movie');
const loginForm = document.getElementById('form-login');
const signUp = document.getElementById('form-sign-up');
const footer = document.getElementsByTagName('footer')[0];


document.getElementById('container').innerHTML = '';
document.getElementById('container').appendChild(navBar);
document.getElementById('container').appendChild(homePage);
document.getElementById('container').appendChild(movies);


function register() {
    document.querySelector('#form-sign-up form').addEventListener('submit', reg);

    async function reg(ev) {
        ev.preventDefault();

        const regForm = new FormData(document.querySelector('#form-sign-up form'));

        let email = regForm.get('email');
        let password = regForm.get('password');
        let repeatPassword = regForm.get('repeatPassword');

        if (!email || password < 6 || password !== repeatPassword) {
            return alert('The password is a less 6 character long or didn\'t match');
        }

        let body = {
            email,
            password,
        }

        let url = 'http://localhost:3030/data/movies';
        let response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body,
        })
    }
}

function login() {
    document.querySelector('#form-login form').addEventListener('submit', log);

    async function log(ev) {
        ev.preventDefault();

        const regForm = new FormData(document.querySelector('#form-login form'));

        let email = regForm.get('email');
        let password = regForm.get('password');

        let url = '';
        let response = await fet(url, {
    
        })
    }
}



login();
