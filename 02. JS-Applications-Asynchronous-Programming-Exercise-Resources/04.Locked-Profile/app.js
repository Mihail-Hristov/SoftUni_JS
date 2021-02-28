async function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let main = document.getElementById('main');

    let response = await fetch(url);
    let data = await response.json();
    let index = 2;

    console.log(data);

    for (const item in data) {
        let userName = data.username;
        let age = data.age;
        let email = data.email;
        let current = 'user' + index
        console.log(current);

        let div = createEl('div', undefined, 'profile');

        let img = createEl('img', undefined, 'userInfo');
        img.src = './iconProfile2.png';
        div.appendChild(img);

        let labelLock = createEl('label', 'Lock');
        div.appendChild(labelLock);

        let inputL = createEl('input');
        inputL.type = 'radio';
        inputL.name = current + 'Locked';
        inputL.value = 'lock';
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


        let btn = createEl('button', 'Show more');
        div.appendChild(btn);

        main.appendChild(div);

        index ++;
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


/*
            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user1Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user1Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="" disabled readonly />
                <div id="user1HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user1Email" value="" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user1Age" value="" disabled readonly />
                </div>
                <button>Show more</button>
            </div>*/