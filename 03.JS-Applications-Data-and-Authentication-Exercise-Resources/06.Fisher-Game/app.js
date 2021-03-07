function attachEvents() {
    const loadBtn = document.querySelector('.load');
    loadBtn.addEventListener('click', load);
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
}

attachEvents();

function createCatch(data) {
    const element = document.createElement('div');
    element.className = 'catch';

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
    <button disabled class="update">Update</button>
    <button disabled class="delete">Delete</button>`

    return element;
}