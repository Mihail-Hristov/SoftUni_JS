import { html } from '../node_modules/lit-html/lit-html.js';
import { editMeme, getMemeById } from '../src/data.js';
import { notify } from './alert.js';

const editTemplate = (onSubmit, data) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">${data.description}</textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const data = await getMemeById(id);
    console.log(data);
    ctx.render(editTemplate(onSubmit, data));

    async function onSubmit(ev) {
        ev.preventDefault();

        const editForm = new FormData(ev.target);

        const title = editForm.get('title');
        const description = editForm.get('description');
        const imageUrl = editForm.get('imageUrl');

        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields must be filled!');
            }

            const obj = {
                title,
                description,
                imageUrl
            }

            await editMeme(id, obj)

            ctx.page.redirect(`/details/${id}`)
        } catch (err) {
            notify(err.message);
        }
    }
}