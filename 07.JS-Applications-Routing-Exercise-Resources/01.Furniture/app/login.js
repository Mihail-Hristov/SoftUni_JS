import { login } from './api.js'


const form = document.querySelector('form');
const myForm = new FormData(form);

logUser(myForm);


function logUser(loginForm) {
    const email = loginForm.get('email');
    const password = loginForm.get('password');

    const user = {
        email,
        password
    }

    login(user);
}
