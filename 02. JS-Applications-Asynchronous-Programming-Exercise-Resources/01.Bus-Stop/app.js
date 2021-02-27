async function getInfo() {
    let id = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');

    let data = await getBusInfo(id)
    fillInfo(data, stopName, ul);
}

async function getBusInfo(id) {
    let url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;
    let respones;
    let data;
    try {
        respones = await fetch(url);
        data = await respones.json();
    } catch (er) {
        console.log(er.message);
    }

    return data;
}

function fillInfo(data, stopName, ul) {
    stopName.textContent = '';
    ul.innerHTML = '';
    if (typeof data === 'object') {
        document.getElementById('stopId').value = '';
        stopName.textContent = data.name;

        for (const bus in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]}`;
            ul.appendChild(li);
        }
    } else {
        stopName.textContent = 'Error'
    }
}