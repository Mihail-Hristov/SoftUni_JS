function addItem() {
    let option = document.createElement('option');

    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    option.textContent = text;
    option.value = value;

    let menu = document.getElementById('menu');

    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}