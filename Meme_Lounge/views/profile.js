import { html } from '../node_modules/lit-html/lit-html.js';
import { getUserMemes } from '../src/data.js';

const profileTemplate = (data, user) => html `
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender == 'male' ? 'male.png' : 'female.png'}">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.userEmail}</p>
            <p>My memes count: ${Number(data.length)}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

        ${data.length == 0 ? html `<p class="no-memes">No memes in database.</p>` : data.map(memeElement)}
        
        </div>
    </section>
`;

const memeElement = (element) => html `
<div class="user-meme">
            <p class="user-meme-title">${element.title}</p>
            <img class="userProfileImage" alt="meme-img" src=${element.imageUrl}>
            <a class="button" href=${`/details/${element._id}`}>Details</a>
        </div>
`;

export async function profilePage(ctx) {
    ctx.setUserNav('myProfile');
    
    const username = sessionStorage.getItem('username');
    const userEmail = sessionStorage.getItem('userEmail');
    const gender = sessionStorage.getItem('gender');

    const user = {
        username,
        userEmail,
        gender
    }

    const data = await getUserMemes();
    console.log(data);
    ctx.render(profileTemplate(data, user));
}