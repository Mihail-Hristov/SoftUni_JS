import { html, render} from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function addItem() {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    const opt = createOption(data);
    const select = document.getElementById('menu');

    render(opt, select);
}

function createOption(data) {
    const options = []

    for (const key in data) {
        const text = data[key].text;
        const id = data[key]._id;
        options.push({text, id});
    }

    const option = (data) => html `
    ${data.map(t => html `<option value=${t.id}>${t.text}</option>`)}
   `

    const result = option(options)
    return result;
}
addItem()
document.querySelector('[value="Add"]').addEventListener('click', add);

async function add (ev) {
    ev.preventDefault();
    const field = document.getElementById('itemText');
    const newOpt = field.value;
    field.value = '';

    const obj = {
        text: newOpt
    }

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    const data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    addItem()
}
