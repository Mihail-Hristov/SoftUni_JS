function loadCommits() {
    const userName = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    let url = `https://api.github.com/repos/${userName}/${repo}/commits`;

    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            ul.innerHTML = '';
            response.forEach(l => {
                let li = document.createElement('li');
                li.textContent = `${l.commit.author.name}: ${l.commit.message}`;
                ul.appendChild(li);
            })
        })
        .catch((error) => {
            ul.innerHTML = '';
            let li = document.createElement('li');
            li.textContent = `Error: ${error.status} (${error.statusText})`;
            ul.appendChild(li);
        })
}