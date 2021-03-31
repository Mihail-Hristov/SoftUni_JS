import { html } from '../node_modules/lit-html/lit-html.js';
import { searchByYear } from '../src/data.js';


const seearchTemplate = (searchFor, search) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id=searchField type="text" name="search" placeholder="Enter desired production year">
        <button @click=${searchFor} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">


    ${search ? html`
        
        <div class="listing">
            <div class="preview">
                <img src="/images/audia3.jpg">
            </div>
            <h2>Audi A3</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: 2018</h3>
                    <h3>Price: 25000 $</h3>
                </div>
                <div class="data-buttons">
                    <a href="#" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>

        
        ${search.length == 0 ? html `<p class="no-cars"> No results.</p>` : ''};
        ` : ''}
    </div>
</section>
`;

export function searchPage(ctx) {
    ctx.render(seearchTemplate(searchFor));

    async function searchFor() {
        const year = document.getElementById('searchField').value;
        
        const data = await searchByYear(year);

        seearchTemplate(searchFor, data);
    }
}