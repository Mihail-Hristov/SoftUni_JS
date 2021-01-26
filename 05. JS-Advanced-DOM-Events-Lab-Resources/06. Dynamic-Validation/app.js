function validate() {
    document.getElementById('email').addEventListener('change', check);
    

    const regex = /[a-z]+@[a-z]+\.[a-z]+/gm;

    function check(ev) {
        let email = document.getElementById('email').value;
        if(regex.test(email)) {
            ev.target.className = '';
        }else {
            ev.target.className = 'error';
        }
    
    }
}