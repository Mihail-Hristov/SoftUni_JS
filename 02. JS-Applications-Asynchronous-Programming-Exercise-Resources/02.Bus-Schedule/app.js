function solve() {

    let id = 'depot';
    let data;
    
    let info = document.getElementById('info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    

    async function depart() {
        try {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;
        let response = await fetch(url);
        data = await response.json();
        } catch (e) {
            info.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

        info.textContent = 'Next stop ' + data.name;
        id = data.next

        departBtn.disabled = true;
        arriveBtn.removeAttribute('disabled');
    }

    function arrive() {
        info.textContent = 'Arriving at ' + data.name;

        departBtn.removeAttribute('disabled');
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();