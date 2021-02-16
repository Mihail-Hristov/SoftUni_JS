function solution() {
    let addBtn = document.getElementsByTagName('button')[0];
    let listOfGifts = document.getElementsByClassName('card')[1];
    let listOfSent = document.getElementsByClassName('card')[2].lastElementChild;
    let listofDiscard = document.getElementsByClassName('card')[3].lastElementChild;

    addBtn.addEventListener('click', add);
    listOfGifts.addEventListener('click', proceed);

    function add(ev) {
        let giftnName = document.querySelector('[placeholder="Gift name"]').value;
        document.querySelector('[placeholder="Gift name"]').value = '';

        let li = createElement('li', giftnName);
        let sendBtn = createElement('button', 'Send', 'sendButton');
        let discardBtn = createElement('button', 'Discard', 'discardButton');

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);


        li.className = 'gift';
        let giftsList = document.getElementsByClassName('card')[1].lastElementChild;
        console.log(giftsList.children);
        giftsList.appendChild(li);

        if(giftsList.childElementCount > 1) {
        Array.from(giftsList.children).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(li => giftsList.append(li));
        }
    }

    function createElement(type, text, style) {
        let el = document.createElement(type);
        if (text) {
            el.textContent = text;
        }

        if (style) {
            el.className = style;
        }
        return el;
    }

    function proceed(ev) {
        if (ev.target.textContent !== 'Send' && ev.target.textContent !== 'Discard') {
            return;
        }

        if (ev.target.textContent === 'Send') {
            let name = ev.target.parentNode.innerHTML.split('<')[0];

            let li = createElement('li', name, 'gift');
            listOfSent.appendChild(li);
            ev.target.parentNode.remove();
        }

        if (ev.target.textContent === 'Discard') {
            let name = ev.target.parentNode.innerHTML.split('<')[0];

            let li = createElement('li', name, 'gift');
            listofDiscard.appendChild(li);
            ev.target.parentNode.remove();
        }

    }


}