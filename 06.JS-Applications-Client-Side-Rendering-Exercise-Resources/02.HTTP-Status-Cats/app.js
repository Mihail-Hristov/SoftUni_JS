import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js'

function solve() {
    console.log(cats);
    const section = document.getElementById('allCats');

    const makeCatCards = (data) => html`
    <ul>
        ${data.map(c => html`
        <li>
            <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${c.id}">
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage}</p>
                    </div>
                </div>
        </li>`)}
    </ul>`;

    const result = makeCatCards(cats);
    render(result, section);

    document.getElementById('allCats').addEventListener('click', togle);
}

function togle(ev) {
    if (ev.target.className !== 'showBtn') {
        return;
    }

    const show = ev.target.parentNode.lastElementChild;

    if (show.style.display === 'none') {
        show.style.display = 'block';
        ev.target.textContent = 'Hide status code';
    }else {
        show.style.display = 'none';
        ev.target.textContent = 'Show status code';
    }
}

solve();