import { html } from '../node_modules/lit-html/lit-html.js';
import { getCarById, editCar } from '../src/data.js';

const editTemplate = (data, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${data.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${data.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${data.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${data.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${data.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${data.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await getCarById(id);

    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const createForm = new FormData(ev.target);

        const brand = createForm.get('brand');
        const model = createForm.get('model');
        const description = createForm.get('description');
        const year = createForm.get('year');
        const imageUrl = createForm.get('imageUrl');
        const price = createForm.get('price');

        if(!brand || !model || !description || !year || !imageUrl || !price) {
            return alert('All fields must be filled!');
        }

        if(Number(year) <= 0 || Number(price) <= 0) {
            return alert('The values of year and price must be positive numbers!')
        }

        const obj = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
        }

        await editCar(obj, id);
        
        ctx.page.redirect('/details/' + id);
    }
}