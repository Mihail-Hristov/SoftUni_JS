import { html } from '../node_modules/lit-html/lit-html.js';
import { login } from '../src/data.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
    ctx.setUserNav('login');

    async function onSubmit(ev) {
        ev.preventDefault()

        const registerForm = new FormData(ev.target);

        const username = registerForm.get('username');
        const password = registerForm.get('password');

        if(!username || !password) {
            return alert('All fields must be filled!');
        }

        await login(username, password);


        ctx.page.redirect('/catalog');
    }
}