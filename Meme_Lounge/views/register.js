import { html } from '../node_modules/lit-html/lit-html.js';
import { register } from '../src/data.js';

const registerTemplate = (onSubmit) => html `
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));
    ctx.setUserNav('register')

    async function onSubmit(ev) {
        ev.preventDefault();

        const registerForm = new FormData(ev.target);

        const username = registerForm.get('username');
        const email = registerForm.get('email');
        const password = registerForm.get('password');
        const rePass = registerForm.get('repeatPass');
        const gender = registerForm.get('gender');

        if (!username || !email || !password) {
            return alert('All fields must be filled!');
        }

        if (password != rePass) {
            return alert('The passwords did not match');
        }

        try{
            await register(username, email, password, gender);
        }catch{
            return;
        }

        ctx.setUserNav('allMemes');
        document.querySelector('.profile').firstElementChild.textContent = `Welcome, ${email}`; 
        ctx.page.redirect('/allMemes');
    }
}