import * as api from '../app/data.js'
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './data.js'

import page from '../node_modules/page/page.mjs';

import { loginPage } from '../vews/login.js';
import { registerPage } from '../vews/register.js';
import { createPage } from '../vews/create.js';
import { dashboardPage } from '../vews/dashboard.js';
import { detailsPage } from '../vews/details.js';
import { editPage } from '../vews/edit.js';
import { myFurniturePage } from '../vews/myFurnituer.js';

page('/', setupRender, dashboardPage);
page('/login', setupRender, loginPage);
page('/register', setupRender, registerPage);
page('/create/', setupRender, createPage);
page('/dashboard', setupRender, dashboardPage);
page('/details/:id', setupRender, detailsPage);
page('/edit/:id', setupRender, editPage);
page('/my-Furniture', setupRender, myFurniturePage);

const main = document.querySelector('.container');

setUserNav('dashboard');
page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav('dashboard');
    page.redirect('/');
})

window.api = api;

function setupRender(ctx, next) {
    ctx.render = (context) => render(context, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav(activate) {
    const userId = sessionStorage.getItem('userId');
    const btns = {
        'dashboard': document.getElementById('catalogLink'),
        'create': document.getElementById('createLink'),
        'my': document.getElementById('profileLink'),
        'login': document.getElementById('loginLink'),
        'register': document.getElementById('registerLink')
    }

    if (userId) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        document.querySelector('.profile').firstElementChild.textContent = `Welcome, ${sessionStorage.getItem('userEmail')}`; 
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
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