import { html, render } from "../node_modules/lit-html/lit-html.js";
import { login as logUser } from '../app/api.js'

const body = document.querySelector('body');

export async function loginPage(ctx) {
    const container = createElement();
    render(container, body);
    const form = document.querySelector('form');
    form.addEventListener('submit', login);

}

async function login(ev) {
    ev.preventDefault();

    const loginForm = new FormData(ev.target);

    const email = loginForm.get('email');
    const password = loginForm.get('password');

    if (!email || !password) {
        return alert('All fields must be filled!');
    }

    const user = {
        email,
        password
    }

    let data;

    try {
        data = await logUser(user);
    } catch (er) {
        return alert(er)
    }

    sessionStorage.setItem('authToken', data.accessToken);

    ev.target.reset();
}

function createElement() {
    const element = () => html`
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
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
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</div>
    `;

    return element();
}