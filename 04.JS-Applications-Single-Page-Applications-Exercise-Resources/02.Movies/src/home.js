import { showCreate } from "./create.js";
import { showDetails } from "./details.js";

async function getMovies() {
    let url = 'http://localhost:3030/data/movies';
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
}

let main;
let section;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
   document.querySelector('.card-deck.d-flex.justify-content-center').addEventListener('click', details);
}

function details(ev) {
    if (ev.target.classList.contains('movie-details-link')) {
        showDetails(ev.target.id);
    }
}

export async function showHome() {
    main.innerHTML = '';
    main.appendChild(section);
    const movies = document.querySelector('.card-deck.d-flex.justify-content-center')

    if (sessionStorage.getItem('email')) {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
        document.getElementById('welcome-msg').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
        document.getElementById('add-movie-button').style.display = 'block';
    } else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
        document.getElementById('add-movie-button').style.display = 'none';
    }

    movies.innerHTML = 'Loading...';
    let url = 'http://localhost:3030/data/movies';
    let response = await fetch(url);
    let data = await response.json();

    const cards = data.map(createMovieCard);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c))

    movies.innerHTML = '';
    movies.appendChild(fragment);
}

function createMovieCard(movie) {
    let element = document.createElement('div');
    element.className = 'card mb-4';

    element.innerHTML =
        `<img class="card-img-top" src=${movie.img}
        alt="Card image cap" width="400">
        <div class="card-body">
         <h4 class="card-title">${movie.title}</h4>
         </div>
          <div class="card-footer">
           <a href="#/details/6lOxMFSMkML09wux6sAF">
         <button id=${movie._id} type="button" class="btn btn-info movie-details-link">Details</button>
         </a>
        </div>`

    return element;
}

