function attachEvents() {
    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', send);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);
}

async function send() {
    let author = document.getElementsByName('author')[0].value;
    let content = document.getElementsByName('content')[0].value;

    if(!author) {
        author = 'unknown'
    }

    if (!content) {
        content = 'unknown'
    }
    let obj = {
        author,
        content
    }

    let response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });

    document.getElementsByName('author')[0].value = '';
    document.getElementsByName('content')[0].value = '';
}

async function refresh() {
    let textArea = document.getElementById('messages');
    let url = 'http://localhost:3030/jsonstore/messenger';
    let response = await fetch(url);
    let data = await response.json();

    let text = '';
    for (const key in data) {
        text += `${data[key].author}: ${data[key].content}\n`;
    }

    textArea.textContent = text;
}

attachEvents();