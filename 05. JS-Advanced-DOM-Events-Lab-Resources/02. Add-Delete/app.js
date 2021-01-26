function addItem() {
    let text = document.getElementById('newText').value;
    document.getElementsByTagName('a');

    if (text.length === 0) {
        return;
    }

    let li = createElement('li', text);
    let a = createElement('a', '[Delete]');
    a.href = '#';

    console.log(a);
    console.log(li);

    let ul = document.getElementById('items');

    li.appendChild(a);
    ul.appendChild(li);
    
    a.addEventListener('click', remove);
    
    document.getElementById('newText').value = '';

    function remove(ev) {
        ev.target.parentNode.remove();
    }

    function createElement(type, text) {
        let element = document.createElement(type);
        element.textContent = text;
        return element;
    }
}