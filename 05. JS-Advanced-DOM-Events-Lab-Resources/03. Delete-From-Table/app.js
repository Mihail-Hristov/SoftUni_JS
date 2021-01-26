function deleteByEmail() {
    let searchFor = document.querySelector('[name="email"]').value;

    if (searchFor.length === 0) {
        return;
    }
    
    let secondColum = document.querySelectorAll('#customers tbody tr td:nth-child(2)');

    let isDeleted = false;

    for (const email of secondColum) {
        if (searchFor === email.textContent) {
            email.parentNode.remove();
            isDeleted = true;
        }
    }

    let result = 'Not found.';

    if (isDeleted) {
        result = 'Deleted.'
    }

    document.getElementById('result').textContent = result;

    document.querySelector('[name="email"]').value = ''
}