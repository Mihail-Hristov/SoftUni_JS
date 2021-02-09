function validate() {
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    let CompanyCheck = document.getElementById('company');
    CompanyCheck.addEventListener('change', showCompany);

    let valid = document.getElementById('valid');

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let companyNumber = document.getElementById('companyNumber');

    let check = document.getElementById('companyInfo');

    let regexForUsername = /^[A-Za-z0-9]{3,20}$/;
    let regexForPassword = /^[A-Za-z0-9_]{5,15}$/;
    let regexForEmail = /.*[@].*\..*$/;
    let regexForCompanyNumber = /^[1-9][0-9][0-9][0-9]$/;

    function showCompany(ev) {
        if (check.style.display == 'none') {
            check.style.display = 'block'
        } else {
            check.style.display = 'none'
        }
    }

    function submit(ev) {
        let isValid = false;
        ev.preventDefault();
        regexForUsername.test(username.value) == false ? username.style.borderColor = 'red' : username.style.borderColor = 'initial'

        regexForEmail.test(email.value) == false ? email.style.borderColor = 'red' : email.style.borderColor = 'initial'

        regexForPassword.test(password.value) == false || password.value != confirmPassword.value || confirmPassword.value == '' && password.value == '' ? password.style.borderColor = 'red' : password.style.borderColor = 'initial'

        regexForPassword.test(confirmPassword.value) == false || password.value != confirmPassword.value || confirmPassword.value == '' && password.value == '' ? confirmPassword.style.borderColor = 'red' : confirmPassword.style.borderColor = 'initial'

        if (check.style.display == 'block') {
            if (!regexForCompanyNumber.test(companyNumber.value)) {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumber.style.borderColor = 'initial';
                isValid = true;
            }
        }

        if (regexForUsername.test(username.value) && regexForEmail.test(email.value) && regexForPassword.test(password.value) && regexForPassword.test(confirmPassword.value) && password.value == confirmPassword.value) {
            if ((check.style.display == 'block' && isValid) || check.style.display == 'none') {
                valid.style.display = 'block';
            }
        } else {
            if ((check.style.display == 'block' && !isValid) || check.style.display == 'none') {
                valid.style.display = 'none';
            }
        }

    }
}
