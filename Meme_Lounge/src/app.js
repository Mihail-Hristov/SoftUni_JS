import * as api from './data.js';

import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { allMemesPage } from '../views/allMemes.js';
import { detailsPage } from '../views/details.js';
import { createPage } from '../views/create.js';
import { editPage } from '../views/edit.js';
import { profilePage } from '../views/profile.js';

window.api = api;

page('/',setupRender, homePage);
page('/login',setupRender, loginPage);
page('/register',setupRender, registerPage);
page('/allMemes',setupRender, allMemesPage);
page('/create',setupRender, createPage);
page('/details/:id',setupRender, detailsPage);
page('/edit/:id',setupRender, editPage);
page('/profile',setupRender, profilePage);

const main = document.querySelector('main');
document.getElementById('logout').addEventListener('click', logout);

setUserNav('home');
page.start();

function setupRender(ctx, next) {
    ctx.render = (context) => render(context, main);

    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav(activate) {
    const token = sessionStorage.getItem('authToken');
    const btns = {
        'home': document.getElementById('homeLink'),
        'create': document.getElementById('createLink'),
        'allMemes': document.getElementById('allMemesLink'),
        'login': document.getElementById('loginLink'),
        'register': document.getElementById('registerLink'),
        'myProfile': document.getElementById('myProfileLink')
    }

    if (token) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.profile').firstElementChild.textContent = `Welcome, ${sessionStorage.getItem('userEmail')}`; 

    }else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }

    for (const key in btns) {
        if(btns[key].classList == 'active') {
            btns[key].classList.remove('active');
        }
    }

    if (activate) {
        btns[activate].classList = 'active';
    }

}

async function logout() {
    await api.logout();
    document.querySelector('.profile').firstElementChild.textContent = ''; 
    setUserNav('home');
    page.redirect('/');
}

