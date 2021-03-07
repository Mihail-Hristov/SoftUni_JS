import { setupHome, showHome} from './home.js';
import { setupRegister, showRegister } from './register.js';
import { setupLogin, showLogin } from './login.js';
import { setupCreate, showCreate } from './create.js';
import { setupDetails } from './details.js';
import { setupEdit } from './edit.js';
import { logout } from './logout.js';


const main = document.querySelector('main');

setupSection('home-page', setupHome);
setupSection('form-sign-up', setupRegister);
setupSection('form-login', setupLogin);
setupSection('edit-movie', setupEdit);
setupSection('movie-example', setupDetails);
setupSection('add-movie', setupCreate);

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}

const linksForNav = {
    'homeLink': showHome,
    'logingLink': showLogin,
    'registerLink': showRegister,
    'createBtn': showCreate,
    'logoutBtn': logout,
}

setupNavigation();

//Start program from here!
showHome();

function setupNavigation() {
    document.querySelector('nav').addEventListener('click', (ev) => {
        const view = linksForNav[ev.target.id];
        if (typeof view == 'function') {
            ev.preventDefault();
            view();
        }
    })
}

document.getElementById('add-movie-button').addEventListener('click', (ev) => {
    ev.preventDefault();

    showCreate()
})