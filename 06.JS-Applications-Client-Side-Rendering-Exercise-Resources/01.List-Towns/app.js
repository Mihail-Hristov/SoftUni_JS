import { html, render } from '../node_modules/lit-html/lit-html.js';


function solve() {
    const form = document.querySelector('.content');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const div = document.getElementById('root');

        const myForm = new FormData(form);
        const towns = myForm.get('towns').split(', ');;
        form.reset();

        const listOfTowns = (data) => html `
        <ul>
            ${data.map(t => html `<li>${t}</li>`)}
        </ul>`;

        const result = listOfTowns(towns);

        render(result, div);

    });
}

solve();

