import { html } from '../node_modules/lit-html/lit-html.js';
import { getCarsByUser } from '../src/data.js'

const myCarsTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

       ${data.map(elementTemplate)}


        ${data.length == 0 ? html `<p class="no-cars">You haven't listed any cars yet.</p>` : ''}
        
        
    </div>
</section>
`;

const elementTemplate = (element) => html `
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
        <a href="/detailsZz${element._id}" class="button-carDetails">Details</a>
    </div>
</div>
</div>
`;

export async function myCarsPage(ctx) {
    const id = sessionStorage.getItem('userId');
    ctx.setUserNav('myLists');

    const data = await getCarsByUser(id);
    ctx.render(myCarsTemplate(data));
}