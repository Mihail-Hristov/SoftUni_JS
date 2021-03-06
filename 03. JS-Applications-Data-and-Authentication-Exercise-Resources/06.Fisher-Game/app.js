function attachEvents() {
    const loadBtn = document.querySelector('.class');
    loadBtn.addEventListener('click', load);
}

async function load() {
    let url = 'http://localhost:3030/data/catches';
    let response = await fetch(url);
    let data = response.json();

    
}

attachEvents();

