import { showDetails } from "./details.js";

let main;
let section;
let movieId;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    section.addEventListener('submit', editMovie);
}

export async function showEdit(movie) {
    main.innerHTML = '';
    main.appendChild(section);

    const title = document.querySelector('#edit-movie input[name="title"]');
    const description = document.querySelector('#edit-movie textarea[name="description"]');
    const img = document.querySelector('#edit-movie input[name="imageUrl"]');

    title.value = movie.title;
    description.value = movie.description;
    img.value = movie.img;
    movieId = movie._id;
}

async function editMovie(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('imageUrl');
    let creator = sessionStorage.getItem('id');

    if(!title || !description || !image) {
        return alert('All fields must be filled');
    }

    const obj = {
        title,
        description,
        image,
        creator,
    }

    let url = `http://localhost:3030/data/movies/${movieId}`;
    let token = sessionStorage.getItem('authToken')
    let response = await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
        body: JSON.stringify(obj),
    })

    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    document.querySelector('#add-movie input[name="title"]').value = '';
    document.querySelector('#add-movie textarea[name="description"]').value = '';
    document.querySelector('#add-movie input[name="imageUrl"]').value = '';

    showDetails(data._id);
}