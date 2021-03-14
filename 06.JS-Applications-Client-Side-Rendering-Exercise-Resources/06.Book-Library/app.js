function attachEvents() {
    const loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', load);

    const form = document.getElementById('form');
    form.addEventListener('submit', create);

}

async function load() {
    let tbody = document.getElementsByTagName('tbody')[0];
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    let url = 'http://localhost:3030/jsonstore/collections/books';

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    for (const key in data) {
        let tr = document.createElement('tr');

        let tdT = document.createElement('td');
        tdT.textContent = data[key].title;

        let tdA = document.createElement('td');
        tdA.textContent = data[key].author;

        let td = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.id = key;
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let deleteBtn = document.createElement('button');
        deleteBtn.id = key;
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteBook);

        td.appendChild(editBtn);
        td.appendChild(deleteBtn);

        tr.appendChild(tdT);
        tr.appendChild(tdA);
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
}

async function edit(ev) {
    let form = document.getElementById('form');
    form.firstElementChild.textContent = 'Edit FORM';
    form.lastElementChild.textContent = 'Save';

    let id = ev.target.id;

    let urlGet = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let response = await fetch(urlGet);
    let data = await response.json();

    document.getElementsByName('title')[0].value = data.title;
    document.getElementsByName('author')[0].value = data.author;

    form.lastElementChild.addEventListener('click', async function (ev) {
        let title = document.getElementsByName('title')[0].value;
        let author = document.getElementsByName('author')[0].value;

        if (!title || !author) {
            alert('You must fill all fields!');
            return;
        }
        if (ev.target.textContent !== 'Save') {
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

        form.firstElementChild.textContent = 'FORM';
        form.lastElementChild.textContent = 'Submit';
        document.getElementsByName('title')[0].value = '';
        document.getElementsByName('author')[0].value = '';
    })

}

async function create(ev) {
    ev.preventDefault();
    if (ev.target.lastElementChild.textContent !== 'Submit') {
        return;
    }

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
    let id = ev.target.id;
    console.log(id);

    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let deleteB = await fetch(url, {
        method: 'delete',
    })

    load();
}

attachEvents();