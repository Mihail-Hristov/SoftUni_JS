async function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let main = document.getElementById('main');

    let response = await fetch(url);
    let data = await response.json();
    let index = 1;

    console.log(data);

    for (const item in data) {
        let userName = data[item].username;
        let age = data[item].age;
        let email = data[item].email;
        let current = 'user' + index
        console.log(current);

        let div = createEl('div', undefined, 'profile');

        let img = createEl('img', undefined, 'userIcon');
        img.src = './iconProfile2.png';
        div.appendChild(img);

        let labelLock = createEl('label', 'Lock');
        div.appendChild(labelLock);

        let inputL = createEl('input');
        inputL.type = 'radio';
        inputL.name = current + 'Locked';
        inputL.value = 'lock';
        inputL.checked = true;
        div.appendChild(inputL);

        let labelUnlock = createEl('label', 'Unlock');
        div.appendChild(labelUnlock);

        let inputU = createEl('input');
        inputU.type = 'radio';
        inputU.name = current + 'Locked';
        inputU.value = 'unlock';
        let br = createEl('br');
        div.appendChild(inputU);
        div.appendChild(br);

        let hr = createEl('hr');
        div.appendChild(hr);

        let labelName = createEl('label', 'Username');
        div.appendChild(labelName);

        let inputMore = createEl('input');
        inputMore.type = 'text';
        inputMore.name = current + 'Username';
        inputMore.value = userName;
        inputMore.disabled = true;
        inputMore.readOnly = true;

        div.appendChild(inputMore);
    
        let labelEmail = createEl('label', 'Email:');
        let inputEmail = createEl('input');
        inputEmail.type = 'email';
        inputEmail.name = current + 'Email';
        inputEmail.value = email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        let labelAge = createEl('label', 'Age:');
        let inputAge = createEl('input');
        inputAge.type = 'email';
        inputAge.name = current + 'Age';
        inputAge.value = age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        let divMore = createEl('div');
        divMore.id = current + 'HiddenFields';
        let hrMore = createEl('hr');

        divMore.appendChild(hrMore);
        divMore.appendChild(labelEmail);
        divMore.appendChild(inputEmail);
        divMore.appendChild(labelAge);
        divMore.appendChild(inputAge);
        div.appendChild(divMore);


        let btn = createEl('button', 'Show more');
        div.appendChild(btn);

        main.appendChild(div);

        index ++;
    }

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

    function createEl(type, text, style) {
        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        if (style) {
            element.className = style;
        }

        return element;
    }
}