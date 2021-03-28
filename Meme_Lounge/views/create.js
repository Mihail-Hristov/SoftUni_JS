import { createMeme } from '../src/data.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { notify } from './alert.js';

const createTemplate = (onSubmit) => html `
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));
    ctx.setUserNav('create');

    async function onSubmit(ev) {
        ev.preventDefault();

        const createForm = new FormData(ev.target);

        const title = createForm.get('title');
        const description = createForm.get('description');
        const imageUrl = createForm.get('imageUrl');

        try{
        if(!title || !description || !imageUrl) {
            throw new Error('All fields must be filled!');
        }

        const obj = {
            title,
            description,
            imageUrl
        }

        await createMeme(obj);

        ctx.page.redirect('/allMemes');
    }catch(err) {
        notify(err.message);
    }
    }
}