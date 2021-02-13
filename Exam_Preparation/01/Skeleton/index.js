function solve() {
    let addBtn = document.querySelector('button');
    let trainingArea = document.querySelector('.user-view :last-child');

    trainingArea.addEventListener('click', del);

    let divs = [];

    console.log(trainingArea);

    addBtn.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();

        let name = document.querySelector('[name="lecture-name"]').value;
        let date = document.querySelector('[name="lecture-date"]').value;
        let module = document.querySelector('[name="lecture-module"]').value;

        if (name !== '' && date !== '' && module !== 'Select module') {

            let ul = document.createElement('ul');

            let li = document.createElement('li');
            li.className = 'flex';

            let h4 = document.createElement('h4');
            h4.textContent = `${name} - ${date}`;

            let delBtn = document.createElement('button');
            delBtn.className = 'red';
            delBtn.textContent = 'Del';

            li.appendChild(h4);
            li.appendChild(delBtn);

            ul.appendChild(li);

            let div;
            if (!divs.includes(module.toUpperCase())) {
                divs.push(module.toUpperCase());
                div = document.createElement('div');
                div.className = 'module';

                let h1 = document.createElement('h3');
                h1.textContent = `${module.toUpperCase()}-MODULE`;

                div.appendChild(h1);
                div.appendChild(ul);
                trainingArea.appendChild(div);
            } else {
                let existingDivs = document.getElementsByClassName('module');
                for (const el of existingDivs) {
                    let currentMod = el.firstChild.textContent.split('-')[0];
                    if (currentMod === module.toUpperCase()) {
                        div = el;
                        let lis = el.getElementsByTagName('li');
                        [].slice.call(lis).sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent))
                        .forEach((val, index) => ul.appendChild(val));
                        div.appendChild(ul);
                        break;
                    }
                }

            }


        document.querySelector('[name="lecture-name"]').value = '';
        document.querySelector('[name="lecture-date"]').value = '';
        document.querySelector('[name="lecture-module"]').value = 'Select module';
    }
}

function del(ev) {
    if (ev.target.localName === 'button') {
        if (ev.target.parentNode.parentNode.parentNode.childNodes.length > 2) {
            ev.target.parentNode.parentNode.remove();
        } else {
            let forDel = ev.target.parentNode.parentNode.parentNode.childNodes[0].textContent.split('-')[0];
            ev.target.parentNode.parentNode.parentNode.remove();
            let index = divs.indexOf(forDel);
            if (index > - 1) {
                divs.splice(index, 1);
            }
        }
    }
}

};