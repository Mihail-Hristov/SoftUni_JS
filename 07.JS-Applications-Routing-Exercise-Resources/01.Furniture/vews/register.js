import { html } from '../node_modules/lit-html/lit-html.js';
import { register } from '../app/data.js';

const registerTamplate = (onSubmit, invalidEmail, invalidPassword, invalidReppasword) => html`
     <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${'form-control' + (invalidReppasword ? ' is-invalid' : '')} id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    `;

export function registerPage(ctx) {
    ctx.render(registerTamplate(onSubmit));
    ctx.setUserNav('register');

    async function onSubmit(ev) {
        ev.preventDefault();
        const loginForm = new FormData(ev.target);

        const email = loginForm.get('email');
        const password = loginForm.get('password');
        const rePass = loginForm.get('rePass');

        if (!email || !password || !rePass) {
            ctx.render(registerTamplate(onSubmit, email == '', password == '', rePass == ''));
            return alert('All fields must be filled!');
        }

        if (password !== rePass) {
            ctx.render(registerTamplate(onSubmit, false, true, true));
            return alert('The password didn\'t match');
        }

        try {
            await register(email, password);
        } catch {
            return;
        }

        ctx.setUserNav('dashboard');
        ctx.page.redirect('/');
    }
}