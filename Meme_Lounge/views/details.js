import { html } from '../node_modules/lit-html/lit-html.js';
import { getMemeById } from '../src/data.js';

const detailsTemplate = (data) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${data.description}
            </p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            <a class="button warning" href="/edit/${data._id}">Edit</a>
            <button class="button danger">Delete</button>
            
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getMemeById(id);
    ctx.render(detailsTemplate(data));
    ctx.setUserNav();
}