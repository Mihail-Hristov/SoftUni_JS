import { html } from '../node_modules/lit-html/lit-html.js';
import { createCar } from '../src/data.js'

const createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));
    ctx.setUserNav('create');

    async function onSubmit(ev) {
        ev.preventDefault();

        const createForm = new FormData(ev.target);

        const brand = createForm.get('brand');
        const model = createForm.get('model');
        const description = createForm.get('description');
        const year = Number(createForm.get('year'));
        const imageUrl = createForm.get('imageUrl');
        const price = Number(createForm.get('price'));


        if(year <= 0 || price <= 0) {
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

        await createCar(obj);
        
        ctx.page.redirect('/catalog');
    }
}