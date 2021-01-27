function lockedProfile() {
    let btns = Array.from(document.getElementsByTagName('button'));
    btns.forEach(b => b.addEventListener('click', changeVisible));

    function changeVisible(ev) {
        let activBtn = ev.target.parentNode.querySelector('input[value = "unlock"]');
        
        if (activBtn.checked == true && ev.target.textContent == 'Show more') {
            let div = ev.target.parentNode.getElementsByTagName('div')[0];
            div.style.display = 'block';
            ev.target.parentNode.getElementsByTagName('button')[0].textContent = 'Hide it';
            return;
        }

        if (activBtn.checked == true && ev.target.textContent == 'Hide it') {
            let div = ev.target.parentNode.getElementsByTagName('div')[0];
            div.style.display = 'none';
            ev.target.parentNode.getElementsByTagName('button')[0].textContent = 'Show more';
            return;
        }
        
    }
}