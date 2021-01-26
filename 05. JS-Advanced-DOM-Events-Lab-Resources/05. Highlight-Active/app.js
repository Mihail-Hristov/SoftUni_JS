function focus() {
    let fields = document.querySelectorAll('[type="text"]');

    for (const field of fields) {
        field.addEventListener('focus', focus)
        field.addEventListener('blur', blur);
    }

    function focus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function blur(ev) {
        ev.target.parentNode.className = '';
    }
}