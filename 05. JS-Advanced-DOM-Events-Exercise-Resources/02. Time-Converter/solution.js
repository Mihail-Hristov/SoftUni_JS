function attachEventsListeners() {

    let arr = Array.from(document.querySelectorAll('div'));
    arr.forEach(t => t.lastElementChild.addEventListener('click', convert));

    let days = '';
    let hours = '';
    let minutes = '';
    let seconds = '';

    function convert(ev) {
        let element = Number(ev.target.parentNode.getElementsByTagName('input')[0].value);
        let id = ev.target.parentNode.getElementsByTagName('input')[0].id;
        switch (id) {
            case 'days':
                days = element;
                hours = element * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case 'hours':
                hours = element;
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case 'minutes':
                hours = element / 60;
                days = hours / 24;
                minutes = element;
                seconds = minutes * 60;
                break;
            case 'seconds':
                seconds = element;
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
                break;
        }
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }


}