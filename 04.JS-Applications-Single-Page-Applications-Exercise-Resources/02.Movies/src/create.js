import { showHome } from "./home.js";

let main;
let section;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    section.addEventListener('submit', createMovie);
}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}

async function createMovie(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('imageUrl');
    let creator = sessionStorage.getItem('id');
    let likes = 0;

    if(!title || !description || !image) {
        return alert('All fields must be filled');
    }

    const obj = {
        title,
        description,
        image,
        creator,
        likes
    }

    let url = 'http://localhost:3030/data/movies';
    let token = sessionStorage.getItem('authToken')
    let response = await fetch(url, {
        method: 'post',
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

    showHome();
}

