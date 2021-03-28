import { html } from '../node_modules/lit-html/lit-html.js';
import { getMemeById, deleteMeme } from '../src/data.js';

const detailsTemplate = (data, isOwner) => html`
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
            <a class="button warning" style=${isOwner ? "display:inline-block" : "display:none"} href="/edit/${data._id}">Edit</a>
            <button id="deleteBtn" class="button danger" style=${isOwner ? "display:inline-block" : "display:none"} >Delete</button>
            
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getMemeById(id);

    const ownerId = data._ownerId;
    const userId = sessionStorage.getItem('userId');

    const isOwner = (ownerId === userId);

    ctx.render(detailsTemplate(data, isOwner));
    ctx.setUserNav();

    document.getElementById('deleteBtn').addEventListener('click', delMeme);

    async function delMeme() {
        const confirmed = confirm("Are you sure!");

        if (confirmed) {
            await deleteMeme(id);
        }else {
            return;
        }
        

        ctx.page.redirect('/allMemes');
    }
}