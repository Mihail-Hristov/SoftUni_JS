function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let veiwBtn = document.getElementById('btnViewPost');
    
    loadBtn.addEventListener('click', load);
    veiwBtn.addEventListener('click', view);
}

async function load() {
    let posts = document.getElementById('posts');
    posts.innerHTML = '';
    let urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
    let dataPosts = await getData(urlPosts);
    console.log(dataPosts);

    for (const key in dataPosts) {
        let option = createEl('option', dataPosts[key].title, key);
        posts.appendChild(option);
    }
}

async function view() {
    let posts = document.getElementById('posts');
    let id = posts.options[posts.selectedIndex].value;
    let urlPosts = `http://localhost:3030/jsonstore/blog/posts/${id}`;
    let dataPost = await getData(urlPosts);
    let urlComments = `http://localhost:3030/jsonstore/blog/comments`;
    let dataCom = await getData(urlComments);

    let commetns = [];
    for (const key in dataCom) {
        if (dataCom[key].postId === id) {
            commetns.push(dataCom[key].text);
        }
    }
    document.getElementById('post-title').textContent = '';
    document.getElementById('post-body').textContent = '';
    document.getElementById('post-comments').innerHTML = '';

    document.getElementById('post-title').textContent = dataPost.title;
    document.getElementById('post-body').textContent = dataPost.body;
    let ul = document.getElementById('post-comments');

    for (const element of commetns) {
        let li = createEl('li', element);
        ul.appendChild(li);
    }

}

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

function createEl(type, text, val) {
    let element = document.createElement(type);

    if (text) {
        element.textContent = text;
    }

    if (val) {
        element.value = val;
    }

    return element;
}

attachEvents();