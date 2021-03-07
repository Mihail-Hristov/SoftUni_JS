function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', load);

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', create);
}

async function load() {
    let ul = document.getElementById('phonebook');
    document.getElementById('phonebook').innerHTML = '';

    let url = 'http://localhost:3030/jsonstore/phonebook';
    let response = await fetch(url);
    let data = await response.json();

    for (const key in data) {
       let li = document.createElement('li');
       li.textContent = `${data[key].person}: ${data[key].phone}`;
       li.id = data[key]._id;

       let deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Delete';
       deleteBtn.addEventListener('click', deleteLi);

       li.appendChild(deleteBtn);
       ul.appendChild(li);
    }
}

async function create() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;

    let obj;

    if (!person || !phone) {
        alert ('You must fill all fields');
        return;
    }else {
        obj = {
            person,
            phone
        }
    }

    let url = 'http://localhost:3030/jsonstore/phonebook';
    let send = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    load();
}

async function deleteLi(ev) {
    let id = ev.target.parentNode.id;
    
    let url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    let deletePhone = await fetch(url, {
        method: 'delete',
    });

    load();
}

attachEvents();