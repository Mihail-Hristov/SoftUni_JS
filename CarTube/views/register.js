import { html } from '../node_modules/lit-html/lit-html.js'
import { register } from '../src/data.js'

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));
    ctx.setUserNav('register');

    async function onSubmit(ev) {
        ev.preventDefault()

        const registerForm = new FormData(ev.target);

        const username = registerForm.get('username');
        const password = registerForm.get('password');
        const rePass = registerForm.get('repeatPass');

        if(!username || !password || !rePass) {
            return alert('All fields must be filled!');
        }

        if(password != rePass) {
            return alert('The passwords don\'t match');
        }

        await register(username, password);


        ctx.page.redirect('/catalog');
    }
}