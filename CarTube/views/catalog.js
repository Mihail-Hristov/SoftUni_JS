import { html } from '../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../src/data.js';

const catalogTemplate = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

       ${data.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : data.map(elementTemplate)}
    
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

export async function catalogPage(ctx) {
    const data = await getAllCars();

    ctx.setUserNav('catalog');
    ctx.render(catalogTemplate(data));
}