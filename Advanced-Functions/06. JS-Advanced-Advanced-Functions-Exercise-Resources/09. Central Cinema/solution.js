function solve() {
    let addBtn = document.querySelector('#container>button');
    addBtn.addEventListener('click', add);
    let clearBtn = document.querySelector('#archive>button');
    console.log(clearBtn);
    clearBtn.addEventListener('click', clear);
    const obj = {};


    function add(ev) {
        ev.preventDefault();
        let tokens = ev.target.parentNode.querySelectorAll('input');
        let name = tokens[0].value;
        let hall = tokens[1].value;
        let price = Number(tokens[2].value);


        if (name.length == 0 || hall.length == 0 || tokens[2].value.length == 0 || isNaN(price)) {
            return;
        }

        tokens[0].value = '';
        tokens[1].value = '';
        tokens[2].value = '';

        obj['name'] = name;
        obj['hall'] = hall;
        obj['price'] = price;

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = obj.name;

        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${obj.hall}`;

        li.appendChild(span);
        li.appendChild(strong);


        let div = document.createElement('div');

        let secondStrong = document.createElement('strong');
        secondStrong.textContent = obj.price;
        div.appendChild(secondStrong);

        let input = document.createElement('input');
        input.placeholder = 'Tickets Sold';

        let button = document.createElement('button');
        button.textContent = 'Archive';
        button.addEventListener('click', archive);

        div.appendChild(input);
        div.appendChild(button);

        li.appendChild(div);

        document.querySelector('ul').appendChild(li);
    }

    function archive(ev) {
        let soldTickets = Number(ev.target.parentNode.querySelector('input').value);
        let movieName = ev.target.parentNode.parentNode.querySelector('span').textContent;
        let price = Number(ev.target.parentNode.querySelector('strong').textContent);

        if (isNaN(soldTickets) || ev.target.parentNode.querySelector('input').value.length == 0) {
            return;
        }
        

        ev.target.parentNode.querySelector('input').value = '';

        let ul = document.querySelector('#archive ul');

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = movieName;
        li.appendChild(span);

        let strong = document.createElement('strong');
        let sum = (soldTickets * price).toFixed(2);
        strong.textContent = `Total amount: ${sum}`;
        li.appendChild(strong);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteMovie);
        li.appendChild(deleteBtn);

        ul.appendChild(li);

        ev.target.parentNode.parentNode.remove()
    }

    function deleteMovie(ev) {
        ev.target.parentNode.remove();
    }

    function clear(ev) {
        let ulChilds = ev.target.parentNode.querySelectorAll('li');
        for (const element of ulChilds) {
            element.remove();
        }
    }


}