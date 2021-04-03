import { html } from '../node_modules/lit-html/lit-html.js';
import { searchByYear } from '../src/data.js';


const seearchTemplate = (searchFor, data, year) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year" .value=${year}>
        <button @click=${searchFor} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">


    ${data == undefined ? '' : data.length > 0 ? data.map(elementTemplate): html `<p class="no-cars"> No results.</p>`}
    </div>
</section>
`;

const elementTemplate = (element) => html`
<div class="listing">
            <div class="preview">
                <img src=${element.imageUrl}>
            </div>
            <h2>${element.brand} ${element.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${element.year}</h3>
                    <h3>Price: ${element.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${element._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
`;

export async function searchPage(ctx) {
    const year = Number(ctx.querystring.split('=')[1]);

    const data = Number.isNaN(year) ? [] : await searchByYear(year);
    ctx.render(seearchTemplate(searchFor,data, Number.isNaN(year) ? '' : year));
    ctx.setUserNav('byYear');

    async function searchFor() {
        const query = Number(document.getElementById('search-input').value);
        ctx.page.redirect('/search?query=' + query);
        
        
    }
}