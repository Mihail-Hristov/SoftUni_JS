function addItem() {
    let newValue = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = newValue;
    let ul = document.getElementById('items');
    ul.appendChild(li);

    
    document.getElementById('newItemText').value = '';
}