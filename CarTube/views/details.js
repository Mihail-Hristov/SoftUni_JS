import { html } from '../node_modules/lit-html/lit-html.js';
import { getCarById, deleteCar } from '../src/data.js';


const detailsTemplate = (data, isOwner, del) => html `
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${data.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>


        ${isOwner ? html`<div class="listings-buttons">
        <a href="/edit/${data._id}" class="button-list">Edit</a>
        <a @click=${del} href="javascript:void(0)" class="button-list">Delete</a>
    </div>`: ''}
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const data = await getCarById(id);
    const isOwner = sessionStorage.getItem('userId') === data._ownerId;

    ctx.render(detailsTemplate(data, isOwner, del));

    async function del(ev) {
        const confirmed = confirm('Are you sure!');

        if (confirmed) {
            await deleteCar(id);
            ctx.page.redirect('/catalog');
        }
    }
}