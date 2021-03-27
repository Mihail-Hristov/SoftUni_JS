import { html } from "../node_modules/lit-html/lit-html.js";
import { getAllMemes } from '../src/data.js'

const allMemesTemplate = (data) => html `
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
        ${data.map(memeTemplate)}
        <!-- Display : If there are no memes in database -->
        <p class="no-memes "  style=${(data.length > 0 ? 'display: none': 'display: block')}>No memes in database.</p>
    </div>
</section>
`;

const memeTemplate = (element) => html `
<div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${element.title}</p>
                    <img class="meme-image" alt="meme-img" src=${element.imageUrl}>
                </div>
                <div id="data-buttons">
                    <a class="button" href=${`/details/${element._id}`}>Details</a>
                </div>
            </div>
        </div>
`;

export async function allMemesPage(ctx) {
    const data = await getAllMemes();
    ctx.render(allMemesTemplate(data));
    ctx.setUserNav('allMemes');
}