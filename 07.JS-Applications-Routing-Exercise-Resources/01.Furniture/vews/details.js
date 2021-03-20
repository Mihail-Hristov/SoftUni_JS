import { getFurnitureDetail, deleteFurniture } from '../app/data.js';
import { html } from '../node_modules/lit-html/lit-html.js';

const detailsTemplate = (item, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${item.img}"/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            <div id="owner">
                <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
                <a @click=${onDelete} class="btn btn-red">Delete</a>
            </div>
        </div>
    </div>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getFurnitureDetail(id);

    ctx.render(detailsTemplate(data, onDelete));

    if(sessionStorage.getItem('userId') === data._ownerId) {
        document.getElementById('owner').style.display = 'inline-block';
    }else {
        document.getElementById('owner').style.display = 'none';
    }

    async function onDelete(ev) {
        ev.preventDefault();

        const confirmed = confirm('Are you sure!');

        if(!confirmed) {
            return;
        }

        await deleteFurniture(id);
        ctx.setUserNav('dashboard');
        ctx.page.redirect('/');
    }

    ctx.setUserNav();
}