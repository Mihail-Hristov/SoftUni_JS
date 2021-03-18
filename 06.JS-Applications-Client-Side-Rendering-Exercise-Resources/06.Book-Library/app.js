import { html, render } from '../node_modules/lit-html/lit-html.js';

const sectionTable = document.querySelector('#table');
const sectionBtn = document.querySelector('#loadBtn');
const sectionEdit = document.querySelector('#editBook');
const sectionCreate = document.querySelector('#createBook');


async function load() {
    let url = 'http://localhost:3030/jsonstore/collections/books';

    let response = await fetch(url);
    let data = await response.json();

    //Object.entries.forEach((key, value) => console.log(key + ' ' + value));

    const table = createTable(data);
    render(table, sectionTable);
}

async function edit(ev) {
    ev.preventDefault();
    const id = ev.target.id;
 
    let title = document.getElementsByName('title')[0].value;
    let author = document.getElementsByName('author')[0].value;

    if (!title || !author) {
        alert('You must fill all fields!');
        return;
    }

    let obj = {
        title,
        author
    }
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let updateBook = await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })
    load();
}

async function create(ev) {
    ev.preventDefault();

    let title = document.getElementsByName('title')[0].value;
    let author = document.getElementsByName('author')[0].value;

    if (!title || !author) {
        alert('You must fill all fields!');
        return;
    }

    let obj = {
        author,
        title
    }

    let url = 'http://localhost:3030/jsonstore/collections/books';
    let crt = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    document.getElementsByName('title')[0].value = '';
    document.getElementsByName('author')[0].value = '';

    load();
}

async function deleteBook(ev) {
    const id = ev.target.id;

    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let deleteB = await fetch(url, {
        method: 'delete',
    })

    load();
}
const btn = createLoadBtn();
render(btn, sectionBtn)

const table = createTable({});
render(table, sectionTable);

const createSect = createForm();
render(createSect, sectionCreate);


function createLoadBtn() {
    return html`
    <button @click="${load}" id="loadBooks">LOAD ALL BOOKS</button>
    `;
}

function createTable(data) {
    return html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${Object.entries(data).map(([key, value]) => html`
        <tr>
                <td>${value.title}</td>
                <td>${value.author}</td>
                <td>
                    <button @click="${loadtEditForm}" id="${key}">Edit</button>
                    <button @click="${deleteBook}" id="${key}">Delete</button>
                </td>
            </tr>
        `)}
        </tbody>
    </table>
    `;
}

async function loadtEditForm(ev) {
    const id = ev.target.id;
    console.log(id);
    let urlGet = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let response = await fetch(urlGet);
    let data = await response.json();

    console.log(data);
    const form = createEdit(data, id);
    sectionCreate.innerHTML = '';
    render(form, sectionEdit)
}

function createEdit(data, id) {
    return html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click="${edit}" id="${id}" type="submit" value="Save">
    </form>
    `;
}

function createForm() {
    return html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click="${create}" type="submit" value="Submit">
    </form>
    `;
}
