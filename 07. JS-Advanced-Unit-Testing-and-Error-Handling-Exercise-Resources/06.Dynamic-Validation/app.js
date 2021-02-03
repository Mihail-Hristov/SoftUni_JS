function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', check);

    const regex = /[a-z.]+@[a-z]+.[a-z]+$/gm;

    let inputField = document.querySelector('input');

    function check(ev) {
        let input = email.value;
        if (!regex.test(input)) {
            inputField.className = 'error';
        }else {
            inputField.className = '';
            email.value = '';
        }
    }
}