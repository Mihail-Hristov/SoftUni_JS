import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from '../app/data.js';

const loginTamplate = (onSubmit, invalidEmail, invalidPassword) => html`
    <div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (invalidEmail ? ' is-invalid' : '')} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (invalidPassword ? ' is-invalid' : '')} id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</div>
    `;

export async function loginPage(ctx) {
    ctx.render(loginTamplate(onSubmit, false, false))
    ctx.setUserNav('login');

    async function onSubmit(ev) {
        ev.preventDefault();
        const loginForm = new FormData(ev.target);

        const email = loginForm.get('email').trim();
        const password = loginForm.get('password').trim();

        if (!email || !password) {
            ctx.render(loginTamplate(onSubmit, email == '', password == ''));
            return alert('All fields must be filled!');
        }

        try {
            await login(email, password);
        } catch {
            return;
        }

        ctx.setUserNav('dashboard');
        ctx.page.redirect('/');
    }
}

