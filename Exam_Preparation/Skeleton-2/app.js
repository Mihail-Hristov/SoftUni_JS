function solve() {
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', add);

    let open = document.querySelectorAll('section')[1].children[1];
    let inProgress = document.querySelectorAll('section')[2].children[1];
    let finish = document.querySelectorAll('section')[3].children[1];
    open.addEventListener('click', proceed);
    inProgress.addEventListener('click', proceed);

    function add(ev) {
        ev.preventDefault();

        let task = document.getElementById('task').value;
        let description = 'Description: ' + document.getElementById('description').value;
        let date = 'Due Date: ' + document.getElementById('date').value;

        if (!task || !description || !date) {
            return;
        }

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';

        //let startBtn = document.createElement('button');
        //startBtn.textContent = 'Start';
        //startBtn.className = 'green';

        //let deleteBtn = document.createElement('button');
        //deleteBtn.textContent = 'Delete';
        //deleteBtn.className = 'red';

        let startBtn = createEl('button', 'Start', 'green');
        let deleteBtn = createEl('button', 'Delete', 'red');

        let div = createEl('div', undefined, 'flex');
        
        let ar = createEl('article');

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        let h3 = createEl('h3', task);
        let pDescription = createEl('p', description);
        
        let pDate = createEl('p', date);


        
        ar.appendChild(h3);
        ar.appendChild(pDescription);
        ar.appendChild(pDate);
        ar.appendChild(div);

        open.appendChild(ar);

    }

    function proceed(ev) {
        let token = ev.target.textContent;

        if (token === 'Start') {
            let temp = ev.target.parentNode.parentNode;
            ev.target.parentNode.parentNode.remove();
            temp.lastChild.firstChild.textContent = 'Delete';
            temp.lastChild.firstChild.className = 'red';
            temp.lastChild.lastChild.textContent = 'Finish';
            temp.lastChild.lastChild.className = 'orange';
            inProgress.appendChild(temp);
        }else if (token === 'Finish') {
            let temp = ev.target.parentNode.parentNode;
            ev.target.parentNode.parentNode.remove();
            temp.lastChild.remove();
            finish.appendChild(temp);
        }else if (token === 'Delete') {
            ev.target.parentNode.parentNode.remove();
        }else {
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