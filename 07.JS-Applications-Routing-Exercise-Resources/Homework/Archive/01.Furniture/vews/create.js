import { html } from '../node_modules/lit-html/lit-html.js';
import { createFurniture } from '../app/data.js';

const createTemplate = (onSubmit, invalidMake, invalidModel, invalidYear, invalidDescription, invalidPrice, invalidImg) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${'form-control' + (invalidMake ? ' is-invalid' : '')} id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${'form-control' + (invalidModel? ' is-invalid' : '')} id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${'form-control' + (invalidYear ? ' is-invalid' : '')} id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${'form-control' + (invalidDescription ? ' is-invalid' : '')} id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${'form-control' + (invalidPrice ? ' is-invalid' : '')} id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${'form-control' + (invalidImg ? ' is-invalid' : '')} id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));
    ctx.setUserNav('create');

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
                ctx.render(createTemplate(onSubmit, make.length < 4, model.length < 4, (Number(year) < 1950 || Number(year) > 2050), description.length <= 10, Number(price) <= 0, !img))
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

            await createFurniture(item);
    
            ctx.setUserNav('dashboard');
            ctx.page.redirect('/');

    }
}