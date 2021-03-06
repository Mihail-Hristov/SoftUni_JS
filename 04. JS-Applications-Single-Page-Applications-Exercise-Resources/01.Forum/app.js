const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', createPost);

async function createPost(ev) {
    ev.preventDefault();
   
    const formData = new FormData(myForm);
    let title = formData.get('topicName');
    let username = formData.get('username');
    let post = formData.get('postText');

    if (!title || !username || !postText) {
        alert('All fields must be filled')
        return;
    }

    let obj = {
        title,
        username,
        post
    }

    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });

    document.getElementById('topicName').value = '';
    document.getElementById('username').value = '';
    document.getElementById('postText').value = '';
}