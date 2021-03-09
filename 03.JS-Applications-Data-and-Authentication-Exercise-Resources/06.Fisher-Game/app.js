function attachEvents() {
    const loadBtn = document.querySelector('.load');
    loadBtn.addEventListener('click', load);

    const addBtn = document.querySelector('.add');
    addBtn.addEventListener('click', addCatch);

    const deleteBtn = document.querySelector('#catches');
    deleteBtn.addEventListener('click', proccesing);

    const updateBtn = document.querySelector('#catches');
    updateBtn.addEventListener('click', proccesing);
}

function proccesing(ev) {
    if (ev.target.textContent === 'Update') {
        updateCatch(ev);
    }else if (ev.target.textContent === 'Delete') {
        deleteCatch(ev)
    }
}

async function updateCatch(ev) {
    let ownerId = ev.target.parentNode.name;
    let id = ev.target.parentNode.id;
    let token = sessionStorage.getItem('authToken');

    if (sessionStorage.id !== ownerId) {
        return alert('You are not owner of this catch!')
    }

    let target = ev.target.parentNode;

    const angler = target.children[1].value;
    const weight = target.children[4].value;
    const species = target.children[7].value;
    const location = target.children[10].value;
    const bait = target.children[13].value;
    const captureTime = target.children[16].value;

    let obj = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    
    let url = `http://localhost:3030/data/catches/${id}`;
    let response = await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
        body: JSON.stringify(obj),
    })

    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    load();

}

async function deleteCatch(ev) {
    let ownerId = ev.target.parentNode.name;
    let id = ev.target.parentNode.id;
    let token = sessionStorage.getItem('authToken');

    if (sessionStorage.id !== ownerId) {
        return alert('You are not owner of this catch!')
    }
    
    let url = `http://localhost:3030/data/catches/${id}`;
    let response = await fetch(url, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
    })

    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    load();
}

async function addCatch(ev) {
    

    const angler = document.querySelector('#addForm .angler').value;
    const weight = document.querySelector('#addForm input[class="weight"]').value;
    const species = document.querySelector('#addForm input[class="species"]').value;
    const location = document.querySelector('#addForm input[class="location"]').value;
    const bait = document.querySelector('#addForm input[class="bait"]').value;
    const captureTime = document.querySelector('#addForm input[class="captureTime"]').value;

    if(!angler || !weight || !species || !location || !bait || !captureTime) {
        return alert('All fields must be filled!');
    }

    let obj = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }
    let token = sessionStorage.getItem('authToken');

    let url = 'http://localhost:3030/data/catches';
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': `${token}` },
        body: JSON.stringify(obj),
    })

    let data = await response.json();

    if(!response.ok) {
        return alert(data.message);
    }

    document.querySelector('#addForm .angler').value = '';
    document.querySelector('#addForm input[class="weight"]').value = '';
    document.querySelector('#addForm input[class="species"]').value = '';
    document.querySelector('#addForm input[class="location"]').value = '';
    document.querySelector('#addForm input[class="bait"]').value = '';
    document.querySelector('#addForm input[class="captureTime"]').value = '';

    load();
}

async function load() {
    let container = document.querySelector('#catches');
    container.innerHTML = '';
    let url = 'http://localhost:3030/data/catches';
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    for (let key of data) {
        let current = createCatch(key);
        container.appendChild(current);
    }
    checkForLoginUser()
}

function checkForLoginUser() {
    let userBtns = document.querySelectorAll('.user')
    if(sessionStorage.id) {
        userBtns.forEach(b => b.disabled = false);
    }
}

attachEvents();
checkForLoginUser()

function createCatch(data) {
    const element = document.createElement('div');
    element.className = 'catch';
    element.name = data._ownerId;
    element.id = data._id;

    element.innerHTML = 
    `<label>Angler</label>
    <input type="text" class="angler" value="${data.angler}" />
    <hr>
    <label>Weight</label>
    <input type="number" class="weight" value="${data.weight}" />
    <hr>
    <label>Species</label>
    <input type="text" class="species" value="${data.species}" />
    <hr>
    <label>Location</label>
    <input type="text" class="location" value="${data.location}" />
    <hr>
    <label>Bait</label>
    <input type="text" class="bait" value="${data.bait}" />
    <hr>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${data.captureTime}" />
    <hr>
    <button disabled class="update user">Update</button>
    <button disabled class="delete user">Delete</button>`

    return element;
}