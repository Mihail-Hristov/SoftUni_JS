import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import{ logout } from '../src/data.js'

import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { registerPage } from '../views/register.js';
import { catalogPage } from '../views/catalog.js'

page('/', setupRender, homePage);
page('/login', setupRender, loginPage);
page('/register', setupRender, registerPage);
page('/catalog', setupRender, catalogPage);


const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', logoutUser);

setUserNav('home')
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
        'catalog': document.getElementById('catalog'),
        'login': document.getElementById('loginLink'),
        'register': document.getElementById('registerLink'),
        'byYear': document.getElementById('byYearLink'),
        'myLists':document.getElementById('myListsLink')
    }

    if (token) {
        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#profile').firstElementChild.textContent = `Welcome, ${sessionStorage.getItem('username')}`; 

    }else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
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

async function logoutUser() {
    await logout();
    page.redirect('/');
}