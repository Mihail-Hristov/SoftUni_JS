import { html, render } from "../node_modules/lit-html/lit-html.js";

import { register as registerUser } from '../app/api.js'

const body = document.querySelector('body');

export async function registerPage(ctx) {
    const container = createElement();
    render(container, body);
    const form = document.querySelector('form');
    form.addEventListener('submit', register);
}

async function register(ev) {
    ev.preventDefault();

    const loginForm = new FormData(ev.target);

    const email = loginForm.get('email');
    const password = loginForm.get('password');
    const rePass = loginForm.get('rePass');

    if (!email || !password || !rePass) {
        return alert('All fields must be filled!');
    }

    if(password !== rePass) {
        return alert('The password didn\'t match');
    }

    const user = {
        email,
        password
    }

    let data;

    try {
        data = await registerUser(user);
    } catch (er) {
        return alert(er)
    }

    sessionStorage.setItem('authToken', data.accessToken);
    console.log(data);

    ev.target.reset();
}

function createElement() {
    const element = () => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
    `;

    return element();
}