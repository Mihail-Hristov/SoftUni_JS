document.getElementById('loginForm').addEventListener('submit', log)

async function log(ev) {
    ev.preventDefault();

    const logForm = new FormData(ev.target);

    const email = logForm.get('email');
    const password = logForm.get('password');

    if (!email || !password) {
        return alert('All fields must be filled!')
    }

    const obj = {
        email,
        password
    }

    let url = 'http://localhost:3030/users/login';
    let response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    let data = await response.json();
    if (!response.ok) {
        return alert(data.message);
    }

    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('id', data._id);

    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="password"]').value = '';
    window.location.replace('./index.html');
}