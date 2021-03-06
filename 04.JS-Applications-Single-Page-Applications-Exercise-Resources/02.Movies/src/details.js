import { showEdit } from "./edit.js";
import { showHome } from "./home.js";

let main;
let section;
let movie;

async function getMovieById(id) {
    let url = `http://localhost:3030/data/movies/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getLikes(movie) {
    let url = `http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22&amp;distinct=_ownerId&amp;count`;
    let response = await fetch(url);
    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }
    return data;
}

async function createMovieCard(movie) {
    let element = document.createElement('div');
    element.className = 'container';
    element.setAttribute('ownerId', `${movie._ownerId}`);
    let likes = await getLikes(movie);

    element.innerHTML =
        ` <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail"
                src="${movie.img}" alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked ${likes.length}</span>
        </div>
    </div>`;

    return element;
}

async function deleteMovie(ev) {
    ev.preventDefault();
    let movieId = movie._id;

    let url = `http://localhost:3030/data/movies/${movieId}`;
    let token = sessionStorage.getItem('authToken')
    let response = await fetch(url, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
    })

    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    showHome();
}


export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

function edit(ev) {
    showEdit(movie);
}

async function likeMovie(ev) {
    ev.preventDefault();

    let url = 'http://localhost:3030/data/likes';
    let obj = {
        movieId: movie._id ,
    }

    let token = sessionStorage.getItem('authToken');
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
        body: JSON.stringify(obj)
    })

    if(response.ok) {
        showDetails(movie._id);
    }
}

async function ownLike() {
    let id = sessionStorage.getItem('id');
    let url = `http://localhost:3030/data/likes?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${id}%22`;
    let response = await fetch(url);

    let data = await response.json();
    return data;
} 

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    movie = await getMovieById(id);
    let card = await createMovieCard(movie);

    let own = await ownLike();

    section.appendChild(card);
    const deleteBtn = document.querySelector('.btn-danger');
    deleteBtn.addEventListener('click', deleteMovie);

    const editMovie = document.querySelector('.btn-warning');
    editMovie.addEventListener('click', edit);

    const likeBtn = document.querySelector('.btn-primary');
    likeBtn.addEventListener('click', likeMovie)

    let btns = document.querySelectorAll('.btn');
    if (sessionStorage.getItem('id') !== movie._ownerId) {
        [...btns].filter(b => b.textContent == 'Delete' || b.textContent == 'Edit').forEach(b => b.style.display = 'none');
    }else {
        [...btns].filter(b => b.textContent == 'Like').forEach(b => b.style.display = 'none');
    }

    if (!sessionStorage.getItem('id') || sessionStorage.getItem('id') == movie._ownerId || own.length > 0 ) {
        [...btns].filter(b => b.textContent == 'Like').forEach(b => b.style.display = 'none');
    }
    ownLike();
}