import { html } from '../node_modules/lit-html/lit-html.js';
import { updateFurniture, getFurnitureDetail } from '../app/data.js';

const editTemplate = (onSubmit, item, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImg) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${'form-control' + (invalidMake ? ' is-invalid' : '')} id="new-make" type="text" name="make" .value=${item.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${'form-control' + (invalidModel ? ' is-invalid' : '')} id="new-model" type="text" name="model" .value=${item.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${'form-control' + (invalidYear ? ' is-invalid' : '')} id="new-year" type="number" name="year" .value=${item.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${'form-control' + (invalidDescription ? ' is-invalid' : '')} id="new-description" type="text" name="description" .value=${item.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${'form-control' + (invalidPrice ? ' is-invalid' : '')} id="new-price" type="number" name="price" .value=${item.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${'form-control' + (invalidImg ? ' is-invalid' : '')} id="new-image" type="text" name="img" .value=${item.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`;

export async function editPage(ctx) {
    const data = await getFurnitureDetail(ctx.params.id);
    ctx.render(editTemplate(onSubmit, data));

    async function onSubmit(ev) {
        ev.preventDefault();
    
        const form = new FormData(ev.target);
    
            const make = form.get('make');
            const model = form.get('model');
            const year = form.get('year');
            const description = form.get('description');
            const price = form.get('price');
            const img = form.get('img');
            const material = form.get('material');

            if (make.length < 4 || model.length < 4 || (Number(year) < 1950 || Number(year) > 2050) || description.length <= 10 || Number(price) <= 0 || !img) {
                ctx.render(editTemplate(onSubmit, data, make.length < 4, model.length < 4, (Number(year) < 1950 || Number(year) > 2050), description.length <= 10, Number(price) <= 0, !img))
                return alert('Please, input valid data!')
            }

            const item = {
                make,
                model,
                year,
                description,
                price,
                img,
                material
            }

            await updateFurniture(ctx.params.id, item);
    
            ctx.setUserNav('dashboard');
            ctx.page.redirect('/');

    }
}