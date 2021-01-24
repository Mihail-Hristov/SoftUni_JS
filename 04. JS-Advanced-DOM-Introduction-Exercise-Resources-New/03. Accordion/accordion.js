function toggle() {
    let button = document.querySelector(".button");
    let content = document.getElementById('extra');

    if (button.textContent === 'More') {
        content.style.display = 'block';
        button.textContent = 'Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'More';
    }
}