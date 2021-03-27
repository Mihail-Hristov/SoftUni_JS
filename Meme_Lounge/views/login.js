import { html } from '../node_modules/lit-html/lit-html.js';
import { login } from '../src/data.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;



export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
    ctx.setUserNav('login')

    async function onSubmit(ev) {
        ev.preventDefault();
        const loginForm = new FormData(ev.target);

        const email = loginForm.get('email');
        const password = loginForm.get('password');

        if (!email || !password) {
            return alert('All fields must be filled!');
        }

        try {
            await login(email, password);
        } catch {
            return;
        }

        ctx.setUserNav('allMemes');
        document.querySelector('.profile').firstElementChild.textContent = `Welcome, ${email}`; 
        ctx.page.redirect('/allMemes');
    }
}