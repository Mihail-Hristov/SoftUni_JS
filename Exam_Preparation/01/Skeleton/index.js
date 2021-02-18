function solve() {
    const addBtn = document.querySelector('.admin-view button');
    const modules = document.querySelector('.modules');
   
    modules.addEventListener('click', del);
    addBtn.addEventListener('click', addCourse);

    function addCourse(e) {
        e.preventDefault();

        let name = document.querySelector('[name=lecture-name]').value;
        let date = document.querySelector('[name=lecture-date]').value;
        let module = (document.querySelector('[name=lecture-module]').value).toUpperCase() + '-MODULE';

        if (!name || !date || module === 'Select module') {
            return;
        }

        document.querySelector('[name=lecture-name]').value = '';
        document.querySelector('[name=lecture-date]').value = '';
        document.querySelector('[name=lecture-module]').value = 'Select module';

        let time = date.split('T');
        let newDate = time[0].split('-').join('/');
        let cont = name + ' - ' + newDate + ' - ' + time[1];

        let h4 = createEl('h4', cont);
        let delBtn = createEl('button', 'Del', 'red');

        let li = createEl('li', undefined, 'flex');

        li.appendChild(h4);
        li.appendChild(delBtn);

        let div;
        let ul;

        if (document.getElementsByClassName('modules')[0].childElementCount > 0) {
            let divs = Array.from(document.getElementsByClassName('modules')[0].children);
            for (const d of divs) {
                if (d.firstElementChild.textContent === module) {
                    ul = d.lastElementChild;
                    ul.appendChild(li);
                    sortLis();
                    return;
                }
            }
            ul = createEl('ul');
            ul.appendChild(li);

            let h3 = createEl('h3', module);

            div = createEl('div', undefined, 'module');
            div.appendChild(h3);
            div.appendChild(ul);
            modules.appendChild(div)
        } else {
            ul = createEl('ul');
            ul.appendChild(li);

            let h3 = createEl('h3', module);

            div = createEl('div', undefined, 'module');
            div.appendChild(h3);
            div.appendChild(ul);
            modules.appendChild(div);
        }

        sortLis();

    }

    function sortLis() {
        let divs = document.querySelectorAll('.modules');

        for (const div of divs) {
            let lis = div.lastElementChild.lastElementChild.children;

            Array.from(lis).sort((a, b) => a.firstElementChild.textContent.split(' - ')[1].localeCompare(b.firstElementChild.textContent.split(' - ')[1])).forEach(l => div.lastElementChild.lastElementChild.appendChild(l));
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

    function del(ev) {
        if(ev.target.textContent !== 'Del') {
            return;
        }

        if (ev.target.parentNode.parentNode.childElementCount >= 2) {
            ev.target.parentNode.remove()
        }else {
            ev.target.parentNode.parentNode.parentNode.remove();
        }
    }
};