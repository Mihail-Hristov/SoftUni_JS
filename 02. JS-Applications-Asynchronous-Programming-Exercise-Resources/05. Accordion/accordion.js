async function solution() {
    let main = document.getElementById('main');

    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(url);
    let data = await response.json();


    data.forEach(el => {
        let span = createEl('span', el.title);
        let btn = createEl('button', 'More', 'button');
        btn.id = el._id;
        btn.addEventListener('click', change);
        let divH = createEl('div', undefined, 'head');
        divH.appendChild(span);
        divH.appendChild(btn);

        let divA = createEl('div', undefined, 'accordion');
        divA.appendChild(divH);

        main.appendChild(divA);
    });
}

async function change(ev) {
    if (ev.target.textContent === 'More') {
        ev.target.textContent = 'Less';
        let id= ev.target.getAttribute('id');
        let divA = ev.target.parentNode.parentNode;
        let urlMore = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
        let response = await fetch(urlMore);
        let data = await response.json();
    
        let p = createEl('p', data.content);
        let divMore = createEl('div', undefined, 'extra');
        divMore.appendChild(p);
        divA.appendChild(divMore);
    }else {
        ev.target.textContent = 'More';
        let div =  ev.target.parentNode.parentNode;
        div.removeChild(div.childNodes[1]);
    }
}

function createEl(type, text, style) {
    let element = document.createElement(type);

    if (text) {
        element.textContent = text;
    }

    if (style) {
        element.className = style;
    }

    return element;
}

window.onload = solution();